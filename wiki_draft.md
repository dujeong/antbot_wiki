# 1. Introduction

- 설명예시:

  ```
  복서는 산업용 응용 분야의 프로토타이핑 및 개발을 위한 대형 실내 이동식 로봇입니다.
  OTTO 모터스의 OTTO 100 자율 이동 로봇(AMR)을 개조한 Boxer는 프로그래밍 가능하며 추가 하드웨어로 쉽게 확장할 수 있습니다.
  ```

## 1.1 shipment contents

- RobotisAI ANTBot
- Manual Charger
- Optional: 도킹 스테이션?

# 2. Hardware

## **2.1 Exterior Features**

![image.png](attachment:0e0fb2a5-8c7d-46d3-a7e0-c5331d4919a0:image.png)

## 2.2 **Human-Machine Interface (HMI) Panel**

ANTBot 좌측에 HMI  패널이 있습니다.

1. HDMI port
2. USB port 1
3. USB port 2
4. 수동 충전 단자

![image.png](attachment:8719e424-3d75-4ce0-a209-a898d362c89f:image.png)

## 2.3 Emergency Stop Button

비상정지 버튼이 눌리면 모터 정지가 정지하며 토크를 유지하게 됩니다.

(사진 첨부)

## 2.4 Hardware Specifications

| **항목**                         | **내용**                                                   |
| -------------------------------- | ---------------------------------------------------------- |
| 사이즈 / 무게                    | L762 x W582 x H766(with Flag 1,373) (mm) **/** 62.1kg      |
| 적재용량                         | L410 x W410 x H320 (mm), 53.8ℓ                             |
| 적재중량(권장/최대)              | 10kg이하 권장 / 최대 20kg 적재 가능                        |
| 주행 속도                        | 0.5 ~ 2.0 m/s                                              |
| 주행 가능 단차                   | 5kg 이하 적재 시 Max. 90mm / 20kg 적재 시 50mm             |
| 등판 각도                        | 15˚                                                        |
| 연속주행 / 충전시간              | 0시간 / 0시간                                              |
| 배터리 종류 / 개수 / 용량 / 정격 | LFP / 1팩 / 65Ah / 25.6V                                   |
| 충전 방식                        | Wireless autonomous charge                                 |
| 사용 온도 / 통신 방식            | -10 ~ 40℃ (Cold Start 0 ~ 40℃) / 5G (LTE-CA)               |
| 스티어링 방식                    | Swerve (AWD)                                               |
| 카고 사양                        | Single (수동개폐)                                          |
| 방수 등급                        | IPX4                                                       |
| 인증사항 (예정)                  | 실외이동로봇 운행안전인증, KC, KS B 7317                   |
| (진행 중)                        |                                                            |
| 운영체제                         | ROS 2                                                      |
| 기타                             | 관제시스템 연동, 야간 주행 (전조등), 횡단보도 통행, LED 등 |

## 2.5 **Sensor Coordinate Reference**

![image.png](attachment:33e027a0-3bd9-457e-8d4e-bf7f0ab71a56:image.png)

| **구분**               |          | **X**    | **Y**    | **Z**   | **Roll**  | **Pitch** | **Yaw** |
| ---------------------- | -------- | -------- | -------- | ------- | --------- | --------- | ------- |
| 단위                   |          | mm       |          |         | degree(˚) |           |         |
| Mono Cam               | LEFT     | 260.000  | 258.950  | 584.500 | 0         | 0         | -90     |
|                        | CENTER   | 362.250  | 0        | 584.500 | 0         | 0         | 0       |
|                        | RIGHT    | 260.000  | -258.950 | 584.500 | 0         | 0         | 90      |
|                        | BACK     | -373.500 | 0        | 296.000 | 0         | 180       | 0       |
| Depth Cam              | CENTER   | 348.563  | 0        | 526.200 | 0         | 30        | 0       |
| LiDAR                  | 2D FRONT | 320.000  | 0        | 252.000 | 180       | 0         | 0       |
|                        | 2D BACK  | -320.000 | 0        | 252.000 | 0         | 180       | 0       |
|                        | 3D       | 225.233  | 0        | 721.313 | 0         | 10        | -90     |
| IMU (RCU U60)          |          | 240.000  | 0        | 379.200 | 0         | 0         | 180     |
| GNSS                   |          | 202.600  | -128.000 | 657.000 | 0         | 0         | 180     |
| Magnetometer (RCU U59) |          | 240.000  | -11.000  | 379.200 | 0         | 0         | 0       |
| Wireless Charging Coil |          | -299.000 | 0        | 170.627 | 0         | 0         | 0       |

## 2.6 On-board Computer Specifications

ANTBot은 시스템 제어를 위해 ROS2 API를 통해 제어할 수 있습니다.

### 2.6.1 플랫폼 기본 정보

| **항목**              | 내용                          |
| --------------------- | ----------------------------- |
| **ROS2 배포판**       | humble                        |
| **DDS 미들웨어**      | FastDDS                       |
| **OS 및 커널**        | Ubuntu 22.04 / 5.15.136-tegra |
| **부팅 시 자동 실행** | systemd 서비스명: antbot      |

### 2.6.2 Computing board specifications

| **항목**              | **상세 내용**                   |
| --------------------- | ------------------------------- |
| **모델명**            | NVIDIA® Jetson AGX Orin™ 32GB   |
| **CPU (프로세서)**    | 8-core NVIDIA Arm® Cortex-A78AE |
| **CPU 아키텍처**      | v8.2 64-bit                     |
| **GPU 아키텍처**      | NVIDIA Ampere                   |
| **캐시 메모리**       | 2MB L2 + 4MB L3                 |
| **메모리 (RAM)**      | 32GB LPDDR5                     |
| **메모리 인터페이스** | 256-bit                         |
| **메모리 대역폭**     | 204.8GB/s                       |

# 3. Software

### **3.1 오픈소스 저장소 안내**

ANTBot의 구동을 위한 ROS 2 드라이버 및 제어 패키지는 오픈소스로 제공됩니다. 상세한 노드 구성, 토픽 명세, 파라미터 설정 및 실행 방법(Bringup)은 아래 **GitHub 저장소의 [README.md](http://README.md)**를 참고해 주시기 바랍니다.

- **GitHub Repository:** https://github.com/ROBOTIS-move/antbot

### **3.2 자체 개발 패키지**

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

### **3.3 외부 의존 패키지 (Third-party Packages)**

로봇 구동을 위해 활용된 외부 오픈소스 및 하드웨어 제조사 제공 패키지입니다.

| **패키지 명칭**  | **출처 (Source)** | **설명**                                        |
| ---------------- | ----------------- | ----------------------------------------------- |
| DynamixelSDK     | ROBOTIS           | Dynamixel Protocol 2.0 통신용 표준 SDK          |
| coin_d4_driver   | ROBOTIS           | COIN-D4 2D LiDAR 데이터 수신 및 처리 드라이버   |
| vanjee_lidar_sdk | Vanjee (万集)     | Vanjee 3D LiDAR ROS 2 표준 드라이버             |
| vanjee_lidar_msg | Vanjee (万集)     | Vanjee LiDAR 데이터용 커스텀 메시지 정의 패키지 |
| ublox            | KumarRobotics     | u-blox GPS/GNSS 센서 ROS 2 드라이버             |

### **3.**4 소프트웨어 환경 구축

제공된 소스코드를 빌드하기 위해 아래 스크립트를 터미널에서 실행합니다.

```bash
# ANTBot 한 줄 설치 스크립트 실행
curl -sSL <https://github.com/ROBOTIS-move/antbot/install/main/setting.sh> | bash
```

# 4. Quick Start

## 4.1 Unboxing

(포장된 사진 첨부)

## 4.2 Powering Up

전원 버튼을 beep음 들릴때까지 누르기 (대략 1~2초)

(전원 버튼 사진 첨부)

## 4.3 ANTBot computer 네트워크 설정

ANTBot 컴퓨터는 네트워크 구성 도구로 `netplan` 을 사용합니다.

인터페이스 이름은 `eth0` 이며, 고정 IP 주소는 `192.168.6.2` 입니다.

### 4.3.1 원격으로 ANTBot 컴퓨터에 접속

1. 고객사측에서 설치한 네트워크 장비의 내부 네트워크 주소 범위를 `192.168.6` 대로 설정

2. 랩탑을 동일한 네트워크로 접속시킨 후, 아래 명령어를 통해 ssh 접속

   ```bash
   ssh antbot@192.168.6.2
   ```

### 4.3.2 고정 IP 주소 변경

1. `/etc/netplan/interfaces.yaml` 파일 수정 (addresses 항목)

   ```yaml
   network:
     version: 2
     renderer: networkd
     ethernets:
       eth0:
         dhcp4: no
         addresses: [192.168.6.2/24]
         routes:
           - to: default
             via: 192.168.6.1
         nameservers:
           addresses: [8.8.8.8, 8.8.4.4]
   ```

2. 아래 명령어를 통해 네트워크 설정 반영

   ```bash
   sudo netplan apply
   ```

3. 아래 명령어를 통해 인터페이스(`eth0`)에 할당된 IP 주소 확인

   ```bash
   ip a
   ```

## 4.4 Battery Charging

제공된 수동 충전기 또는 무선 충전 스테이션을 통해 충전할 수 있습니다.

배터리 5% 이하일 시 충전이 되지 않을 경우, 1분동안 부저음 발생 후 전원이 꺼지게 됩니다.

### 4.4.1 수동 충전기

(수동 충전기 연결된 사진 첨부)

### 4.4.2 무선 충전 스테이션

(충전 스테이션에 도킹된 사진 첨부)

## 4.5 Using the Controller

PS5 DualSense 컨트롤러를 사용해 ANTBot을 수동 조작할 수 있습니다.

컨트롤러를 USB port 1(파란색)에 유선 연결하면, 자동으로 컨트롤러를 인식하여 아래 매뉴얼대로 사용할 수 있습니다. (컨트롤러 인식시까지 2~3초 소요)

![image.png](attachment:ec53fa5d-66d5-42b0-9d19-9da7676192ea:image.png)

## 4.6 SSD 마운트

SSD를 마운트하기 위해 아래 스크립트를 터미널에서 실행합니다.

```bash
# SSD 파티션 초기화

sudo /sbin/parted /dev/nvme0n1 mklabel gpt --script
sudo mkfs.ext4 /dev/nvme0n1

# SSD 마운트
sudo mount /dev/nvme0n1 {마운트 폴더 경로}
```

# 5. 소프트웨어 개발 가이드

## 5.1 컨트롤 테이블

컨트롤 테이블은 장치의 현재 상태와 구동 및 제어에 필요한 다수의 데이터로 이루어져 있습니다.

사용자는 [다이나믹셀 프로토콜 2.0](https://emanual.robotis.com/docs/kr/dxl/protocol2/)을 사용해 컨트롤 테이블의 특정 데이터를 읽어서 장치의 상태를 파악할 수 있고, 데이터를 변경함으로써 장치를 제어할 수 있습니다.

### 5.1.1 컨트롤 아이템 기본정보

- 크기

  데이터의 크기는 용도에 따라 1 ~ 4 byte로 정해져 있으며, 컨트롤 테이블을 통해 해당 데이터의 크기를 확인하시기 바랍니다.

  2 byte 이상의 연속된 데이터는 Little Endian 규칙에 의해 기록됩니다.

- 접근권한

  컨트롤 테이블의 데이터는 2가지 접근 속성을 갖습니다. ‘RW’는 읽기와 쓰기 접근이 모두 가능합니다. 반면 ‘R’은 읽기 전용(Read Only) 속성을 갖습니다.

  읽기 전용 속성의 데이터는 해당 주소로 값을 쓰더라도 값이 변경되지 않습니다.

- 기본값

  컨트롤 테이블에 표기된 기본값은 장치에 전원이 인가되었을 때 설정되는 값입니다.

  전원이 꺼지면 값이 보존되지 않습니다.

### 5.1.2 ANTBot 컨트롤 테이블

(추가 예정)

## 5.2 주요 ROS 토픽/서비스

(추가 예정)

## 5.3 시뮬레이션 환경 구축(예정)

# 6. **Maintenance & Troubleshooting**

## 6.1 펌웨어 진단

RCU 보드 진단이 필요한 경우, 제공된 **Dynamixel Wizard 2.0**을 활용하여 다음 순서로 진행합니다.

1. 로봇 PC에 접속
2. Wizard 실행 후 포트 스캔 (/dev/ttyUSB0 연결)
3. RCU 보드 통신 확인

## 6.2 펌웨어 업데이트

(펌웨어 업데이트 방법 추가 예정)

## 6.3 에러코드

(추가 예정)

## 6.4 모터 이상 시 대처법(예정)

## 6.5 QC 프로그램(예정)

# 7. **License & Support**

## 7.1 License

**Source Code**: ANTBot에 기본 탑재된 소프트웨어는 Apache License 2.0 (commercial use permitted) 라이선스입니다.

## 7.2 Technical Support

**Contact:** ROBOTIS AI Technical Support ([jdu@robotis.com](mailto:jdu@robotis.com))