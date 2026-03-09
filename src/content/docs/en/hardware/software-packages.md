---
title: Software Packages
description: ANTBot ROS 2 drivers and package configuration
sidebar:
  order: 2
---

## 2.1 Open Source Repository

ROS 2 drivers and control packages for ANTBot operation are provided as open source. For detailed node configuration, topic specifications, parameter settings, and bringup instructions, please refer to the **README.md in the GitHub repository** below.

- **GitHub Repository:** [https://github.com/ROBOTIS-move/antbot](https://github.com/ROBOTIS-move/antbot)

### Key Topics

| Topic | Type | Direction | Description |
| --- | --- | --- | --- |
| `/cmd_vel` | geometry_msgs/Twist | Subscribe | Velocity command input |
| `/odom` | nav_msgs/Odometry | Publish | Odometry |
| `/tf` | tf2_msgs/TFMessage | Publish | Coordinate transforms |
| `/imu_node/imu/accel_gyro` | sensor_msgs/Imu | Publish | IMU data |
| `/sensor/camera/*/image_raw` | sensor_msgs/Image | Publish | Camera images |
| `/sensor/lidar_3d/point_cloud` | sensor_msgs/PointCloud2 | Publish | 3D LiDAR point cloud |
| `/sensor/lidar_2d_{front,back}/scan` | sensor_msgs/LaserScan | Publish | 2D LiDAR scans |

## 2.2 In-house Packages

Core packages developed by ROBOTIS AI specifically for ANTBot.

### antbot_libs
Shared C++ library for Dynamixel Protocol 2.0 serial communication and XML control table parsing.
- **Communicator**: Thread-safe serial communication with read/write buffer management
- **ControlTableParser**: XML-based hardware register map parsing
- **NodeThread**: Background thread utility for spinning ROS 2 nodes

### antbot_hw_interface
A ros2_control `SystemInterface` plugin that interfaces with the ANT-RCU board via Dynamixel Protocol 2.0.
- 4-wheel velocity control + 4-wheel steering position control
- Encoder feedback with multi-turn position tracking
- Battery state monitoring, ultrasonic sensors, cargo/headlight/wiper control
- **Topics**: `sensor_msgs/BatteryState`, `std_msgs/Float64MultiArray` (ultrasound distance)
- **Services**: `cargo/command`, `headlight/operation`, `wiper/operation`

### antbot_imu
6-axis IMU sensor node with complementary filter-based pose estimation and auto-calibration.
- Accelerometer + gyroscope fusion (complementary filter)
- Auto-calibration on startup with motion-aware pause
- 200Hz publish rate (configurable)
- **Publish**: `imu/accel_gyro` (sensor_msgs/Imu)
- **Subscribe**: `odom` (motion detection during calibration)

### antbot_description
URDF/xacro-based robot model definition package.
- Steering joint limits: -90° to +90°, continuous wheels
- Sensor frames for cameras (stereo + 4 mono), IMU, GNSS, magnetometer, LiDAR (2D front/back, 3D top), charging coil
- Modular xacro structure (base, wheels, sensors, ros2_control)

### antbot_bringup
Launch files and configuration collection for integrated robot system execution.
- `bringup.launch.py` — Full system bringup
- `controller.launch.py` — ros2_control + swerve controller
- `lidar_2d.launch.py`, `lidar_3d.launch.py` — LiDAR drivers
- `view.launch.py` — RViz visualization

### antbot_camera
Multi-driver camera package supporting V4L2 (Novitec + generic), USB, and Orbbec Gemini 336L RGB-D.
- Auto device discovery via sysfs port matching
- ROM-based calibration for Novitec cameras
- Configurable resolution, FPS, and distortion models
- Error recovery and hot-plug support
- **Publish**: `/sensor/camera/{driver_type}/{position}/image_raw`, `camera_info`

### antbot_swerve_controller
A ros2_control controller for non-coaxial swerve drives with steering angle limits.
- Full inverse kinematics with steering offset compensation
- Synchronized trapezoidal motion profiling
- Steering optimization (direction flip), scrub compensation
- Speed limiting (velocity, acceleration, jerk), wheel saturation scaling
- Multiple odometry solvers (SVD, QR, pseudo-inverse)
- Real-time safe (no heap allocation in update loop)
- **Subscribe**: `/cmd_vel`, `~/direct_joint_commands`
- **Publish**: `~/odom`, `/tf`, `~/planned_trajectory`

### antbot_teleop
Teleoperation package providing keyboard and joystick (DualSense/PS4) control nodes.
- **teleop_keyboard**: W/X forward/backward, A/D strafe, Q/E rotate, 1-9 speed levels
- **teleop_joystick**: DualSense/PS4 support, curve driving and in-place rotation modes
- **Publish**: `/cmd_vel`
- **Services called**: `cargo/command`, `headlight/operation`, `wiper/operation`

## 2.3 Third-party Packages

External open source and hardware vendor-provided packages used for robot operation.

| Package Name | Source | Description | Note |
| --- | --- | --- | --- |
| DynamixelSDK | ROBOTIS | Standard SDK for Dynamixel Protocol 2.0 communication | |
| coin_d4_driver | ROBOTIS | COIN-D4 2D LiDAR data reception and processing driver | |
| vanjee_lidar_sdk | Vanjee | Vanjee 3D LiDAR ROS 2 standard driver | |
| vanjee_lidar_msg | Vanjee | Custom message definition package for Vanjee LiDAR data | |
| ublox | KumarRobotics | u-blox GPS/GNSS sensor ROS 2 driver | |
