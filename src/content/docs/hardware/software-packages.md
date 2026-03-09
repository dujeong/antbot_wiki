---
title: 소프트웨어 패키지 구성
description: ANTBot ROS 2 드라이버 및 패키지 구성
sidebar:
  order: 2
---

## 2.1 오픈소스 저장소 안내

ANTBot의 구동을 위한 ROS 2 드라이버 및 제어 패키지는 오픈소스로 제공됩니다. 상세한 노드 구성, 토픽 명세, 파라미터 설정 및 실행 방법(Bringup)은 아래 **GitHub 저장소의 README.md**를 참고해 주시기 바랍니다.

- **GitHub Repository:** [https://github.com/ROBOTIS-move/antbot](https://github.com/ROBOTIS-move/antbot)

### 주요 토픽 구성

| 토픽 | 타입 | 방향 | 설명 |
| --- | --- | --- | --- |
| `/cmd_vel` | geometry_msgs/Twist | Subscribe | 속도 명령 입력 |
| `/odom` | nav_msgs/Odometry | Publish | 오도메트리 |
| `/tf` | tf2_msgs/TFMessage | Publish | 좌표 변환 |
| `/imu_node/imu/accel_gyro` | sensor_msgs/Imu | Publish | IMU 데이터 |
| `/sensor/camera/*/image_raw` | sensor_msgs/Image | Publish | 카메라 이미지 |
| `/sensor/lidar_3d/point_cloud` | sensor_msgs/PointCloud2 | Publish | 3D LiDAR 포인트클라우드 |
| `/sensor/lidar_2d_{front,back}/scan` | sensor_msgs/LaserScan | Publish | 2D LiDAR 스캔 |

## 2.2 자체 개발 패키지

ROBOTIS AI에서 개발한 ANTBot 전용 핵심 패키지 리스트입니다.

### antbot_libs
Dynamixel Protocol 2.0 시리얼 통신 및 XML 컨트롤 테이블 파싱을 위한 공유 C++ 라이브러리입니다.
- **Communicator**: 스레드 안전 시리얼 통신, 읽기/쓰기 버퍼 관리
- **ControlTableParser**: XML 기반 하드웨어 레지스터 맵 파싱
- **NodeThread**: ROS 2 노드 백그라운드 스핀 유틸리티

### antbot_hw_interface
ros2_control `SystemInterface` 플러그인으로, ANT-RCU 보드와 Dynamixel Protocol 2.0으로 통신합니다.
- 4륜 속도 제어 + 4륜 조향 위치 제어
- 엔코더 피드백 (멀티턴 위치 추적)
- 배터리 상태 모니터링, 초음파 센서, 카고/전조등/와이퍼 제어
- **토픽**: `sensor_msgs/BatteryState`, `std_msgs/Float64MultiArray` (초음파 거리)
- **서비스**: `cargo/command`, `headlight/operation`, `wiper/operation`

### antbot_imu
6축 IMU 센서 노드로 상보 필터 기반 자세 추정 및 자동 캘리브레이션을 제공합니다.
- 가속도계 + 자이로스코프 융합 (상보 필터)
- 시작 시 자동 캘리브레이션 (모션 감지 시 일시 중지)
- 200Hz 퍼블리시 (설정 가능)
- **Publish**: `imu/accel_gyro` (sensor_msgs/Imu)
- **Subscribe**: `odom` (캘리브레이션 중 모션 감지용)

### antbot_description
URDF/xacro 기반 로봇 모델 정의 패키지입니다.
- 조향 조인트 범위: -90° ~ +90°, 연속 회전 휠
- 카메라(스테레오 + 모노 4대), IMU, GNSS, 지자기, LiDAR(2D 전후방, 3D 상단), 충전 코일 센서 프레임 정의
- 모듈식 xacro 구조 (base, wheels, sensors, ros2_control)

### antbot_bringup
로봇 전체 시스템 통합 실행을 위한 launch 파일 및 설정 모음입니다.
- `bringup.launch.py` — 전체 시스템 실행
- `controller.launch.py` — ros2_control + swerve 컨트롤러
- `lidar_2d.launch.py`, `lidar_3d.launch.py` — LiDAR 드라이버
- `view.launch.py` — RViz 시각화

### antbot_camera
V4L2(Novitec + 범용), USB, Orbbec Gemini 336L RGB-D를 지원하는 멀티 드라이버 카메라 패키지입니다.
- sysfs 포트 매칭 기반 자동 장치 탐색
- Novitec 카메라 ROM 기반 캘리브레이션
- 해상도, FPS, 왜곡 모델 설정 가능
- 에러 복구 및 핫플러그 지원
- **Publish**: `/sensor/camera/{driver_type}/{position}/image_raw`, `camera_info`

### antbot_swerve_controller
비동축 swerve 드라이브용 ros2_control 컨트롤러입니다.
- 조향 오프셋 보상이 포함된 역기구학(IK) 연산
- 동기화 사다리꼴 모션 프로파일링
- 조향 최적화 (방향 반전), 스크럽 보상
- 속도/가속도/저크 제한, 휠 포화 스케일링
- 다중 오도메트리 솔버 (SVD, QR, pseudo-inverse)
- 실시간 안전 (업데이트 루프 내 힙 할당 없음)
- **Subscribe**: `/cmd_vel`, `~/direct_joint_commands`
- **Publish**: `~/odom`, `/tf`, `~/planned_trajectory`

### antbot_teleop
키보드 및 조이스틱(DualSense/PS4) 텔레오퍼레이션 패키지입니다.
- **teleop_keyboard**: W/X 전후진, A/D 횡이동, Q/E 회전, 1-9 속도 단계
- **teleop_joystick**: DualSense/PS4 지원, 곡선 주행 및 제자리 회전 모드
- **Publish**: `/cmd_vel`
- **서비스 호출**: `cargo/command`, `headlight/operation`, `wiper/operation`

## 2.3 외부 의존 패키지 (Third-party Packages)

로봇 구동을 위해 활용된 외부 오픈소스 및 하드웨어 제조사 제공 패키지입니다.

| 패키지 명칭 | 출처 (Source) | 설명 | 비고 |
| --- | --- | --- | --- |
| DynamixelSDK | ROBOTIS | Dynamixel Protocol 2.0 통신용 표준 SDK | |
| coin_d4_driver | ROBOTIS | COIN-D4 2D LiDAR 데이터 수신 및 처리 드라이버 | |
| vanjee_lidar_sdk | Vanjee (万集) | Vanjee 3D LiDAR ROS 2 표준 드라이버 | |
| vanjee_lidar_msg | Vanjee (万集) | Vanjee LiDAR 데이터용 커스텀 메시지 정의 패키지 | |
| ublox | KumarRobotics | u-blox GPS/GNSS 센서 ROS 2 드라이버 | |
