---
title: 6.3 에러코드
description: ANTBot 에러코드 목록 및 대처 방법
sidebar:
  order: 3
---

ANTBot RCU 보드에서 발생할 수 있는 주요 에러 상태입니다.

## 모터 에러

| 상태 | 코드 | 설명 | 대처 방법 |
| :--- | :---: | :--- | :--- |
| FAULT | 4 | 모터 이상 감지 | 비상정지 해제 후 재시작, 지속 시 기술지원 문의 |
| NOT_CONNECT | 6 | 모터 통신 두절 | 모터 커넥터 확인, 케이블 점검 |
| BRAKE | 7 | 브레이크 활성화 | 비상정지 상태 확인, 해제 후 재시작 |

## 충전 에러

| 항목 | 컨트롤 테이블 | 설명 |
| :--- | :--- | :--- |
| Charge_Error | `Charge_Error` | 충전 중 발생한 에러 코드 |

### 충전 시퀀스 상태

| 값 | 상태 | 설명 |
| :---: | :--- | :--- |
| 0 | Standby | 대기 |
| 1 | Wait For Stable | 안정화 대기 |
| 2 | Optimize Current | 전류 최적화 |
| 3 | On Charge | 충전 중 |
| 4 | Full Charged | 완충 |
| 5 | Charge Error | 충전 에러 |
| 6 | Stop Charge | 충전 중지 |

## 와이퍼 에러

와이퍼 1~3에 대해 개별 에러 코드가 제공됩니다:
- `Wiper_Hw_error_1` / `Wiper_Hw_error_2` / `Wiper_Hw_error_3`

:::note
상세 에러코드 목록은 추후 업데이트 예정입니다.
:::
