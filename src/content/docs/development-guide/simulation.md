---
title: 5.3 시뮬레이션 환경 구축
description: ANTBot 시뮬레이션 환경 (URDF 시각화)
sidebar:
  order: 3
---

## URDF 모델 시각화

하드웨어 없이 ANTBot의 URDF 모델을 RViz에서 확인할 수 있습니다:

```
ros2 launch antbot_description description.launch.py
```

이 launch 파일은 다음을 실행합니다:
- `robot_state_publisher` - URDF를 TF로 브로드캐스트
- `joint_state_publisher_gui` - 조인트를 GUI 슬라이더로 제어
- `rviz2` - 3D 시각화

### Launch 인자

| 인자 | 기본값 | 설명 |
| :--- | :--- | :--- |
| `use_sim_time` | `false` | 시뮬레이션 시간 사용 여부 |
| `use_joint_state_publisher` | `false` | joint_state_publisher 사용 |
| `use_joint_state_publisher_gui` | `true` | GUI 슬라이더 활성화 |
| `use_rviz` | `true` | RViz 자동 실행 |

## 센서 시각화 (원격 PC)

실제 로봇의 센서 데이터를 별도 PC에서 RViz로 모니터링할 수 있습니다:

```
ros2 launch antbot_bringup view.launch.py
```

:::note[ROS 2 네트워크 설정]
원격 PC에서 로봇의 토픽을 수신하려면 동일한 ROS 2 DDS 네트워크에 있어야 합니다.
동일 서브넷(192.168.6.x)에 연결되어 있는지 확인하세요.
:::

:::note
Gazebo 기반 물리 시뮬레이션 환경은 추후 공개 예정입니다.
:::
