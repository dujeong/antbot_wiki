---
title: 6.1 펌웨어 진단
description: RCU 보드 펌웨어 진단 및 상태 확인
sidebar:
  order: 1
---

RCU(Robot Control Unit) 보드의 상태를 확인하고 진단하는 방법입니다.

## Dynamixel Wizard 2.0을 통한 진단

RCU 보드 진단이 필요한 경우, **Dynamixel Wizard 2.0**을 활용합니다.

### 진단 순서

1. 로봇 PC에 SSH 접속합니다
2. ANTBot 서비스를 정지합니다 (시리얼 포트 충돌 방지)
   ```
   sudo systemctl stop antbot
   ```
3. Dynamixel Wizard 2.0을 실행합니다
4. 포트 스캔: `/dev/ttyUSB0`, 보드레이트: `4,000,000 bps`
5. RCU 보드 (ID: 200) 검색 확인
6. 컨트롤 테이블 아이템 읽기/쓰기로 진단

### 확인 항목

| 항목 | 컨트롤 테이블 아이템 | 정상 값 |
| :--- | :--- | :--- |
| 모터 상태 | `Motor_State` | READY (2) |
| 비상정지 | `Estop_State` | OFF (0) |
| 배터리 전압 | `Battery_Voltage` | 20~29 V |
| 배터리 잔량 | `Battery_Percentage` | 0~100 % |
| BMS 온도 | `BMS_Temperature` | -10~60 °C |

## ROS 2를 통한 진단

서비스를 정지하지 않고 ROS 2 인터페이스로 직접 진단할 수도 있습니다:

```
# 배터리 잔량 확인
ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
  "{item_name: 'Battery_Percentage'}"

# 모터 상태 확인
ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
  "{item_name: 'Motor_State'}"

# 비상정지 상태 확인
ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
  "{item_name: 'Estop_State'}"
```

## 모터 상태 코드

| 코드 | 상태 | 설명 |
| :---: | :--- | :--- |
| 0 | IDLE | 초기 상태 |
| 1 | READY_ENTER | 준비 진입 중 |
| 2 | READY | 정상 준비 완료 |
| 3 | RUNNING | 동작 중 |
| 4 | FAULT | 이상 발생 |
| 5 | BRAKE | 브레이크 상태 |

## 통신 진단 체크리스트

- [ ] `/dev/ttyUSB0` (RCU)가 존재하는지 확인: `ls -la /dev/ttyUSB*`
- [ ] `/dev/ttyUSB1` (IMU)가 존재하는지 확인
- [ ] 보드레이트가 4,000,000 bps인지 확인
- [ ] RCU 보드 ID가 200인지 확인
- [ ] USB 케이블 접촉 불량 여부 확인
