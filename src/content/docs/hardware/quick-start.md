---
title: 시작하기 (Quick Start)
description: ANTBot 하드웨어 준비 및 소프트웨어 환경 구축
sidebar:
  order: 4
---

## 4.1 하드웨어 준비

1. **전원 ON:** 로봇 좌측 후면 하단의 메인 스위치를 켭니다.
2. **로봇에 접속:**
   - **[option 1] 네트워크 연결:** 라우터의 SSID(`ANTBot_XXXX`)로 PC를 연결합니다.
   - **[option 2] 모니터, 키보드 연결:** 로봇의 HDMI, USB 포트를 사용합니다.

## 4.2 소프트웨어 환경 구축

제공된 소스코드를 빌드하기 위해 아래 스크립트를 터미널에서 실행합니다.

```bash
# ANTBot 한 줄 설치 스크립트 실행
curl -sSL https://github.com/ROBOTIS-move/antbot/install/main/setting.sh | bash
```

### SSD 마운트 방법

```bash
# SSD 파티션 초기화
sudo /sbin/parted /dev/nvme0n1 mklabel gpt --script
sudo mkfs.ext4 /dev/nvme0n1

# SSD 마운트
sudo mount /dev/nvme0n1 {마운트 폴더 경로}
```
