---
title: 하드웨어 Control Table
description: RCU 및 IMU 컨트롤 테이블 아이템 목록
sidebar:
  order: 3
---

GAEMI-1 G50 로봇에서 사용하는 컨트롤 테이블 아이템 목록입니다.

- **통신 프로토콜**: Dynamixel Protocol 2.0
- **모델 번호**: 526
- **R**: 읽기 전용 (RCU → Host)
- **RW**: 읽기/쓰기 (Host ↔ RCU)
- Scale은 raw 값 1 LSB당 물리 단위 변환 계수입니다. `physical_value = raw_value × scale`

---

## 3.1 RCU (Robot Control Unit)

### 3.1.1 System

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Robot_Generation | - | R | 로봇 세대 |
| RTC_Set_Date | YYMMDD | RW | 호스트 시간 동기화를 위한 날짜 설정 (예: 260225 → 2026년 2월 25일) |
| RTC_Set_Time | HHmmss | RW | 호스트 시간 동기화를 위한 시간 설정 (예: 143005 → 14시 30분 05초) |
| Sec_Since_Power_On | sec | R | 전원 투입 후 경과 시간 |
| Sec_Since_Reset | sec | R | 마지막 리셋 후 경과 시간 |
| Remote_Connected | - | R | 리모컨 연결 상태 |

### 3.1.2 Motor

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Motor_State | - | R | 모터 상태 (IDLE, READY_ENTER, READY, FAULT_ENTER, FAULT, FAULT_EXIT, NOT_CONNECT, BRAKE) |
| Motor_Reboot_Check | - | RW | 모터 리부팅 확인 |
| Motor_Goal_Acceleration | rev/min² (×53.644) | RW | 휠 모터 목표 가속도 |
| M1~M4_Goal_RPM | rev/min (×0.01) | RW | 휠 모터 목표 속도 |
| M1~M4_Present_RPM | rev/min (×0.01) | R | 휠 모터 현재 속도 |
| M1~M4_Present_Position | pulse | R | 휠 모터 현재 위치 (엔코더) |
| M1~M4_Present_Current | mA | R | 휠 모터 전류 |
| M1~M4_Motor_Temperature | °C | R | 휠 모터 코일 온도 |
| S1~S4_Goal_Position | pulse | RW | 스티어링 모터 목표 위치 |
| S1~S4_Present_Position | pulse | R | 스티어링 모터 현재 위치 |
| S1~S4_Profile_Acceleration | rev/min² (×214.577) | RW | 스티어링 가속도 프로파일 |
| S1~S4_Profile_Velocity | rev/min (×0.229) | RW | 스티어링 속도 프로파일 |
| S1~S4_Present_Current | mA | R | 스티어링 모터 전류 |

### 3.1.3 Battery

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Battery_Current | mA (×10) | R | 배터리 전류 |
| Battery_Voltage | V (×0.01) | R | 배터리 전압 |
| Battery_Capacity | Ah (×0.01) | R | 배터리 용량 |
| Battery_Percentage | % | R | 배터리 잔량 (SOC) |
| BMS_Temperature | °C | R | BMS 온도 |
| Battery_Is_Charging | - | R | 충전 상태 (Discharging, Charging) |

### 3.1.4 Emergency State

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Estop_State | - | R | 비상정지 상태 (OFF, ON) |

### 3.1.5 Docking & Charging

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Docking | - | R | 도킹 상태 (No, Yes) |
| Charging_Station_ID | - | R | 충전 스테이션 ID |
| Charging_Station_SET_ID | - | RW | 충전 스테이션 ID 설정 |
| Charge_Sequence | - | R | 충전 시퀀스 (Standby, Wait For Stable, Optimize Current, On Charge, Full Charged, Charge Error, Stop Charge) |
| Charge_Swerve_Status | - | R | 충전 시 스티어링 고정 상태 (Released, Gripped) |
| Charge_Force_Status | - | R | 강제 충전 상태 |
| Charge_Error | - | R | 충전 에러 코드 |
| Charge_Command | - | RW | 충전 명령 (None, Grip, Release, Force Charge Enable/Disable/Clear) |

### 3.1.6 Cargo (적재함)

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Cargo_Command | - | RW | 적재함 명령 (None, Stop, Lock, Unlock, Open, Close) |
| Cargo_Door_State | - | R | 도어 상태 (Closed, Opened) |
| Cargo_Lock_State | - | R | 잠금 상태 (Neutral, Locked, Unlocked, No_Response) |

### 3.1.7 LED

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Led_Flag_Mode | - | RW | 플래그 LED 모드 (OFF, LIVE, RGB, BLINK_100MS/500MS/1000MS, EYE_SOC/IDLING/SLEEPY/ANGRY/BLINK/OPEN/WOW) |
| Led_Flag_Brightness | % (×0.392) | RW | 플래그 LED 밝기 |
| Led_Flag_Control_Time | sec (×0.1) | RW | 플래그 LED 제어 시간 |
| Led_Eye_Mode | - | RW | 눈 LED 모드 (OFF, LIVE, RGB, BLINK_100MS/500MS/1000MS, EYE_SOC/IDLING/SLEEPY/ANGRY/BLINK/OPEN/WOW) |
| Led_Eye_Red/Green/Blue | % (×0.392) | RW | 눈 LED RGB |
| Led_Indicator_Left_Mode | - | RW | 좌측 인디케이터 모드 |
| Led_Indicator_Left_Red/Green/Blue | % (×0.392) | RW | 좌측 인디케이터 RGB |
| Led_Indicator_Right_Mode | - | RW | 우측 인디케이터 모드 |
| Led_Indicator_Right_Red/Green/Blue | % (×0.392) | RW | 우측 인디케이터 RGB |
| Led_Turn_Signal | - | RW | 방향지시등 (Off, Left, Right) |
| Led_Turn_Signal_Red/Green/Blue | % (×0.392) | RW | 방향지시등 RGB |

### 3.1.8 Headlight

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| Headlight_State | - | RW | 전조등 (OFF, ON) |

### 3.1.9 Wiper

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Wiper_Mode | - | RW | 와이퍼 모드 (Off, Once, INT) |
| Wiper_INT_Time | sec (×0.1) | RW | 간헐 와이퍼 주기 |
| Wiper_Hw_error_1~3 | - | R | 와이퍼 1~3 에러 코드 |

### 3.1.10 Relay

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Relay_Control | bitmask | RW | 릴레이 제어 (8채널, 비트 인코딩) |
| Relay_Timeout | sec (×0.1) | RW | 릴레이 자동 타임아웃 |

### 3.1.11 Barometer

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Pressure_Sensor_Connection | - | R | 기압 센서 연결 상태 (Disconnected, Connected) |
| ATM_Pressure | hPa (×0.01) | R | 대기압 |

### 3.1.12 Magnetometer

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| Magnet_Sensor_Connection | - | R | 지자기 센서 연결 상태 (Disconnected, Connected) |
| Magnet_Out_X/Y/Z | mG (×1.5) | R | 3축 자기장 |

### 3.1.13 Ultrasonic

| Name | Unit | R/W | Description |
| :--- | :--- | :--- | :--- |
| UltraSonic_1~2 | cm | R | 초음파 거리 센서 |

---

## 3.2 IMU

별도 통신 채널을 통해 RCU 보드의 IMU 데이터를 읽습니다. 모든 아이템은 읽기 전용입니다.

| Name | Unit (Scale) | R/W | Description |
| :--- | :--- | :--- | :--- |
| IMU_Acc_X/Y/Z | g (×0.0000610) | R | 3축 가속도 |
| IMU_Gyro_X/Y/Z | dps (×16.4) | R | 3축 각속도 |
