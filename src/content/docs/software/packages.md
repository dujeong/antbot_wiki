---
title: 3.2 자체 개발 패키지
description: ROBOTIS AI 자체 개발 ANTBot 패키지
sidebar:
  order: 2
---

ROBOTIS AI에서 개발한 ANTBot 전용 핵심 패키지 리스트입니다.

| **Package**                                                  | **설명**                                                    |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| [`antbot`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot) | 메타 패키지                                                 |
| [`antbot_bringup`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_bringup) | 전체 시스템 launch 파일 모음                                |
| [`antbot_description`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_description) | URDF / Xacro 로봇 모델 (센서 프레임, 메시 포함)             |
| [`antbot_swerve_controller`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_swerve_controller) | ros2_control 기반 스워브 드라이브 컨트롤러 (IK, 오도메트리) |
| [`antbot_hw_interface`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_hw_interface) | RCU 보드용 ros2_control `SystemInterface` 플러그인          |
| [`antbot_libs`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_libs) | ANTBot 내에서 사용하는 각종 라이브러리                      |
| [`antbot_camera`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_camera) | 멀티 카메라 드라이버 (V4L2 / USB / Orbbec RGB-D)            |
| [`antbot_imu`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_imu) | IMU 드라이버 (상보 필터, 자동 캘리브레이션)                 |
| [`antbot_teleop`](https://github.com/ROBOTIS-move/antbot/blob/main/antbot_teleop) | 키보드/조이스틱 원격 조종                                   |
