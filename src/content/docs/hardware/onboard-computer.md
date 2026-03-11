---
title: 2.6 온보드 컴퓨터 사양
description: ANTBot 온보드 컴퓨터 사양
sidebar:
  order: 6
---

ANTBot은 시스템 제어를 위해 ROS2 API를 통해 제어할 수 있습니다.

### 2.6.1 플랫폼 기본 정보

| **항목**              | 내용                          |
| --------------------- | ----------------------------- |
| **ROS2 배포판**       | humble                        |
| **DDS 미들웨어**      | FastDDS                       |
| **OS 및 커널**        | Ubuntu 22.04 / 5.15.136-tegra |
| **부팅 시 자동 실행** | systemd 서비스명: antbot      |

### 2.6.2 컴퓨팅 보드 사양

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
