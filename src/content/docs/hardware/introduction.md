---
title: 제품 개요
description: ANTBot 제품 소개, 구조도, 하드웨어 제원 및 센서 좌표
sidebar:
  order: 1
---

## 1.1 제품 소개

본 문서는 ROBOTIS AI에서 제공하는 일개미 5세대 (ANTBot) 하드웨어 플랫폼의 원활한 운용과 관리를 위한 가이드라인입니다. 본 기체는 Swerve Drive 시스템과 ROS 2 Humble 환경을 지원하며, 연구 및 서비스 개발에 최적화되어 있습니다.

## 1.2 구조도

![ANTBot 정면 구조도](../../../assets/images/image2.png)

![ANTBot 후면 구조도](../../../assets/images/image3.png)

## 1.3 하드웨어 제원

| 항목 | 부품명 | 수량 | 상세 |
| --- | --- | --- | --- |
| Flag | Flag LED B/D | 1 | 외주 LED 보드 제작, 유선 전원 케이블 |
| Router/Antenna | CNR-5G500 | 1 | 4.1세대 러닝체인지 적용 모델 |
| Indicator LED | LED Strip DC 24V RGB 비방수 5M | 2 | 4.1세대 적용 LED STRIP |
| Wiper | XC330-M288-T | 3 | 4.1세대 동일 모델 |
| Mono Camera | CAMERA_RE-26OC w/2.6mm Lens | 3+1 | 전방, 좌우 카고 카메라, 후방 카메라 |
| Depth Camera | Gemini 336L | 1 | |
| Eye LED | GAEMI_1_G41_LED MATRIX_PBA_외주 | 2 | 4.1세대 동일 모델, 유선 전원 케이블 |
| Head Light | Head Light_CS-B1860W | 1 | 4.1세대 동일 스펙 |
| 2D LiDAR | Coin-D4 | 2 | |
| 3D LiDAR | Vanjee WLR-722 | 1 | |
| Ultrasonic Sensor | DYP-A02YYMW02.0 | 2 | |
| Wireless Charging Module | RX(GAEMI 5.0) / TX(Charging Station) | 1+1 | |
| Emergency Switch | KSE-4RB3 | 1 | 4.1세대 동일 모델 |
| Door Locker | STD-06AS-12 | 1 | 걸쇠 모따기 형상 적용 |
| In Wheel Motor | ZLLG80ASM250-4096-B | 4 | 4.0세대 동일 모델 |
| Swerve Motor | XD540-W270-T | 4 | 벨트 풀리 구조 적용 |
| Speaker | MS878701CC-CX001 | - | 신규 사양 소싱 |
| Fan | 시스템 공조 팬 / 컴포넌트 방열 팬 / 배터리 방열팬 | 다수 | |
| Battery Pack | LFP BATTERY | 1 | cell model: TPT140146295F70 |
| GNSS Antenna | GNSS Antenna_1-SMA male | 1 | |
| 전원 스위치 | QN16-B1-PUSH | 1 | |

## 1.4 제품 사양

| 항목 | 내용 |
| --- | --- |
| 사이즈 / 무게 | L762 x W582 x H766(with Flag 1,373) (mm) / 62.1kg |
| 적재용량 | L410 x W410 x H320 (mm), 53.8ℓ |
| 적재중량(권장/최대) | 10kg이하 권장 / 최대 20kg 적재 가능 |
| 주행 속도 | 0.5 ~ 2.0 m/s |
| 주행 가능 단차 | 5kg 이하 적재 시 Max. 90mm / 20kg 적재 시 50mm |
| 등판 각도 | 15° |
| 연속주행 / 충전시간 | 0시간 / 0시간 |
| 배터리 종류 / 개수 / 용량 / 정격 | LFP / 1팩 / 65Ah / 25.6V |
| 충전 방식 | Wireless autonomous charge |
| 사용 온도 / 통신 방식 | -10 ~ 40℃ (Cold Start 0 ~ 40℃) / 5G (LTE-CA) |
| 스티어링 방식 | Swerve (AWD) |
| 카고 사양 | Single (수동개폐) |
| 방수 등급 | IPX4 |
| 인증사항 (예정) | 실외이동로봇 운행안전인증, KC, KS B 7317 (진행 중) |
| 운영체제 | ROS 2 |
| 기타 | 관제시스템 연동, 야간 주행 (전조등), 횡단보도 통행, LED 등 |

## 1.5 센서 좌표 기준

| 구분 | | X | Y | Z | Roll | Pitch | Yaw |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 단위 | | mm | | | degree(°) | | |
| Mono Cam | LEFT | 260.000 | 258.950 | 584.500 | 0 | 0 | -90 |
| | CENTER | 362.250 | 0 | 584.500 | 0 | 0 | 0 |
| | RIGHT | 260.000 | -258.950 | 584.500 | 0 | 0 | 90 |
| | BACK | -373.500 | 0 | 296.000 | 0 | 180 | 0 |
| Depth Cam | CENTER | 348.563 | 0 | 526.200 | 0 | 30 | 0 |
| LiDAR | 2D FRONT | 320.000 | 0 | 252.000 | 180 | 0 | 0 |
| | 2D BACK | -320.000 | 0 | 252.000 | 0 | 180 | 0 |
| | 3D | 225.233 | 0 | 721.313 | 0 | 10 | -90 |
| IMU (RCU U60) | | 240.000 | 0 | 379.200 | 0 | 0 | 180 |
| GNSS | | 202.600 | -128.000 | 657.000 | 0 | 0 | 180 |
| Magnetometer (RCU U59) | | 240.000 | -11.000 | 379.200 | 0 | 0 | 0 |
| Wireless Charging Coil | | -299.000 | 0 | 170.627 | 0 | 0 | 0 |
