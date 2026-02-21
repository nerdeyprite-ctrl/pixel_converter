# Pixel Converter Clone

원본: [pixel-converter.ameniwa.com](https://pixel-converter.ameniwa.com/)

## Run
정적 파일 앱입니다.

```bash
python3 -m http.server 4173
# or
npx serve .
```

브라우저에서 `http://127.0.0.1:4173` 접속.

## Included Features
- 이미지 업로드/드래그&드롭/클립보드 붙여넣기
- 팔레트 기반 픽셀 변환 (16개 팔레트)
- 픽셀 크기 2/3/4/5
- FX: Glitch / CRT / Palette Cycle / Ghost / Dither Fade
- 다이얼로그 오버레이: Win95 / Terminal / 8bit / 16bit / Retro RPG
- PNG 다운로드
- 비디오 다운로드 (MediaRecorder)
- 픽셀 에디터(펜/지우개/채우기/Undo/Redo/줌)
- 다국어(ko/en/ja/zh-CN/zh-TW/es/fr/de/pt)
- 로컬호스트 JSON 내보내기/불러오기
