# Pixel Converter Clone Plan

## Goal
`https://pixel-converter.ameniwa.com/`와 기능 동등 수준을 먼저 재현하고, 이후 차별화 기능을 추가할 수 있는 기반을 만든다.

## Scope Strategy
1. 디자인 완전 일치보다 기능 동등성을 우선한다.
2. 변환/내보내기/편집/오버레이/다국어/반응형/입력 UX를 1차 목표로 둔다.
3. 기능 안정성 확인 후 차별화 포인트를 분리한다.

## Milestones
1. Reverse engineering and feature map
- 핵심 기능 목록 확정
- 팔레트/FX/오버레이/저장 포맷 추출

2. Functional clone baseline
- 이미지 업로드/드래그/붙여넣기
- 픽셀 변환 파이프라인(팔레트 양자화)
- 픽셀 크기(2/3/4/5)
- 실시간 FX(Glitch/CRT/Cycle/Ghost/Dither)
- 다이얼로그 오버레이(Win95/Terminal/8bit/16bit/Retro)
- PNG 다운로드
- 비디오 다운로드
- 로컬 JSON import/export(로컬호스트)
- 픽셀 에디터(펜/지우개/채우기/Undo/Redo/줌)

3. Parity hardening
- 모바일 UI/동작 미세 조정
- 오버레이 텍스트 타이핑/커서 타이밍 정합성 조정
- 키보드/포인터 상호작용 검증

4. Differentiation-ready refactor
- 코드 모듈화(변환 엔진/FX/오버레이/에디터 분리)
- 실험 기능 확장을 위한 플러그인 포인트 추가

## Current Status
- [x] Milestone 1
- [x] Milestone 2 (baseline 구현)
- [~] Milestone 3 (진행 중)
- [x] 모바일 탭형 컨트롤(픽셀/팔레트/다이얼로그) 적용
- [x] 다국어 확장(zh-CN/zh-TW/es/fr/de/pt) 적용
- [ ] 오버레이 타이핑/커서 타이밍 추가 정합
- [ ] 키보드/포인터 UX 미세 정합
- [ ] Milestone 4
