---
title: 소프트웨어 패키지 구성
description: ANTBot ROS 2 드라이버 및 패키지 구성
sidebar:
  order: 2
---

## 2.1 오픈소스 저장소 안내

ANTBot의 구동을 위한 ROS 2 드라이버 및 제어 패키지는 오픈소스로 제공됩니다. 상세한 노드 구성, 토픽 명세, 파라미터 설정 및 실행 방법(Bringup)은 아래 **GitHub 저장소의 README.md**를 참고해 주시기 바랍니다.

- **GitHub Repository:** [https://github.com/ROBOTIS-move/antbot](https://github.com/ROBOTIS-move/antbot)

## 2.2 자체 개발 패키지

ROBOTIS AI에서 개발한 ANTBot 전용 핵심 패키지 리스트입니다.

| 패키지 명칭 | 설명 | 비고 |
| --- | --- | --- |
| antbot_libs | Dynamixel Protocol 2.0 시리얼 통신 및 XML 컨트롤 테이블 파싱을 위한 공유 C++ 라이브러리 | Core Lib |
| antbot_hw_interface | ros2_control SystemInterface 플러그인. 휠/조향 모터, 엔코더, 배터리를 ROS 2 제어 프레임워크에 연결 | Hardware I/F |
| antbot_imu | 6축 IMU 센서 노드. 상보 필터 기반 자세 추정 및 자동 캘리브레이션 제공 | Sensor Node |
| antbot_description | URDF/xacro 기반 로봇 모델 정의 (링크, 조인트, 센서 배치) | Robot Model |
| antbot_bringup | 로봇 전체 시스템 통합 실행을 위한 launch 파일 및 설정 모음 | Integration |

## 2.3 외부 의존 패키지 (Third-party Packages)

로봇 구동을 위해 활용된 외부 오픈소스 및 하드웨어 제조사 제공 패키지입니다.

| 패키지 명칭 | 출처 (Source) | 설명 | 비고 |
| --- | --- | --- | --- |
| DynamixelSDK | ROBOTIS | Dynamixel Protocol 2.0 통신용 표준 SDK | |
| coin_d4_driver | ROBOTIS | COIN-D4 2D LiDAR 데이터 수신 및 처리 드라이버 | |
| vanjee_lidar_sdk | Vanjee (万集) | Vanjee 3D LiDAR ROS 2 표준 드라이버 | |
| vanjee_lidar_msg | Vanjee (万集) | Vanjee LiDAR 데이터용 커스텀 메시지 정의 패키지 | |
| ublox | KumarRobotics | u-blox GPS/GNSS 센서 ROS 2 드라이버 | |
