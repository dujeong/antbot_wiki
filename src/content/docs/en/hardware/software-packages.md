---
title: Software Packages
description: ANTBot ROS 2 drivers and package configuration
sidebar:
  order: 2
---

## 2.1 Open Source Repository

ROS 2 drivers and control packages for ANTBot operation are provided as open source. For detailed node configuration, topic specifications, parameter settings, and bringup instructions, please refer to the **README.md in the GitHub repository** below.

- **GitHub Repository:** [https://github.com/ROBOTIS-move/antbot](https://github.com/ROBOTIS-move/antbot)

## 2.2 In-house Packages

Core packages developed by ROBOTIS AI specifically for ANTBot.

| Package Name | Description | Note |
| --- | --- | --- |
| antbot_libs | Shared C++ library for Dynamixel Protocol 2.0 serial communication and XML control table parsing | Core Lib |
| antbot_hw_interface | ros2_control SystemInterface plugin. Connects wheel/steering motors, encoders, and battery to the ROS 2 control framework | Hardware I/F |
| antbot_imu | 6-axis IMU sensor node. Provides complementary filter-based pose estimation and auto-calibration | Sensor Node |
| antbot_description | URDF/xacro-based robot model definition (links, joints, sensor placement) | Robot Model |
| antbot_bringup | Launch files and configuration collection for integrated robot system execution | Integration |

## 2.3 Third-party Packages

External open source and hardware vendor-provided packages used for robot operation.

| Package Name | Source | Description | Note |
| --- | --- | --- | --- |
| DynamixelSDK | ROBOTIS | Standard SDK for Dynamixel Protocol 2.0 communication | |
| coin_d4_driver | ROBOTIS | COIN-D4 2D LiDAR data reception and processing driver | |
| vanjee_lidar_sdk | Vanjee | Vanjee 3D LiDAR ROS 2 standard driver | |
| vanjee_lidar_msg | Vanjee | Custom message definition package for Vanjee LiDAR data | |
| ublox | KumarRobotics | u-blox GPS/GNSS sensor ROS 2 driver | |
