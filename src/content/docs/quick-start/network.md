---
title: 4.3 네트워크 설정
description: ANTBot 컴퓨터 네트워크 설정
sidebar:
  order: 3
---

ANTBot 컴퓨터는 네트워크 구성 도구로 `netplan` 을 사용합니다.

인터페이스 이름은 `eth0` 이며, 고정 IP 주소는 `192.168.6.2` 입니다.

## 4.3.1 원격으로 ANTBot 컴퓨터에 접속

1. 고객사측에서 설치한 네트워크 장비의 내부 네트워크 주소 범위를 `192.168.6` 대로 설정

2. 랩탑을 동일한 네트워크로 접속시킨 후, 아래 명령어를 통해 ssh 접속

   ```bash
   ssh antbot@192.168.6.2
   ```

## 4.3.2 고정 IP 주소 변경

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
