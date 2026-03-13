---
title: 6.4 모터 이상 시 대처법
description: 모터 이상 발생 시 진단 및 대처 방법
sidebar:
  order: 4
---

모터에 이상이 발생했을 때의 진단 및 대처 방법입니다.

## 증상별 대처

### 모터가 전혀 동작하지 않는 경우

1. **비상정지 버튼** 확인 - 눌려있다면 시계 방향으로 돌려 해제
2. **모터 상태** 확인:
   ```
   ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
     "{item_name: 'Motor_State'}"
   ```
3. FAULT(4) 상태라면 서비스 재시작:
   ```
   sudo systemctl restart antbot
   ```

### 특정 휠만 동작하지 않는 경우

1. 해당 모터의 전류 확인:
   ```
   # M1~M4 중 해당 모터 확인 (예: M1)
   ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
     "{item_name: 'M1_Present_Current'}"
   ```
2. 전류가 0이면 모터 커넥터 접촉 불량 가능성
3. 모터 온도 확인 (과열 보호가 동작했을 수 있음):
   ```
   ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
     "{item_name: 'M1_Motor_Temperature'}"
   ```

### 스티어링이 비정상적인 경우

1. 스티어링 모터 현재 위치 확인:
   ```
   ros2 service call /direct_read antbot_interfaces/srv/DirectRead \
     "{item_name: 'S1_Present_Position'}"
   ```
2. 물리적 장애물이 스티어링을 막고 있는지 확인
3. 스티어링 한계: -56.175° ~ +56.175°

### 이상한 소음이 발생하는 경우

1. 모터 전류가 비정상적으로 높은지 확인
2. 휠에 이물질이 끼어있는지 확인
3. 스티어링 모듈 주변 확인
4. 지속적으로 발생 시 기술지원 문의

## 모터 리부팅

모터를 소프트웨어적으로 리부팅할 수 있습니다:

```
ros2 service call /direct_write antbot_interfaces/srv/DirectWrite \
  "{item_name: 'Motor_Reboot_Check', data: 1}"
```

:::caution
모터 리부팅 후 약 5초간 모터가 초기화됩니다. 이 기간 동안 로봇은 주행할 수 없습니다.
:::

## 기술지원 문의

위 방법으로 해결되지 않는 경우:

**ROBOTIS AI 기술지원팀:** [jdu@robotis.com](mailto:jdu@robotis.com)
