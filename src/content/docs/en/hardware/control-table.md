---
title: Hardware Control Table
description: RCU and IMU control table item list
sidebar:
  order: 3
---

Control table item list used in the GAEMI-1 G50 robot.

- **Communication Protocol**: Dynamixel Protocol 2.0
- **Model Number**: 526
- **R**: Read-only (RCU → Host)
- **RW**: Read/Write (Host ↔ RCU)
- Scale is the physical unit conversion factor per 1 LSB of raw value. `physical_value = raw_value × scale`

---

## 3.1 RCU (Robot Control Unit)

### 3.1.1 System

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Robot_Generation | - | R | Robot generation |
| RTC_Set_Date | YYMMDD | RW | Date setting for host time synchronization (e.g., 260225 → Feb 25, 2026) |
| RTC_Set_Time | HHmmss | RW | Time setting for host time synchronization (e.g., 143005 → 14:30:05) |
| Sec_Since_Power_On | sec | R | Elapsed time since power on |
| Sec_Since_Reset | sec | R | Elapsed time since last reset |
| Remote_Connected | - | R | Remote controller connection status |

### 3.1.2 Motor

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Motor_State | - | R | Motor state (IDLE, READY_ENTER, READY, FAULT_ENTER, FAULT, FAULT_EXIT, NOT_CONNECT, BRAKE) |
| Motor_Reboot_Check | - | RW | Motor reboot confirmation |
| Motor_Goal_Acceleration | rev/min² (×53.644) | RW | Wheel motor goal acceleration |
| M1~M4_Goal_RPM | rev/min (×0.01) | RW | Wheel motor goal speed |
| M1~M4_Present_RPM | rev/min (×0.01) | R | Wheel motor current speed |
| M1~M4_Present_Position | pulse | R | Wheel motor current position (encoder) |
| M1~M4_Present_Current | mA | R | Wheel motor current |
| M1~M4_Motor_Temperature | °C | R | Wheel motor coil temperature |
| S1~S4_Goal_Position | pulse | RW | Steering motor goal position |
| S1~S4_Present_Position | pulse | R | Steering motor current position |
| S1~S4_Profile_Acceleration | rev/min² (×214.577) | RW | Steering acceleration profile |
| S1~S4_Profile_Velocity | rev/min (×0.229) | RW | Steering velocity profile |
| S1~S4_Present_Current | mA | R | Steering motor current |

### 3.1.3 Battery

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Battery_Current | mA (×10) | R | Battery current |
| Battery_Voltage | V (×0.01) | R | Battery voltage |
| Battery_Capacity | Ah (×0.01) | R | Battery capacity |
| Battery_Percentage | % | R | Battery remaining (SOC) |
| BMS_Temperature | °C | R | BMS temperature |
| Battery_Is_Charging | - | R | Charging state (Discharging, Charging) |

### 3.1.4 Emergency State

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Estop_State | - | R | Emergency stop state (OFF, ON) |

### 3.1.5 Docking & Charging

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Docking | - | R | Docking state (No, Yes) |
| Charging_Station_ID | - | R | Charging station ID |
| Charging_Station_SET_ID | - | RW | Charging station ID setting |
| Charge_Sequence | - | R | Charge sequence (Standby, Wait For Stable, Optimize Current, On Charge, Full Charged, Charge Error, Stop Charge) |
| Charge_Swerve_Status | - | R | Steering lock state during charging (Released, Gripped) |
| Charge_Force_Status | - | R | Force charging state |
| Charge_Error | - | R | Charging error code |
| Charge_Command | - | RW | Charge command (None, Grip, Release, Force Charge Enable/Disable/Clear) |

### 3.1.6 Cargo

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Cargo_Command | - | RW | Cargo command (None, Stop, Lock, Unlock, Open, Close) |
| Cargo_Door_State | - | R | Door state (Closed, Opened) |
| Cargo_Lock_State | - | R | Lock state (Neutral, Locked, Unlocked, No_Response) |

### 3.1.7 LED

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Led_Flag_Mode | - | RW | Flag LED mode (OFF, LIVE, RGB, BLINK_100MS/500MS/1000MS, EYE_SOC/IDLING/SLEEPY/ANGRY/BLINK/OPEN/WOW) |
| Led_Flag_Brightness | % (×0.392) | RW | Flag LED brightness |
| Led_Flag_Control_Time | sec (×0.1) | RW | Flag LED control time |
| Led_Eye_Mode | - | RW | Eye LED mode (OFF, LIVE, RGB, BLINK_100MS/500MS/1000MS, EYE_SOC/IDLING/SLEEPY/ANGRY/BLINK/OPEN/WOW) |
| Led_Eye_Red/Green/Blue | % (×0.392) | RW | Eye LED RGB |
| Led_Indicator_Left_Mode | - | RW | Left indicator mode |
| Led_Indicator_Left_Red/Green/Blue | % (×0.392) | RW | Left indicator RGB |
| Led_Indicator_Right_Mode | - | RW | Right indicator mode |
| Led_Indicator_Right_Red/Green/Blue | % (×0.392) | RW | Right indicator RGB |
| Led_Turn_Signal | - | RW | Turn signal (Off, Left, Right) |
| Led_Turn_Signal_Red/Green/Blue | % (×0.392) | RW | Turn signal RGB |

### 3.1.8 Headlight

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Headlight_State | - | RW | Headlight (OFF, ON) |

### 3.1.9 Wiper

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Wiper_Mode | - | RW | Wiper mode (Off, Once, INT) |
| Wiper_INT_Time | sec (×0.1) | RW | Intermittent wiper interval |
| Wiper_Hw_error_1~3 | - | R | Wiper 1~3 error code |

### 3.1.10 Relay

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Relay_Control | bitmask | RW | Relay control (8 channels, bit encoded) |
| Relay_Timeout | sec (×0.1) | RW | Relay auto timeout |

### 3.1.11 Barometer

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Pressure_Sensor_Connection | - | R | Barometer connection status (Disconnected, Connected) |
| ATM_Pressure | hPa (×0.01) | R | Atmospheric pressure |

### 3.1.12 Magnetometer

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Magnet_Sensor_Connection | - | R | Magnetometer connection status (Disconnected, Connected) |
| Magnet_Out_X/Y/Z | mG (×1.5) | R | 3-axis magnetic field |

### 3.1.13 Ultrasonic

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| UltraSonic_1~2 | cm | R | Ultrasonic distance sensor |

---

## 3.2 IMU

IMU data is read from the RCU board through a separate communication channel. All items are read-only.

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| IMU_Acc_X/Y/Z | g (×0.0000610) | R | 3-axis acceleration |
| IMU_Gyro_X/Y/Z | dps (×16.4) | R | 3-axis angular velocity |
