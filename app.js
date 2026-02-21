const FONT_FAMILY = "'DotGothic16', 'Courier New', monospace";

const PALETTES = {
  sora: {
    name: 'Sora',
    colors: [
      [0, 0, 0],
      [8, 14, 32],
      [22, 32, 60],
      [36, 54, 92],
      [52, 76, 120],
      [72, 104, 152],
      [100, 140, 184],
      [168, 148, 40],
      [220, 200, 90],
      [248, 236, 160],
      [255, 252, 228],
      [224, 160, 128],
    ],
  },
  gameboy: {
    name: 'Game Boy',
    colors: [
      [15, 56, 15],
      [48, 98, 48],
      [139, 172, 15],
      [155, 188, 15],
    ],
  },
  nes: {
    name: 'NES',
    colors: [
      [0, 0, 0],
      [252, 252, 252],
      [188, 188, 188],
      [124, 124, 124],
      [228, 0, 8],
      [248, 56, 0],
      [248, 184, 0],
      [172, 124, 0],
      [0, 184, 0],
      [88, 216, 84],
      [0, 168, 68],
      [0, 232, 216],
      [0, 120, 248],
      [104, 68, 252],
      [216, 0, 204],
      [248, 120, 88],
    ],
  },
  cga: {
    name: 'CGA',
    colors: [
      [0, 0, 0],
      [85, 255, 255],
      [255, 85, 255],
      [255, 255, 255],
    ],
  },
  c64: {
    name: 'C64',
    colors: [
      [0, 0, 0],
      [255, 255, 255],
      [136, 0, 0],
      [170, 255, 238],
      [204, 68, 204],
      [0, 204, 85],
      [0, 0, 170],
      [238, 238, 119],
      [136, 68, 0],
      [102, 68, 0],
      [255, 119, 119],
      [51, 51, 51],
      [119, 119, 119],
      [170, 255, 102],
      [0, 136, 255],
      [187, 187, 187],
    ],
  },
  pico8: {
    name: 'PICO-8',
    colors: [
      [0, 0, 0],
      [29, 43, 83],
      [126, 37, 83],
      [0, 135, 81],
      [171, 82, 54],
      [95, 87, 79],
      [194, 195, 199],
      [255, 241, 232],
      [255, 0, 77],
      [255, 163, 0],
      [255, 236, 39],
      [0, 228, 54],
      [41, 173, 255],
      [131, 118, 156],
      [255, 119, 168],
      [255, 204, 170],
    ],
  },
  sweetie16: {
    name: 'Sweetie 16',
    colors: [
      [26, 28, 44],
      [93, 39, 93],
      [177, 62, 83],
      [239, 125, 87],
      [255, 205, 117],
      [167, 240, 112],
      [56, 183, 100],
      [37, 113, 121],
      [41, 54, 111],
      [59, 93, 201],
      [65, 166, 246],
      [115, 239, 247],
      [244, 244, 244],
      [148, 176, 194],
      [86, 108, 134],
      [51, 60, 87],
    ],
  },
  pastel: {
    name: 'Pastel',
    colors: [
      [255, 179, 186],
      [255, 223, 186],
      [255, 255, 186],
      [186, 255, 201],
      [186, 225, 255],
      [218, 186, 255],
      [255, 186, 243],
      [255, 255, 255],
      [200, 200, 200],
      [120, 120, 120],
      [60, 60, 60],
      [0, 0, 0],
    ],
  },
  mono: {
    name: 'Mono',
    colors: [
      [0, 0, 0],
      [34, 34, 34],
      [68, 68, 68],
      [102, 102, 102],
      [136, 136, 136],
      [170, 170, 170],
      [204, 204, 204],
      [238, 238, 238],
      [255, 255, 255],
    ],
  },
  sepia: {
    name: 'Sepia',
    colors: [
      [44, 28, 6],
      [72, 52, 18],
      [102, 78, 36],
      [138, 110, 60],
      [170, 142, 88],
      [198, 176, 122],
      [222, 204, 160],
      [242, 230, 200],
      [255, 245, 230],
    ],
  },
  sunset: {
    name: 'Sunset',
    colors: [
      [13, 2, 33],
      [44, 6, 69],
      [87, 10, 82],
      [140, 15, 75],
      [191, 36, 51],
      [224, 80, 29],
      [240, 134, 28],
      [248, 190, 53],
      [255, 237, 120],
      [255, 255, 230],
    ],
  },
  ocean: {
    name: 'Ocean',
    colors: [
      [0, 20, 40],
      [0, 40, 80],
      [0, 80, 120],
      [0, 120, 160],
      [0, 160, 200],
      [40, 200, 220],
      [80, 220, 240],
      [160, 240, 255],
      [200, 248, 255],
      [255, 255, 255],
    ],
  },
  earth: {
    name: 'Earth',
    colors: [
      [34, 32, 28],
      [69, 60, 44],
      [107, 95, 70],
      [140, 128, 96],
      [168, 156, 120],
      [96, 128, 56],
      [64, 96, 48],
      [140, 96, 64],
      [192, 160, 112],
      [220, 200, 168],
    ],
  },
  sakura: {
    name: 'Sakura',
    colors: [
      [43, 30, 26],
      [80, 56, 44],
      [52, 80, 48],
      [120, 164, 84],
      [156, 48, 72],
      [200, 80, 108],
      [232, 140, 164],
      [248, 196, 208],
      [255, 232, 238],
      [255, 255, 255],
      [176, 164, 200],
      [140, 180, 220],
    ],
  },
  cyber: {
    name: 'Cyber',
    colors: [
      [8, 4, 16],
      [20, 8, 40],
      [48, 12, 64],
      [100, 20, 100],
      [180, 20, 100],
      [255, 40, 120],
      [255, 140, 200],
      [10, 40, 80],
      [0, 160, 200],
      [80, 240, 255],
      [200, 160, 255],
      [255, 255, 255],
    ],
  },
  horror: {
    name: 'Horror',
    colors: [
      [0, 0, 0],
      [24, 4, 4],
      [60, 8, 8],
      [120, 16, 16],
      [180, 20, 20],
      [220, 60, 40],
      [40, 44, 16],
      [72, 80, 32],
      [48, 24, 48],
      [80, 72, 68],
      [200, 180, 140],
      [240, 220, 190],
    ],
  },
};

const I18N = {
  ja: {
    label: '日本語',
    menuFile: 'ファイル(F)',
    menuEdit: '編集(E)',
    menuView: '表示(V)',
    menuHelp: 'ヘルプ(H)',
    pixelSize: 'Pixel.exe',
    palette: 'パレット',
    dialog: 'ダイアログ',
    preview: 'プレビュー',
    size: 'SIZE',
    style: 'STYLE',
    name: 'NAME',
    text: 'TEXT',
    position: 'POSITION',
    top: '上',
    bottom: '下',
    onOff: 'ON / OFF',
    download: '↓ DOWNLOAD PNG',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    recording: '録画中...',
    glitch: 'グリッチ',
    crt: 'CRT',
    paletteCycle: '色循環',
    ghost: '残像',
    ditherFade: 'ディザ',
    fx: 'FX',
    edit: '編集',
    pen: 'ペン',
    eraser: '消しゴム',
    fill: '塗りつぶし',
    editorUndo: '戻す',
    editorRedo: 'やり直し',
    editorSave: '保存',
    editorCancel: 'キャンセル',
    editorHintPc:
      '右クリック: スポイト / Space+ドラッグ: 移動 / ホイール: 拡縮',
    editorHintMobile: '1本指: 描画 / 2本指: 移動・拡縮',
    editorHelpPc:
      '左クリック: 描画\n右クリック: スポイト（色を拾う）\nSpace+ドラッグ: キャンバス移動\n中ボタンドラッグ: キャンバス移動\nホイール: ズーム',
    editorHelpMobile: '1本指: 描画\n2本指: 移動・拡大縮小',
    namePh: 'キャラ名（任意）',
    textPh: 'セリフを入力...',
    ready: 'Ready',
    dropMsg: '画像をドロップしてください',
    dragDrop: 'ドラッグ＆ドロップ',
    orClick: 'またはクリック',
    dq: '8bit風',
    ff: '16bit風',
    retro: 'レトロRPG',
    win95: 'Win95警告',
    terminal: 'ターミナル',
    processing: 'PROCESSING...',
    about: 'readme',
    aboutDesc:
      '画像をドット絵風に変換するツールです。\nパレット変更やRPG風ダイアログの\nオーバーレイも可能です。',
    license:
      '本ツールで生成した画像は自由にご利用\nいただけます。商用・非商用を問いません。\nただし、生成画像の利用により生じた\nいかなる損害についても、作者は一切の\n責任を負いません。',
  },
  en: {
    label: 'English',
    menuFile: 'File(F)',
    menuEdit: 'Edit(E)',
    menuView: 'View(V)',
    menuHelp: 'Help(H)',
    pixelSize: 'Pixel.exe',
    palette: 'Palette',
    dialog: 'Dialog',
    preview: 'Preview',
    size: 'SIZE',
    style: 'STYLE',
    name: 'NAME',
    text: 'TEXT',
    position: 'POSITION',
    top: 'Top',
    bottom: 'Bottom',
    onOff: 'ON / OFF',
    download: '↓ DOWNLOAD PNG',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    recording: 'RECORDING...',
    glitch: 'Glitch',
    crt: 'CRT',
    paletteCycle: 'Cycle',
    ghost: 'Ghost',
    ditherFade: 'Dither',
    fx: 'FX',
    edit: 'Edit',
    pen: 'Pen',
    eraser: 'Eraser',
    fill: 'Fill',
    editorUndo: 'Undo',
    editorRedo: 'Redo',
    editorSave: 'Save',
    editorCancel: 'Cancel',
    editorHintPc:
      'Right-click: Eyedropper / Space+Drag: Pan / Wheel: Zoom',
    editorHintMobile: '1 finger: Draw / 2 fingers: Pan & Zoom',
    editorHelpPc:
      'Left click: Draw\nRight click: Eyedropper\nSpace+Drag: Pan canvas\nMiddle button drag: Pan canvas\nWheel: Zoom',
    editorHelpMobile: '1 finger: Draw\n2 fingers: Pan & Zoom',
    namePh: 'Character name (optional)',
    textPh: 'Enter dialogue...',
    ready: 'Ready',
    dropMsg: 'Drop an image here',
    dragDrop: 'Drag & Drop',
    orClick: 'or Click',
    dq: '8bit',
    ff: '16bit',
    retro: 'Retro RPG',
    win95: 'Win95 Alert',
    terminal: 'Terminal',
    processing: 'PROCESSING...',
    about: 'readme',
    aboutDesc:
      'A tool that converts images into pixel art.\nYou can change palettes and overlay\nRPG-style dialog windows.',
    license:
      'Images generated by this tool may be used\nfreely for any purpose, commercial or\nnon-commercial. The author assumes no\nresponsibility for any damages arising\nfrom the use of generated images.',
  },
  ko: {
    label: '한국어',
    menuFile: '파일(F)',
    menuEdit: '편집(E)',
    menuView: '보기(V)',
    menuHelp: '도움말(H)',
    pixelSize: 'Pixel.exe',
    palette: '팔레트',
    dialog: '다이얼로그',
    preview: '미리보기',
    size: 'SIZE',
    style: 'STYLE',
    name: 'NAME',
    text: 'TEXT',
    position: 'POSITION',
    top: '위',
    bottom: '아래',
    onOff: 'ON / OFF',
    download: '↓ DOWNLOAD PNG',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    recording: '녹화 중...',
    glitch: '글리치',
    crt: 'CRT',
    paletteCycle: '순환',
    ghost: '잔상',
    ditherFade: '디더',
    fx: 'FX',
    edit: '편집',
    pen: '펜',
    eraser: '지우개',
    fill: '채우기',
    editorUndo: '실행 취소',
    editorRedo: '다시 실행',
    editorSave: '저장',
    editorCancel: '취소',
    editorHintPc:
      '우클릭: 스포이트 / Space+드래그: 이동 / 휠: 확대/축소',
    editorHintMobile: '1손가락: 그리기 / 2손가락: 이동·확대/축소',
    editorHelpPc:
      '좌클릭: 그리기\n우클릭: 스포이트\nSpace+드래그: 캔버스 이동\n가운데 버튼 드래그: 캔버스 이동\n휠: 확대/축소',
    editorHelpMobile: '1손가락: 그리기\n2손가락: 이동·확대/축소',
    namePh: '캐릭터 이름 (선택)',
    textPh: '대사를 입력...',
    ready: 'Ready',
    dropMsg: '이미지를 드롭하세요',
    dragDrop: '드래그 앤 드롭',
    orClick: '또는 클릭',
    dq: '8bit',
    ff: '16bit',
    retro: '레트로 RPG',
    win95: 'Win95 경고',
    terminal: '터미널',
    processing: 'PROCESSING...',
    about: 'readme',
    aboutDesc:
      '이미지를 도트 그림풍으로 변환하는 도구입니다.\n팔레트 변경과 RPG풍 대사창\n오버레이도 가능합니다.',
    license:
      '본 도구로 생성된 이미지는 상업적/\n비상업적 용도 모두 자유롭게 사용할 수 있습니다.\n생성 이미지 사용으로 발생한 손해에 대해\n작자는 책임을 지지 않습니다.',
  },
  'zh-CN': {
    label: '简体中文',
    menuFile: '文件(F)',
    menuEdit: '编辑(E)',
    menuView: '视图(V)',
    menuHelp: '帮助(H)',
    palette: '调色板',
    dialog: '对话框',
    preview: '预览',
    top: '上',
    bottom: '下',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    recording: '录制中...',
    glitch: '故障',
    paletteCycle: '色循环',
    ghost: '残影',
    ditherFade: '抖动',
    edit: '编辑',
    pen: '画笔',
    eraser: '橡皮擦',
    fill: '填充',
    editorUndo: '撤销',
    editorRedo: '重做',
    editorSave: '保存',
    editorCancel: '取消',
    editorHintPc: '右键: 吸管 / Space+拖动: 平移 / 滚轮: 缩放',
    editorHintMobile: '单指: 绘画 / 双指: 平移·缩放',
    namePh: '角色名（可选）',
    textPh: '输入台词...',
    dropMsg: '请拖放图片',
    dragDrop: '拖放',
    orClick: '或点击',
    dq: '8bit风',
    ff: '16bit风',
    retro: '复古RPG',
    win95: 'Win95警告',
    terminal: '终端',
    processing: '处理中...',
    aboutDesc: '将图片转换为像素风格的工具。\n可切换调色板并叠加\nRPG风格对话框。',
    license:
      '使用本工具生成的图片可自由用于任何用途（含商业）。\n因使用生成图片产生的任何损失，\n作者概不负责。',
  },
  'zh-TW': {
    label: '繁體中文',
    menuFile: '檔案(F)',
    menuEdit: '編輯(E)',
    menuView: '檢視(V)',
    menuHelp: '說明(H)',
    palette: '調色盤',
    dialog: '對話框',
    preview: '預覽',
    top: '上',
    bottom: '下',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    recording: '錄製中...',
    glitch: '故障',
    paletteCycle: '色循環',
    ghost: '殘影',
    ditherFade: '抖動',
    edit: '編輯',
    pen: '畫筆',
    eraser: '橡皮擦',
    fill: '填充',
    editorUndo: '復原',
    editorRedo: '重做',
    editorSave: '儲存',
    editorCancel: '取消',
    editorHintPc: '右鍵: 吸管 / Space+拖曳: 平移 / 滾輪: 縮放',
    editorHintMobile: '單指: 繪畫 / 雙指: 平移·縮放',
    namePh: '角色名（可選）',
    textPh: '輸入台詞...',
    dropMsg: '請拖放圖片',
    dragDrop: '拖放',
    orClick: '或點擊',
    dq: '8bit風',
    ff: '16bit風',
    retro: '復古RPG',
    win95: 'Win95警告',
    terminal: '終端機',
    processing: '處理中...',
    aboutDesc: '將圖片轉換為像素風格的工具。\n可切換調色盤並疊加\nRPG風格對話框。',
    license:
      '使用本工具生成的圖片可自由用於任何用途（含商業）。\n因使用生成圖片產生的任何損失，\n作者概不負責。',
  },
  es: {
    label: 'Español',
    menuFile: 'Archivo(A)',
    menuEdit: 'Editar(E)',
    menuView: 'Ver(V)',
    menuHelp: 'Ayuda(Y)',
    palette: 'Paleta',
    dialog: 'Diálogo',
    preview: 'Vista previa',
    top: 'Arriba',
    bottom: 'Abajo',
    recording: 'GRABANDO...',
    downloadVideo: '↓ DOWNLOAD VIDEO',
    pen: 'Lápiz',
    eraser: 'Borrador',
    fill: 'Rellenar',
    editorUndo: 'Deshacer',
    editorRedo: 'Rehacer',
    editorSave: 'Guardar',
    editorCancel: 'Cancelar',
    editorHintPc: 'Clic derecho: Cuentagotas / Space+Arrastrar: Mover / Rueda: Zoom',
    editorHintMobile: '1 dedo: Dibujar / 2 dedos: Mover y Zoom',
    namePh: 'Nombre (opcional)',
    textPh: 'Escribe un diálogo...',
    dropMsg: 'Suelta una imagen aquí',
    dragDrop: 'Arrastrar y soltar',
    orClick: 'o hacer clic',
    retro: 'RPG Retro',
    win95: 'Win95 Alerta',
    processing: 'PROCESANDO...',
    aboutDesc:
      'Herramienta para convertir imágenes en pixel art.\nPuedes cambiar paletas y superponer\ndiálogos estilo RPG.',
    license:
      'Las imágenes generadas por esta herramienta pueden usarse\nlibremente para fines comerciales y no comerciales.\nEl autor no asume responsabilidad por daños derivados.',
  },
  fr: {
    label: 'Français',
    menuFile: 'Fichier(F)',
    menuEdit: 'Édition(E)',
    menuView: 'Affichage(A)',
    menuHelp: 'Aide(H)',
    palette: 'Palette',
    dialog: 'Dialogue',
    preview: 'Aperçu',
    top: 'Haut',
    bottom: 'Bas',
    recording: 'ENREGISTREMENT...',
    pen: 'Crayon',
    eraser: 'Gomme',
    fill: 'Remplir',
    editorUndo: 'Annuler',
    editorRedo: 'Rétablir',
    editorSave: 'Enregistrer',
    editorCancel: 'Annuler',
    editorHintPc: 'Clic droit: Pipette / Space+Glisser: Déplacer / Molette: Zoom',
    editorHintMobile: '1 doigt: Dessiner / 2 doigts: Déplacer et Zoom',
    namePh: 'Nom (optionnel)',
    textPh: 'Entrez un dialogue...',
    dropMsg: 'Déposez une image ici',
    dragDrop: 'Glisser-déposer',
    orClick: 'ou cliquer',
    retro: 'RPG Rétro',
    win95: 'Win95 Alerte',
    processing: 'TRAITEMENT...',
    aboutDesc:
      "Outil pour convertir des images en pixel art.\nVous pouvez changer la palette et superposer\ndes dialogues style RPG.",
    license:
      "Les images générées par cet outil peuvent être utilisées\nlibrement à des fins commerciales et non commerciales.\nL'auteur décline toute responsabilité.",
  },
  de: {
    label: 'Deutsch',
    menuFile: 'Datei(D)',
    menuEdit: 'Bearbeiten(B)',
    menuView: 'Ansicht(A)',
    menuHelp: 'Hilfe(H)',
    palette: 'Palette',
    dialog: 'Dialog',
    preview: 'Vorschau',
    top: 'Oben',
    bottom: 'Unten',
    recording: 'AUFNAHME...',
    paletteCycle: 'Zyklus',
    edit: 'Bearbeiten',
    pen: 'Stift',
    eraser: 'Radierer',
    fill: 'Füllen',
    editorUndo: 'Rückgängig',
    editorRedo: 'Wiederholen',
    editorSave: 'Speichern',
    editorCancel: 'Abbrechen',
    editorHintPc: 'Rechtsklick: Pipette / Space+Ziehen: Verschieben / Rad: Zoom',
    editorHintMobile: '1 Finger: Zeichnen / 2 Finger: Verschieben & Zoom',
    namePh: 'Name (optional)',
    textPh: 'Dialog eingeben...',
    dropMsg: 'Bild hier ablegen',
    dragDrop: 'Drag & Drop',
    orClick: 'oder klicken',
    retro: 'Retro-RPG',
    win95: 'Win95 Warnung',
    processing: 'VERARBEITUNG...',
    aboutDesc:
      'Werkzeug zur Umwandlung von Bildern in Pixel-Art.\nPalettenwechsel und RPG-Dialog-Overlay\nwerden unterstützt.',
    license:
      'Mit diesem Tool erstellte Bilder dürfen frei genutzt werden.\nDer Autor übernimmt keine Haftung für Schäden\naus der Nutzung.',
  },
  pt: {
    label: 'Português',
    menuFile: 'Arquivo(A)',
    menuEdit: 'Editar(E)',
    menuView: 'Exibir(X)',
    menuHelp: 'Ajuda(J)',
    palette: 'Paleta',
    dialog: 'Diálogo',
    preview: 'Pré-visualização',
    top: 'Cima',
    bottom: 'Baixo',
    recording: 'GRAVANDO...',
    pen: 'Caneta',
    eraser: 'Borracha',
    fill: 'Preencher',
    editorUndo: 'Desfazer',
    editorRedo: 'Refazer',
    editorSave: 'Salvar',
    editorCancel: 'Cancelar',
    editorHintPc: 'Clique direito: Conta-gotas / Space+Arrastar: Mover / Roda: Zoom',
    editorHintMobile: '1 dedo: Desenhar / 2 dedos: Mover e Zoom',
    namePh: 'Nome (opcional)',
    textPh: 'Digite um diálogo...',
    dropMsg: 'Solte uma imagem aqui',
    dragDrop: 'Arrastar e soltar',
    orClick: 'ou clique',
    retro: 'RPG Retrô',
    win95: 'Win95 Alerta',
    processing: 'PROCESSANDO...',
    aboutDesc:
      'Ferramenta para converter imagens em pixel art.\nVocê pode trocar paletas e sobrepor\ndiálogos estilo RPG.',
    license:
      'As imagens geradas por esta ferramenta podem ser usadas\nlivremente para fins comerciais e não comerciais.\nO autor não se responsabiliza por danos.',
  },
};

const GHOST_TEXT = {
  ja: {
    idle: [
      '...',
      'ねえ、ドット絵って小さいのに温かいよね',
      '僕、この四角い世界好きだよ',
      'ピクセルって…星みたいだね',
      '何か変換する？僕、待ってるの得意だよ',
    ],
    drop: ['わっ、画像きた！', '見せて見せて！', 'これ、ドット絵にしたらどうなるんだろう'],
    palette: ['わあ、色が変わった！', '同じ絵なのに、全然違って見えるね'],
    dialog: ['セリフがあると関係って生まれるよね', '冒険の始まりだね！'],
    download: ['保存したね！よかった', 'この絵、ずっと残るんだね'],
    click: ['なあに？', '呼んだ？僕はここだよ', 'えへへ'],
  },
  en: {
    idle: [
      '...',
      'Hey, pixel art is small but warm, right?',
      'I love this little square world',
      'Pixels are... kinda like stars',
      "Want to convert something? I'm great at waiting",
    ],
    drop: ['Whoa, an image!', 'Show me, show me!', 'I wonder what this looks like as pixel art'],
    palette: ['Wow, the colors changed!', 'Same picture, but it looks totally different'],
    dialog: ['Dialogue gives a picture its story, huh', 'The adventure begins!'],
    download: ['You saved it! Great', 'This picture will last forever now'],
    click: ['Hm?', "You called? I'm right here", 'Hehe'],
  },
  ko: {
    idle: [
      '...',
      '있잖아, 도트 그림은 작은데 따뜻하지 않아?',
      '나, 이 네모난 세계 좋아',
      '픽셀은… 별 같지 않아?',
      '뭔가 변환할래? 나, 기다리는 거 잘해',
    ],
    drop: ['와, 이미지 왔다!', '보여줘 보여줘!', '이거 도트 그림으로 하면 어떻게 될까'],
    palette: ['와, 색이 바뀌었다!', '같은 그림인데 완전 달라 보여'],
    dialog: ['대사가 있으면 이야기가 생기지', '모험의 시작이다!'],
    download: ['저장했네! 다행이다', '이 그림, 계속 남는 거지'],
    click: ['응?', '불렀어? 나 여기 있어', '에헤헤'],
  },
  'zh-CN': {
    idle: ['...', '像素虽然很小，但很温暖呢', '我很喜欢这个方方的世界'],
    drop: ['哇，图片来了！', '让我看看！'],
    palette: ['哇，颜色变了！', '同一张图看起来完全不同了'],
    dialog: ['有了台词，故事就出现了', '冒险开始了！'],
    download: ['保存好了！太棒了', '这张图会一直留下来'],
    click: ['嗯？', '你叫我吗？我在这儿', '嘿嘿'],
  },
  'zh-TW': {
    idle: ['...', '像素雖然小，但很溫暖呢', '我很喜歡這個方方的世界'],
    drop: ['哇，圖片來了！', '給我看看！'],
    palette: ['哇，顏色變了！', '同一張圖看起來完全不同了'],
    dialog: ['有了台詞，故事就出現了', '冒險開始了！'],
    download: ['保存好了！太好了', '這張圖會一直留下來'],
    click: ['嗯？', '你叫我嗎？我在這裡', '嘿嘿'],
  },
  es: {
    idle: ['...', 'El pixel art es pequeño pero cálido', 'Me encanta este pequeño mundo cuadrado'],
    drop: ['¡Llegó una imagen!', '¡Déjame ver!'],
    palette: ['¡Los colores cambiaron!', 'La misma imagen se siente distinta'],
    dialog: ['Con diálogo aparece una historia', '¡Empieza la aventura!'],
    download: ['¡Guardado!', 'Esta imagen se quedará para siempre'],
    click: ['¿Hm?', '¿Me llamaste?', 'Jeje'],
  },
  fr: {
    idle: ['...', 'Le pixel art est petit mais chaleureux', 'J’aime ce petit monde carré'],
    drop: ['Oh, une image !', 'Montre-moi !'],
    palette: ['Waouh, les couleurs ont changé !', 'La même image semble différente'],
    dialog: ['Avec des dialogues, une histoire naît', "L'aventure commence !"],
    download: ['Sauvegardé !', 'Cette image restera longtemps'],
    click: ['Hm ?', "Tu m'as appelé ?", 'Héhé'],
  },
  de: {
    idle: ['...', 'Pixel-Art ist klein, aber warm', 'Ich mag diese kleine eckige Welt'],
    drop: ['Oh, ein Bild ist da!', 'Zeig mal!'],
    palette: ['Wow, die Farben haben sich geändert!', 'Gleiches Bild, völlig anderes Gefühl'],
    dialog: ['Mit Dialog entsteht eine Geschichte', 'Das Abenteuer beginnt!'],
    download: ['Gespeichert!', 'Dieses Bild bleibt für immer'],
    click: ['Hm?', 'Du hast gerufen?', 'Hehe'],
  },
  pt: {
    idle: ['...', 'Pixel art é pequena, mas quentinha', 'Gosto desse mundinho quadrado'],
    drop: ['Chegou uma imagem!', 'Me mostra!'],
    palette: ['As cores mudaram!', 'A mesma imagem ficou diferente'],
    dialog: ['Com diálogo nasce uma história', 'A aventura começa!'],
    download: ['Salvo!', 'Essa imagem vai durar para sempre'],
    click: ['Hm?', 'Me chamou?', 'Hehe'],
  },
};

const FRAME_SCALE = 2;

function makeFrameSvg(pixels) {
  const h = pixels.length;
  const w = pixels[0].length;
  let body = '';

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const color = pixels[y][x];
      if (!color) continue;
      body += `<rect x="${x * FRAME_SCALE}" y="${y * FRAME_SCALE}" width="${FRAME_SCALE}" height="${FRAME_SCALE}" fill="${color}"/>`;
    }
  }

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w * FRAME_SCALE}' height='${h * FRAME_SCALE}' shape-rendering='crispEdges'>${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const PIXEL_FRAME_DQ = [
  [0, 0, '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', 0, 0],
  [0, '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', 0],
  ['#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff'],
  ['#ffffff', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#ffffff'],
  ['#ffffff', '#000000', '#000000', '#ffffff', 0, 0, '#ffffff', '#000000', '#000000', '#ffffff'],
  ['#ffffff', '#000000', '#000000', '#ffffff', 0, 0, '#ffffff', '#000000', '#000000', '#ffffff'],
  ['#ffffff', '#000000', '#000000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000', '#ffffff'],
  ['#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff'],
  [0, '#ffffff', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#ffffff', 0],
  [0, 0, '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', 0, 0],
];

const PIXEL_FRAME_FF = [
  [0, '#8888dd', '#8888dd', '#8888dd', '#8888dd', '#8888dd', '#8888dd', 0],
  ['#8888dd', '#8888dd', '#000066', '#000066', '#000066', '#000066', '#333366', '#333366'],
  ['#8888dd', '#000066', '#000066', '#000066', '#000066', '#000066', '#000066', '#333366'],
  ['#8888dd', '#000066', '#000066', 0, 0, '#000066', '#000066', '#333366'],
  ['#8888dd', '#000066', '#000066', 0, 0, '#000066', '#000066', '#333366'],
  ['#8888dd', '#000066', '#000066', '#000066', '#000066', '#000066', '#000066', '#333366'],
  ['#8888dd', '#333366', '#000066', '#000066', '#000066', '#000066', '#333366', '#333366'],
  [0, '#333366', '#333366', '#333366', '#333366', '#333366', '#333366', 0],
];

const PIXEL_FRAME_RETRO = [
  [0, 0, '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#c8a870', 0, 0],
  [0, '#c8a870', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#c8a870', 0],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#6a4a2a', '#c8a870'],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#2a1a0a', '#6a4a2a', '#c8a870'],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#c8a870', 0, 0, '#c8a870', '#2a1a0a', '#6a4a2a', '#c8a870'],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#c8a870', 0, 0, '#c8a870', '#2a1a0a', '#6a4a2a', '#c8a870'],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#2a1a0a', '#6a4a2a', '#c8a870'],
  ['#c8a870', '#6a4a2a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#2a1a0a', '#6a4a2a', '#c8a870'],
  [0, '#c8a870', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#6a4a2a', '#c8a870', 0],
  [0, 0, '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#c8a870', '#c8a870', 0, 0],
];

const DIALOG_THEMES = {
  win95: { name: 'Win95 Error', isWin95: true },
  terminal: { name: 'Terminal', isTerminal: true },
  dq: {
    name: '8bit',
    background: '#000000',
    color: '#ffffff',
    nameColor: '#ffffff',
    nameBg: '#000000',
    frameSvg: makeFrameSvg(PIXEL_FRAME_DQ),
    frameSlice: 4 * FRAME_SCALE,
    frameBorderWidth: 4 * FRAME_SCALE,
    framePixels: PIXEL_FRAME_DQ,
    frameSliceRaw: 4,
  },
  ff: {
    name: '16bit',
    background: 'linear-gradient(180deg, #000088 0%, #000044 100%)',
    backgroundFlat: '#000066',
    color: '#ffffff',
    nameColor: '#ffffff',
    nameBg: '#000066',
    frameSvg: makeFrameSvg(PIXEL_FRAME_FF),
    frameSlice: 3 * FRAME_SCALE,
    frameBorderWidth: 3 * FRAME_SCALE,
    framePixels: PIXEL_FRAME_FF,
    frameSliceRaw: 3,
  },
  retro: {
    name: 'レトロRPG',
    background: '#2a1a0a',
    color: '#f0e0c0',
    nameColor: '#ffe0a0',
    nameBg: '#2a1a0a',
    frameSvg: makeFrameSvg(PIXEL_FRAME_RETRO),
    frameSlice: 4 * FRAME_SCALE,
    frameBorderWidth: 4 * FRAME_SCALE,
    framePixels: PIXEL_FRAME_RETRO,
    frameSliceRaw: 4,
  },
};

const BAYER4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

const EDITOR_ZOOM_LEVELS = [1, 2, 4, 8, 16, 24, 32];

const state = {
  imageUrl: null,
  sourceImage: null,
  pixelSize: 3,
  paletteKey: 'sora',
  dragOver: false,
  processing: false,
  dialogEnabled: false,
  dialogStyle: 'win95',
  dialogName: '',
  dialogText: '',
  dialogPosition: 70,
  typedChars: 0,
  soundEnabled: true,
  lang: getDefaultLang(),
  isLangOpen: false,
  isAboutOpen: false,
  isRecording: false,
  isEditorOpen: false,
  effects: {
    glitch: false,
    crt: false,
    paletteCycle: false,
    ghost: false,
    ditherFade: false,
  },
  ghostEnabled: true,
  ghostMsg: '',
  frameTick: 0,
  isMobile: window.innerWidth < 768,
  mobileTab: 'pixel',
  now: new Date(),
};

const runtime = {
  refs: {},
  baseImageData: null,
  gridData: null,
  fxTimer: null,
  typingTimer: null,
  clockTimer: null,
  ghostIdleTimer: null,
  ghostMsgTimer: null,
  langClickAway: null,
  audioContext: null,
  editor: null,
  editorSpacePan: false,
};

function getDefaultLang() {
  const language = navigator.language || 'en';
  if (language.startsWith('zh')) {
    if (language.includes('TW') || language.includes('HK') || language.includes('Hant')) {
      return 'zh-TW';
    }
    return 'zh-CN';
  }
  if (language.startsWith('ko')) return 'ko';
  if (language.startsWith('ja')) return 'ja';
  if (language.startsWith('es')) return 'es';
  if (language.startsWith('fr')) return 'fr';
  if (language.startsWith('de')) return 'de';
  if (language.startsWith('pt')) return 'pt';
  return 'en';
}

function t() {
  return { ...I18N.en, ...(I18N[state.lang] || I18N.ja) };
}

function rand(list) {
  if (!list || list.length === 0) return '';
  return list[Math.floor(Math.random() * list.length)];
}

function nearestColor(r, g, b, palette) {
  let minDist = Infinity;
  let out = [r, g, b];
  for (const [pr, pg, pb] of palette) {
    const dr = r - pr;
    const dg = g - pg;
    const db = b - pb;
    const dist = dr * dr + dg * dg + db * db;
    if (dist < minDist) {
      minDist = dist;
      out = [pr, pg, pb];
    }
  }
  return out;
}

function nearestColorIndex(r, g, b, palette) {
  let minDist = Infinity;
  let index = 0;
  for (let i = 0; i < palette.length; i += 1) {
    const [pr, pg, pb] = palette[i];
    const dr = r - pr;
    const dg = g - pg;
    const db = b - pb;
    const dist = dr * dr + dg * dg + db * db;
    if (dist < minDist) {
      minDist = dist;
      index = i;
    }
  }
  return index;
}

function colorToInt(r, g, b) {
  return (r << 16) | (g << 8) | b;
}

function applyGlitch(ctx, width, height, pixelSize) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const out = new Uint8ClampedArray(imageData.data);
  const shiftBase = Math.max(pixelSize, Math.round(pixelSize * 1.5));

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = (y * width + x) * 4;
      const right = Math.min(width - 1, x + shiftBase);
      const left = Math.max(0, x - shiftBase);
      out[idx] = imageData.data[(y * width + right) * 4];
      out[idx + 1] = imageData.data[idx + 1];
      out[idx + 2] = imageData.data[(y * width + left) * 4 + 2];
      out[idx + 3] = imageData.data[idx + 3];
    }
  }

  const backup = new Uint8ClampedArray(out);
  const slices = 8 + Math.floor(Math.random() * 8);
  for (let i = 0; i < slices; i += 1) {
    const small = Math.random() < 0.5;
    const yStart = Math.floor((Math.random() * height) / pixelSize) * pixelSize;
    const rows = small
      ? (1 + Math.floor(Math.random() * 2)) * pixelSize
      : (3 + Math.floor(Math.random() * 4)) * pixelSize;
    const maxShift = small ? pixelSize * 6 : pixelSize * 2;
    const shift = Math.round((Math.random() - 0.5) * 2 * maxShift);

    for (let y = yStart; y < Math.min(height, yStart + rows); y += 1) {
      for (let x = 0; x < width; x += 1) {
        const srcX = x - shift;
        const dst = (y * width + x) * 4;
        if (srcX >= 0 && srcX < width) {
          const src = (y * width + srcX) * 4;
          out[dst] = backup[src];
          out[dst + 1] = backup[src + 1];
          out[dst + 2] = backup[src + 2];
          out[dst + 3] = backup[src + 3];
        } else {
          out[dst] = 0;
          out[dst + 1] = 0;
          out[dst + 2] = 0;
          out[dst + 3] = imageData.data[dst + 3];
        }
      }
    }
  }

  ctx.putImageData(new ImageData(out, width, height), 0, 0);
}

function applyCrt(ctx, width, height) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const src = imageData.data;
  const backup = new Uint8ClampedArray(src);

  for (let y = 0; y < height; y += 1) {
    const mul = y % 2 === 1 ? 0.65 : 1;
    for (let x = 0; x < width; x += 1) {
      const idx = (y * width + x) * 4;
      const left = Math.max(0, x - 1);
      const right = Math.min(width - 1, x + 1);
      src[idx] = backup[(y * width + left) * 4] * mul;
      src[idx + 1] = backup[idx + 1] * mul;
      src[idx + 2] = backup[(y * width + right) * 4 + 2] * mul;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function applyPaletteCycle(ctx, width, height, palette, frame) {
  const shift = frame % palette.length;
  if (shift === 0) return;

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const indexMap = new Map();

  palette.forEach((rgb, idx) => {
    indexMap.set(colorToInt(rgb[0], rgb[1], rgb[2]), idx);
  });

  for (let i = 0; i < data.length; i += 4) {
    const key = colorToInt(data[i], data[i + 1], data[i + 2]);
    const idx = indexMap.get(key);
    if (idx === undefined) continue;
    const next = palette[(idx + shift) % palette.length];
    data[i] = next[0];
    data[i + 1] = next[1];
    data[i + 2] = next[2];
  }

  ctx.putImageData(imageData, 0, 0);
}

function applyGhost(ctx, width, height, frame) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const backup = new Uint8ClampedArray(data);

  const angle = (frame * 0.12) % (Math.PI * 2);
  const offsetX = Math.round(Math.cos(angle) * 3);
  const offsetY = Math.round(Math.sin(angle) * 2);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const sx = x - offsetX;
      const sy = y - offsetY;
      if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue;
      const dst = (y * width + x) * 4;
      const src = (sy * width + sx) * 4;
      data[dst] = Math.round(data[dst] * 0.7 + backup[src] * 0.3);
      data[dst + 1] = Math.round(data[dst + 1] * 0.7 + backup[src + 1] * 0.3);
      data[dst + 2] = Math.round(data[dst + 2] * 0.7 + backup[src + 2] * 0.3);
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function applyDitherFade(ctx, width, height, frame) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const threshold = 8 + Math.sin(frame * 0.15) * 6;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (BAYER4[y % 4][x % 4] <= threshold) continue;
      const idx = (y * width + x) * 4;
      data[idx] *= 0.3;
      data[idx + 1] *= 0.3;
      data[idx + 2] *= 0.3;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function drawPixelFrame(ctx, pixels, sliceRaw, x, y, width, height, scaleOverride) {
  const h = pixels.length;
  const w = pixels[0].length;
  const scale = scaleOverride || FRAME_SCALE;
  const borderW = sliceRaw * scale;

  for (let yy = 0; yy < sliceRaw; yy += 1) {
    for (let xx = 0; xx < sliceRaw; xx += 1) {
      const tl = pixels[yy][xx];
      const tr = pixels[yy][w - 1 - xx];
      const bl = pixels[h - 1 - yy][xx];
      const br = pixels[h - 1 - yy][w - 1 - xx];

      if (tl) {
        ctx.fillStyle = tl;
        ctx.fillRect(x + xx * scale, y + yy * scale, scale, scale);
      }
      if (tr) {
        ctx.fillStyle = tr;
        ctx.fillRect(x + width - (xx + 1) * scale, y + yy * scale, scale, scale);
      }
      if (bl) {
        ctx.fillStyle = bl;
        ctx.fillRect(x + xx * scale, y + height - (yy + 1) * scale, scale, scale);
      }
      if (br) {
        ctx.fillStyle = br;
        ctx.fillRect(
          x + width - (xx + 1) * scale,
          y + height - (yy + 1) * scale,
          scale,
          scale,
        );
      }
    }
  }

  const cx = Math.floor(w / 2);
  for (let yy = 0; yy < sliceRaw; yy += 1) {
    if (pixels[yy][cx]) {
      ctx.fillStyle = pixels[yy][cx];
      ctx.fillRect(x + borderW, y + yy * scale, width - borderW * 2, scale);
    }
    if (pixels[h - 1 - yy][cx]) {
      ctx.fillStyle = pixels[h - 1 - yy][cx];
      ctx.fillRect(
        x + borderW,
        y + height - (yy + 1) * scale,
        width - borderW * 2,
        scale,
      );
    }
  }

  const cy = Math.floor(h / 2);
  for (let xx = 0; xx < sliceRaw; xx += 1) {
    if (pixels[cy][xx]) {
      ctx.fillStyle = pixels[cy][xx];
      ctx.fillRect(x + xx * scale, y + borderW, scale, height - borderW * 2);
    }
    if (pixels[cy][w - 1 - xx]) {
      ctx.fillStyle = pixels[cy][w - 1 - xx];
      ctx.fillRect(x + width - (xx + 1) * scale, y + borderW, scale, height - borderW * 2);
    }
  }

  return { borderW, scale };
}

function hasActiveFx() {
  return Object.values(state.effects).some(Boolean);
}

function isRpgStyle(styleKey) {
  return styleKey === 'dq' || styleKey === 'ff' || styleKey === 'retro';
}

function createAudioContext() {
  if (runtime.audioContext) return runtime.audioContext;
  try {
    runtime.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (err) {
    runtime.audioContext = null;
  }
  return runtime.audioContext;
}

function playClick() {
  if (!state.soundEnabled) return;
  const ctx = createAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(500, ctx.currentTime);
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.05);
    osc.frequency.setValueAtTime(1000, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (err) {
    // ignore audio errors
  }
}

function playToggle(on) {
  if (!state.soundEnabled) return;
  const ctx = createAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    if (on) {
      osc.frequency.setValueAtTime(500, ctx.currentTime);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.05);
      osc.frequency.setValueAtTime(1000, ctx.currentTime + 0.1);
    } else {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.setValueAtTime(500, ctx.currentTime + 0.05);
      osc.frequency.setValueAtTime(300, ctx.currentTime + 0.1);
    }
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (err) {
    // ignore audio errors
  }
}

function triggerGhost(type) {
  const packs = GHOST_TEXT[state.lang] || GHOST_TEXT.en || GHOST_TEXT.ja;
  const list = type === 'click' ? [...packs.click, ...packs.idle] : packs[type];
  if (!list || list.length === 0) return;
  state.ghostMsg = rand(list);
  renderGhost();
  if (runtime.ghostMsgTimer) clearTimeout(runtime.ghostMsgTimer);
  runtime.ghostMsgTimer = setTimeout(() => {
    state.ghostMsg = '';
    renderGhost();
  }, 5000);
}

function startGhostIdle() {
  if (runtime.ghostIdleTimer) clearInterval(runtime.ghostIdleTimer);
  runtime.ghostIdleTimer = setInterval(() => triggerGhost('idle'), 20000);
}

function buildBaseLayout() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <button class="desktop-icon" id="iconReadme" aria-label="Readme">
      <span class="desktop-icon-art"></span>
      <span class="desktop-icon-label">readme</span>
    </button>
    <button class="desktop-icon" id="iconHome" aria-label="Homepage">
      <span class="desktop-icon-art"></span>
      <span class="desktop-icon-label">Homepage</span>
    </button>
    <button class="desktop-icon" id="iconX" aria-label="X link">
      <span class="desktop-icon-art"></span>
      <span class="desktop-icon-label">Heaven</span>
    </button>

    <div class="main-window">
      <div class="title-bar">
        <span class="title-bar-title">PIXEL CONVERTER v1.0</span>
        <span class="win-btn-row">
          <span class="win-btn">_</span>
          <span class="win-btn">□</span>
          <span class="win-btn">×</span>
        </span>
      </div>
      <div class="menu-bar">
        <span data-i18n="menuFile"></span>
        <span data-i18n="menuEdit"></span>
        <span data-i18n="menuView"></span>
        <span data-i18n="menuHelp"></span>
      </div>

      <div class="content-row">
        <div class="controls-col">
          <div class="mobile-tabs hidden" id="mobileTabs">
            <button id="mobileTabPixel" class="btn mobile-tab" type="button">Pixel</button>
            <button id="mobileTabPalette" class="btn mobile-tab" type="button">Palette</button>
            <button id="mobileTabDialog" class="btn mobile-tab" type="button">Dialog</button>
          </div>

          <section class="panel" id="pixelPanel">
            <div class="panel-title"><span data-i18n="pixelSize"></span><span class="win-btn-row"><span class="win-btn">_</span><span class="win-btn">□</span><span class="win-btn">×</span></span></div>
            <div class="panel-body">
              <label class="label" data-i18n="size"></label>
              <div class="btn-row" id="sizeButtons"></div>

              <label class="label" style="margin-top: 8px" data-i18n="fx"></label>
              <div class="fx-grid" id="fxButtons"></div>
            </div>
          </section>

          <section class="panel" id="palettePanel">
            <div class="panel-title"><span data-i18n="palette"></span><span class="win-btn-row"><span class="win-btn">_</span><span class="win-btn">□</span><span class="win-btn">×</span></span></div>
            <div class="panel-body">
              <div class="palette-grid" id="paletteGrid"></div>
            </div>
          </section>

          <section class="panel" id="dialogPanel">
            <div class="panel-title"><span data-i18n="dialog"></span><span class="win-btn-row"><span class="win-btn">_</span><span class="win-btn">□</span><span class="win-btn">×</span></span></div>
            <div class="panel-body" id="dialogPanelBody">
              <label class="checkbox-row">
                <input id="dialogEnabled" type="checkbox" />
                <span data-i18n="onOff"></span>
              </label>

              <div id="dialogControls" class="hidden" style="margin-top: 10px">
                <div>
                  <span class="label" data-i18n="style"></span>
                  <div class="btn-row" id="dialogStyleButtons" style="gap:4px; flex-wrap: wrap"></div>
                </div>

                <div style="margin-top: 8px">
                  <span class="label" data-i18n="name"></span>
                  <input id="dialogName" type="text" />
                </div>

                <div style="margin-top: 8px">
                  <span class="label" data-i18n="text"></span>
                  <textarea id="dialogText" rows="3"></textarea>
                </div>

                <div style="margin-top: 8px">
                  <span class="label" id="dialogPosLabel"></span>
                  <div class="btn-row hidden" id="dialogPosButtons"></div>
                  <div id="dialogPosRangeWrap">
                    <input id="dialogPosition" type="range" min="10" max="100" />
                    <div style="display:flex; justify-content:space-between; font-size:10px; color:#808080; margin-top:2px">
                      <span data-i18n="top"></span>
                      <span data-i18n="bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="preview-col">
          <section class="panel">
            <div class="panel-title"><span data-i18n="preview"></span><span class="win-btn-row"><span class="win-btn">_</span><span class="win-btn">□</span><span class="win-btn">×</span></span></div>
            <div class="panel-body">
              <div class="preview-drop" id="previewDrop">
                <input id="imageInput" type="file" accept="image/*" class="hidden" />
                <input id="jsonInput" type="file" accept=".json" class="hidden" />
                <canvas id="previewCanvas" class="preview-canvas hidden"></canvas>
                <div class="overlay-container" id="overlayContainer"></div>
                <div id="loadingMask" class="loading-mask hidden">
                  <svg class="hourglass" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="0" width="10" height="1" fill="#c0c0c0" />
                    <rect x="1" y="1" width="10" height="1" fill="#808080" />
                    <rect x="2" y="2" width="1" height="1" fill="#808080" />
                    <rect x="9" y="2" width="1" height="1" fill="#808080" />
                    <rect x="3" y="2" width="6" height="1" fill="#c0a000" />
                    <rect x="3" y="3" width="1" height="1" fill="#808080" />
                    <rect x="8" y="3" width="1" height="1" fill="#808080" />
                    <rect x="4" y="3" width="4" height="1" fill="#c0a000" />
                    <rect x="4" y="4" width="1" height="1" fill="#808080" />
                    <rect x="7" y="4" width="1" height="1" fill="#808080" />
                    <rect x="5" y="4" width="2" height="1" fill="#c0a000" />
                    <rect x="5" y="5" width="2" height="1" fill="#808080" />
                    <rect x="5" y="6" width="2" height="1" fill="#c0a000" />
                    <rect x="5" y="7" width="2" height="1" fill="#808080" />
                    <rect x="4" y="8" width="1" height="1" fill="#808080" />
                    <rect x="7" y="8" width="1" height="1" fill="#808080" />
                    <rect x="5" y="8" width="2" height="1" fill="#c0a000" />
                    <rect x="3" y="9" width="1" height="1" fill="#808080" />
                    <rect x="8" y="9" width="1" height="1" fill="#808080" />
                    <rect x="4" y="9" width="4" height="1" fill="#c0a000" />
                    <rect x="2" y="10" width="1" height="1" fill="#808080" />
                    <rect x="9" y="10" width="1" height="1" fill="#808080" />
                    <rect x="3" y="10" width="6" height="1" fill="#c0a000" />
                    <rect x="1" y="11" width="10" height="1" fill="#808080" />
                    <rect x="1" y="12" width="10" height="1" fill="#c0c0c0" />
                  </svg>
                  <div id="loadingText"></div>
                </div>
                <button id="editBtn" class="btn btn-small hidden" style="position:absolute;top:8px;right:8px;z-index:10" data-i18n="edit"></button>
                <div id="emptyState" class="preview-empty">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="28" height="24" stroke="#808080" stroke-width="2" />
                    <circle cx="11" cy="13" r="3" fill="#808080" />
                    <path d="M4 24 L12 16 L18 22 L22 18 L28 24" stroke="#808080" stroke-width="2" fill="none" />
                  </svg>
                  <div><span data-i18n="dragDrop"></span><br /><span data-i18n="orClick"></span></div>
                </div>
              </div>
            </div>
          </section>

          <button id="downloadBtn" class="btn btn-block" data-i18n="download"></button>
          <button id="videoBtn" class="btn btn-block" data-i18n="downloadVideo"></button>
        </div>
      </div>

      <div class="status-bar">
        <span class="status-cell flex" id="statusMain"></span>
        <span class="status-cell" id="statusSize"></span>
        <span class="status-cell" id="statusPalette"></span>
      </div>
    </div>

    <div class="taskbar">
      <button id="taskStart" class="btn task-btn small"><span style="font-size:13px">🪟</span> Start</button>
      <button id="taskAbout" class="btn task-btn"><span style="font-size:10px">📄</span><span data-i18n="about"></span></button>
      <button id="taskGhost" class="btn task-btn"><span style="font-size:10px">👻</span><span id="ghostTaskLabel">Sora Ghost</span></button>

      <div style="position:relative" id="langWrap">
        <button id="taskLang" class="btn task-btn"><span style="font-size:10px">🌐</span> <span id="taskLangLabel"></span></button>
        <div id="langPop" class="lang-pop hidden"></div>
      </div>

      <button id="jsonExportBtn" class="btn task-btn small hidden">↓JSON</button>
      <button id="jsonImportBtn" class="btn task-btn small hidden">↑JSON</button>

      <div class="task-spacer"></div>
      <div class="clock">
        <span id="soundToggle" role="button" tabindex="0" aria-label="Sound toggle">🔊</span>
        <span id="clockText"></span>
      </div>
    </div>

    <div id="ghostWrap" class="ghost-wrap">
      <div id="ghostMsg" class="ghost-msg hidden"></div>
      <img id="ghostImage" class="ghost-img" src="./public/assets/sora_ghost.png" alt="Sora Ghost" />
    </div>

    <div id="aboutModal" class="modal">
      <div class="modal-backdrop" id="aboutBackdrop"></div>
      <div class="about-window">
        <div class="title-bar">
          <span class="title-bar-title" id="aboutTitle"></span>
          <span class="win-btn-row">
            <span class="win-btn">_</span>
            <span class="win-btn">□</span>
            <button class="win-btn" id="aboutClose" type="button">×</button>
          </span>
        </div>
        <div class="menu-bar" style="border-bottom:1px solid #808080">
          <span style="color:#808080" data-i18n="menuFile"></span>
          <span style="color:#808080" data-i18n="menuEdit"></span>
          <span style="color:#808080" data-i18n="menuHelp"></span>
        </div>
        <div class="about-content" id="aboutContent"></div>
        <div class="status-bar">
          <span class="status-cell flex">Ln 1, Col 1</span>
        </div>
      </div>
    </div>

    <div id="editorModal" class="modal">
      <div class="modal-backdrop" id="editorBackdrop"></div>
      <div class="editor-window">
        <div class="title-bar">
          <span class="title-bar-title">Pixel Editor</span>
          <span class="win-btn-row">
            <span class="win-btn">_</span>
            <span class="win-btn">□</span>
            <button class="win-btn" id="editorCloseBtn" type="button">×</button>
          </span>
        </div>
        <div class="editor-body">
          <div class="editor-left">
            <section class="panel">
              <div class="panel-title"><span data-i18n="edit"></span></div>
              <div class="panel-body">
                <div class="btn-row" id="editorTools"></div>
                <div class="btn-row" style="margin-top: 6px">
                  <button id="editorUndo" class="btn btn-small"></button>
                  <button id="editorRedo" class="btn btn-small"></button>
                </div>
              </div>
            </section>
            <section class="panel">
              <div class="panel-title"><span>Colors</span></div>
              <div class="panel-body">
                <div class="palette-grid" id="editorPalette"></div>
              </div>
            </section>
            <section class="panel">
              <div class="panel-title"><span>Zoom</span></div>
              <div class="panel-body">
                <div class="btn-row">
                  <button id="editorZoomOut" class="btn btn-small">-</button>
                  <button id="editorZoomReset" class="btn btn-small">100%</button>
                  <button id="editorZoomIn" class="btn btn-small">+</button>
                </div>
              </div>
            </section>
          </div>
          <div class="editor-canvas-wrap" id="editorCanvasWrap">
            <canvas id="editorCanvas" class="editor-canvas"></canvas>
          </div>
        </div>
        <div class="editor-bottom">
          <span id="editorHint"></span>
          <div class="btn-row" style="width:auto">
            <button id="editorHelpBtn" class="btn btn-small">?</button>
            <button id="editorSave" class="btn btn-small"></button>
            <button id="editorCancel" class="btn btn-small"></button>
          </div>
          <div id="editorHelpPop" class="editor-help-pop hidden"></div>
        </div>
      </div>
    </div>
  `;

  runtime.refs = {
    app,
    previewCanvas: document.getElementById('previewCanvas'),
    previewDrop: document.getElementById('previewDrop'),
    imageInput: document.getElementById('imageInput'),
    jsonInput: document.getElementById('jsonInput'),
    emptyState: document.getElementById('emptyState'),
    loadingMask: document.getElementById('loadingMask'),
    loadingText: document.getElementById('loadingText'),
    overlayContainer: document.getElementById('overlayContainer'),
    editBtn: document.getElementById('editBtn'),
    mobileTabs: document.getElementById('mobileTabs'),
    mobileTabPixel: document.getElementById('mobileTabPixel'),
    mobileTabPalette: document.getElementById('mobileTabPalette'),
    mobileTabDialog: document.getElementById('mobileTabDialog'),
    pixelPanel: document.getElementById('pixelPanel'),
    palettePanel: document.getElementById('palettePanel'),
    dialogPanel: document.getElementById('dialogPanel'),
    sizeButtons: document.getElementById('sizeButtons'),
    fxButtons: document.getElementById('fxButtons'),
    paletteGrid: document.getElementById('paletteGrid'),
    dialogEnabled: document.getElementById('dialogEnabled'),
    dialogControls: document.getElementById('dialogControls'),
    dialogStyleButtons: document.getElementById('dialogStyleButtons'),
    dialogName: document.getElementById('dialogName'),
    dialogText: document.getElementById('dialogText'),
    dialogPosition: document.getElementById('dialogPosition'),
    dialogPosButtons: document.getElementById('dialogPosButtons'),
    dialogPosRangeWrap: document.getElementById('dialogPosRangeWrap'),
    dialogPosLabel: document.getElementById('dialogPosLabel'),
    downloadBtn: document.getElementById('downloadBtn'),
    videoBtn: document.getElementById('videoBtn'),
    statusMain: document.getElementById('statusMain'),
    statusSize: document.getElementById('statusSize'),
    statusPalette: document.getElementById('statusPalette'),
    taskStart: document.getElementById('taskStart'),
    taskAbout: document.getElementById('taskAbout'),
    taskGhost: document.getElementById('taskGhost'),
    taskLang: document.getElementById('taskLang'),
    taskLangLabel: document.getElementById('taskLangLabel'),
    langPop: document.getElementById('langPop'),
    langWrap: document.getElementById('langWrap'),
    soundToggle: document.getElementById('soundToggle'),
    clockText: document.getElementById('clockText'),
    jsonExportBtn: document.getElementById('jsonExportBtn'),
    jsonImportBtn: document.getElementById('jsonImportBtn'),
    ghostWrap: document.getElementById('ghostWrap'),
    ghostMsg: document.getElementById('ghostMsg'),
    ghostImage: document.getElementById('ghostImage'),
    ghostTaskLabel: document.getElementById('ghostTaskLabel'),
    aboutModal: document.getElementById('aboutModal'),
    aboutBackdrop: document.getElementById('aboutBackdrop'),
    aboutClose: document.getElementById('aboutClose'),
    aboutTitle: document.getElementById('aboutTitle'),
    aboutContent: document.getElementById('aboutContent'),
    editorModal: document.getElementById('editorModal'),
    editorBackdrop: document.getElementById('editorBackdrop'),
    editorCloseBtn: document.getElementById('editorCloseBtn'),
    editorCanvasWrap: document.getElementById('editorCanvasWrap'),
    editorCanvas: document.getElementById('editorCanvas'),
    editorTools: document.getElementById('editorTools'),
    editorPalette: document.getElementById('editorPalette'),
    editorUndo: document.getElementById('editorUndo'),
    editorRedo: document.getElementById('editorRedo'),
    editorZoomIn: document.getElementById('editorZoomIn'),
    editorZoomOut: document.getElementById('editorZoomOut'),
    editorZoomReset: document.getElementById('editorZoomReset'),
    editorHelpBtn: document.getElementById('editorHelpBtn'),
    editorHelpPop: document.getElementById('editorHelpPop'),
    editorSave: document.getElementById('editorSave'),
    editorCancel: document.getElementById('editorCancel'),
    editorHint: document.getElementById('editorHint'),
    iconReadme: document.getElementById('iconReadme'),
    iconHome: document.getElementById('iconHome'),
    iconX: document.getElementById('iconX'),
  };
}

function renderI18n() {
  const dict = t();
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    el.textContent = dict[key] ?? key;
  });

  runtime.refs.dialogName.placeholder = dict.namePh;
  runtime.refs.dialogText.placeholder = dict.textPh;
  runtime.refs.dialogPosLabel.textContent = state.isMobile
    ? dict.position
    : `${dict.position}: ${state.dialogPosition}%`;
  runtime.refs.loadingText.textContent = state.isRecording ? dict.recording : dict.processing;
  runtime.refs.taskLangLabel.textContent = dict.label;
  runtime.refs.ghostTaskLabel.textContent = state.lang === 'ja' ? '空Ghost' : 'Sora Ghost';
  runtime.refs.mobileTabPixel.textContent = 'Pixel';
  runtime.refs.mobileTabPalette.textContent = dict.palette;
  runtime.refs.mobileTabDialog.textContent = dict.dialog;
  runtime.refs.iconReadme.querySelector('.desktop-icon-label').textContent = dict.about;
  runtime.refs.iconX.querySelector('.desktop-icon-label').textContent =
    state.lang === 'ja' ? '天国' : 'Heaven';

  runtime.refs.aboutTitle.textContent = `readme.txt - ${dict.about}`;
  runtime.refs.aboutContent.innerHTML = `PIXEL CONVERTER v1.0\n================================\n\n${dict.aboutDesc}\n\n[License]\n${dict.license}\n\n--------------------------------\nAuthor: Ameniwa\nWeb: <a href=\"https://ameniwa.com\" target=\"_blank\" rel=\"noopener noreferrer\">ameniwa.com</a>\nX: @ameniwa_`;

  runtime.refs.editorUndo.textContent = dict.editorUndo;
  runtime.refs.editorRedo.textContent = dict.editorRedo;
  runtime.refs.editorSave.textContent = dict.editorSave;
  runtime.refs.editorCancel.textContent = dict.editorCancel;
  runtime.refs.editorHint.textContent = state.isMobile
    ? dict.editorHintMobile
    : dict.editorHintPc;
  runtime.refs.editorHelpPop.textContent = state.isMobile
    ? dict.editorHelpMobile
    : dict.editorHelpPc;

  renderLangMenu();
  renderControls();
  renderDialogOverlay();
  renderStatus();
  renderGhost();
}

function renderLangMenu() {
  const pop = runtime.refs.langPop;
  pop.innerHTML = '';
  Object.entries(I18N).forEach(([key, value]) => {
    const option = document.createElement('div');
    option.className = `lang-option ${state.lang === key ? 'active' : ''}`;
    option.textContent = value.label;
    option.addEventListener('click', () => {
      state.lang = key;
      state.isLangOpen = false;
      playClick();
      renderI18n();
      syncUiState();
      closeLangMenu();
    });
    pop.appendChild(option);
  });
}

function dialogStyleIconSvg(styleKey, size) {
  const common = `width="${size}" height="${size}" viewBox="0 0 32 32" shape-rendering="crispEdges"`;
  const map = {
    win95: `<svg ${common}>
      <rect width="32" height="32" fill="#c0c0c0"/>
      <rect x="1" y="1" width="30" height="4" fill="#000080"/>
      <rect x="2" y="2" width="6" height="2" fill="#ffffff" opacity="0.8"/>
      <circle cx="16" cy="19" r="7" fill="#ff0000"/>
      <line x1="12" y1="15" x2="20" y2="23" stroke="#ffffff" stroke-width="2"/>
      <line x1="20" y1="15" x2="12" y2="23" stroke="#ffffff" stroke-width="2"/>
    </svg>`,
    terminal: `<svg ${common}>
      <rect width="32" height="32" fill="#000000"/>
      <rect x="0" y="0" width="32" height="32" fill="none" stroke="#33ff33" stroke-width="1"/>
      <text x="4" y="14" fill="#33ff33" font-size="10" font-family="monospace">&gt;_</text>
      <rect x="4" y="20" width="18" height="2" fill="#33ff33" opacity="0.5"/>
      <rect x="4" y="25" width="12" height="2" fill="#33ff33" opacity="0.3"/>
    </svg>`,
    dq: `<svg ${common}>
      <rect width="32" height="32" fill="#000000"/>
      <rect x="2" y="2" width="28" height="28" fill="none" stroke="#ffffff" stroke-width="2"/>
      <rect x="6" y="8" width="16" height="2" fill="#ffffff"/>
      <rect x="6" y="14" width="20" height="2" fill="#ffffff"/>
      <rect x="6" y="20" width="12" height="2" fill="#ffffff"/>
    </svg>`,
    ff: `<svg ${common}>
      <rect width="32" height="16" fill="#000088"/>
      <rect y="16" width="32" height="16" fill="#000044"/>
      <rect x="2" y="2" width="28" height="28" fill="none" stroke="#8888dd" stroke-width="2"/>
      <rect x="6" y="8" width="16" height="2" fill="#ffffff"/>
      <rect x="6" y="14" width="20" height="2" fill="#ffffff"/>
      <rect x="6" y="20" width="12" height="2" fill="#ffffff"/>
    </svg>`,
    retro: `<svg ${common}>
      <rect width="32" height="32" fill="#2a1a0a"/>
      <rect x="2" y="2" width="28" height="28" fill="none" stroke="#c8a870" stroke-width="2"/>
      <rect x="6" y="8" width="16" height="2" fill="#f0e0c0"/>
      <rect x="6" y="14" width="20" height="2" fill="#f0e0c0"/>
      <rect x="6" y="20" width="12" height="2" fill="#f0e0c0"/>
    </svg>`,
  };
  return map[styleKey] || '';
}

function renderControls() {
  const dict = t();

  runtime.refs.sizeButtons.innerHTML = '';
  [2, 3, 4, 5].forEach((size) => {
    const btn = document.createElement('button');
    btn.className = `btn btn-small ${state.pixelSize === size ? 'active' : ''}`;
    btn.textContent = `${size}px`;
    btn.addEventListener('click', () => {
      state.pixelSize = size;
      playClick();
      convertCurrentImage();
      renderControls();
      renderStatus();
    });
    runtime.refs.sizeButtons.appendChild(btn);
  });

  runtime.refs.fxButtons.innerHTML = '';
  const fxOrder = [
    ['glitch', dict.glitch],
    ['crt', dict.crt],
    ['paletteCycle', dict.paletteCycle],
    ['ghost', dict.ghost],
    ['ditherFade', dict.ditherFade],
  ];
  fxOrder.forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = `btn ${state.effects[key] ? 'active' : ''}`;
    btn.style.fontSize = '10px';
    btn.textContent = label;
    btn.addEventListener('click', () => {
      state.effects[key] = !state.effects[key];
      playToggle(state.effects[key]);
      renderControls();
      syncFxLoop();
    });
    runtime.refs.fxButtons.appendChild(btn);
  });

  runtime.refs.paletteGrid.innerHTML = '';
  Object.entries(PALETTES).forEach(([key, palette]) => {
    const btn = document.createElement('button');
    btn.className = `btn palette-item ${state.paletteKey === key ? 'active' : ''}`;

    const swatches = document.createElement('span');
    swatches.className = 'palette-swatches';
    palette.colors.slice(0, 8).forEach((rgb) => {
      const sw = document.createElement('span');
      sw.className = 'palette-swatch';
      sw.style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      swatches.appendChild(sw);
    });

    const name = document.createElement('span');
    name.textContent = palette.name;

    btn.appendChild(swatches);
    btn.appendChild(name);
    btn.addEventListener('click', () => {
      state.paletteKey = key;
      playClick();
      convertCurrentImage();
      triggerGhost('palette');
      renderControls();
      renderStatus();
    });
    runtime.refs.paletteGrid.appendChild(btn);
  });

  runtime.refs.dialogEnabled.checked = state.dialogEnabled;
  runtime.refs.dialogControls.classList.toggle('hidden', !state.dialogEnabled);

  runtime.refs.dialogStyleButtons.innerHTML = '';
  const previewSize = state.isMobile ? 32 : 36;
  ['win95', 'terminal', 'dq', 'ff', 'retro'].forEach((styleKey) => {
    const btn = document.createElement('button');
    btn.className = `dialog-style-btn ${state.dialogStyle === styleKey ? 'active' : ''}`;
    btn.title = dict[styleKey] || styleKey;
    btn.setAttribute('aria-label', dict[styleKey] || styleKey);
    btn.innerHTML = dialogStyleIconSvg(styleKey, previewSize);
    btn.addEventListener('click', () => {
      state.dialogStyle = styleKey;
      playClick();
      resetTyping();
      renderControls();
      renderDialogOverlay();
    });
    runtime.refs.dialogStyleButtons.appendChild(btn);
  });

  runtime.refs.dialogName.value = state.dialogName;
  runtime.refs.dialogText.value = state.dialogText;
  runtime.refs.dialogPosition.value = String(state.dialogPosition);
  runtime.refs.dialogPosLabel.textContent = state.isMobile
    ? dict.position
    : `${dict.position}: ${state.dialogPosition}%`;

  runtime.refs.dialogPosButtons.innerHTML = '';
  [
    [25, '▲'],
    [50, '■'],
    [70, '▼'],
    [90, '▽'],
  ].forEach(([value, label]) => {
    const btn = document.createElement('button');
    btn.className = `btn btn-small ${state.dialogPosition === value ? 'active' : ''}`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      state.dialogPosition = value;
      playClick();
      renderControls();
      renderDialogOverlay();
    });
    runtime.refs.dialogPosButtons.appendChild(btn);
  });

  runtime.refs.dialogPosButtons.classList.toggle('hidden', !state.isMobile);
  runtime.refs.dialogPosRangeWrap.classList.toggle('hidden', state.isMobile);

  runtime.refs.downloadBtn.textContent = dict.download;
  runtime.refs.videoBtn.textContent = state.isRecording ? dict.recording : dict.downloadVideo;
  runtime.refs.videoBtn.disabled = state.isRecording;

  renderMobilePanels();
  renderEditorControls();
}

function renderMobilePanels() {
  const useTabs = state.isMobile;

  runtime.refs.mobileTabs.classList.toggle('hidden', !useTabs);

  if (!useTabs) {
    runtime.refs.pixelPanel.classList.remove('hidden');
    runtime.refs.palettePanel.classList.remove('hidden');
    runtime.refs.dialogPanel.classList.remove('hidden');
    return;
  }

  const tab = state.mobileTab;
  runtime.refs.mobileTabPixel.classList.toggle('active', tab === 'pixel');
  runtime.refs.mobileTabPalette.classList.toggle('active', tab === 'palette');
  runtime.refs.mobileTabDialog.classList.toggle('active', tab === 'dialog');

  runtime.refs.pixelPanel.classList.toggle('hidden', tab !== 'pixel');
  runtime.refs.palettePanel.classList.toggle('hidden', tab !== 'palette');
  runtime.refs.dialogPanel.classList.toggle('hidden', tab !== 'dialog');
}

function renderStatus() {
  const dict = t();
  runtime.refs.statusMain.textContent = state.sourceImage ? dict.ready : dict.dropMsg;
  runtime.refs.statusSize.textContent = `${state.pixelSize}px`;
  runtime.refs.statusPalette.textContent = PALETTES[state.paletteKey].name;
}

function renderClock() {
  runtime.refs.clockText.textContent = `${String(state.now.getHours()).padStart(2, '0')}:${String(
    state.now.getMinutes(),
  ).padStart(2, '0')}`;
  runtime.refs.soundToggle.textContent = state.soundEnabled ? '🔊' : '🔇';
}

function openAbout() {
  state.isAboutOpen = true;
  runtime.refs.aboutModal.classList.add('open');
  playClick();
}

function closeAbout() {
  state.isAboutOpen = false;
  runtime.refs.aboutModal.classList.remove('open');
  playClick();
}

function openLangMenu() {
  state.isLangOpen = true;
  runtime.refs.langPop.classList.remove('hidden');
  runtime.refs.taskLang.classList.add('active');
}

function closeLangMenu() {
  state.isLangOpen = false;
  runtime.refs.langPop.classList.add('hidden');
  runtime.refs.taskLang.classList.remove('active');
}

function setLoading(loading) {
  state.processing = loading;
  runtime.refs.loadingMask.classList.toggle('hidden', !loading && !state.isRecording);
  runtime.refs.loadingText.textContent = state.isRecording ? t().recording : t().processing;
}

function setRecording(recording) {
  state.isRecording = recording;
  runtime.refs.loadingMask.classList.toggle('hidden', !state.processing && !recording);
  renderControls();
}

function resetTyping() {
  if (runtime.typingTimer) {
    clearInterval(runtime.typingTimer);
    runtime.typingTimer = null;
  }

  if (!state.dialogEnabled || !state.dialogText) {
    state.typedChars = 0;
    renderDialogOverlay();
    return;
  }

  if (state.dialogStyle === 'win95') {
    state.typedChars = state.dialogText.length;
    renderDialogOverlay();
    return;
  }

  state.typedChars = 0;
  renderDialogOverlay();
  runtime.typingTimer = setInterval(() => {
    if (state.typedChars >= state.dialogText.length) {
      clearInterval(runtime.typingTimer);
      runtime.typingTimer = null;
      renderDialogOverlay();
      return;
    }
    state.typedChars += 1;
    renderDialogOverlay();
  }, 50);
}

function buildRpgOverlayNode(theme) {
  const container = document.createElement('div');
  container.className = 'dialog-overlay rpg';
  container.style.top = `${state.dialogPosition}%`;
  container.style.background = theme.background;
  container.style.color = theme.color;
  container.style.borderWidth = `${theme.frameBorderWidth}px`;
  container.style.borderImage = `${theme.frameSvg} ${theme.frameSlice}`;

  const name = document.createElement('div');
  name.className = 'dialog-name';
  name.textContent = state.dialogName;
  name.style.background = theme.nameBg;
  name.style.color = theme.nameColor;
  name.style.borderWidth = `${theme.frameBorderWidth}px`;
  name.style.borderImage = `${theme.frameSvg} ${theme.frameSlice}`;
  if (!state.dialogName) {
    name.classList.add('hidden');
  }

  const body = document.createElement('div');
  const visibleText = state.dialogText.slice(0, state.typedChars);
  const allDone = state.typedChars >= state.dialogText.length;
  body.textContent = visibleText;

  if (allDone) {
    const caret = document.createElement('span');
    caret.className = 'overlay-caret';
    caret.textContent = '▼';
    caret.style.marginLeft = '4px';
    body.appendChild(caret);
  } else {
    const block = document.createElement('span');
    block.className = 'overlay-block';
    block.style.background = theme.color;
    body.appendChild(block);
  }

  container.appendChild(name);
  container.appendChild(body);
  return container;
}

function buildTerminalOverlayNode() {
  const node = document.createElement('div');
  node.className = 'dialog-overlay terminal';
  node.style.top = `${state.dialogPosition}%`;

  if (state.dialogName) {
    const head = document.createElement('div');
    head.style.fontSize = '11px';
    head.style.opacity = '0.7';
    head.style.marginBottom = '4px';
    head.textContent = `${state.dialogName}@pixel:~$`;
    node.appendChild(head);
  }

  const row = document.createElement('div');
  const visibleText = state.dialogText.slice(0, state.typedChars);
  row.innerHTML = `<span>&gt; ${escapeHtml(visibleText)}</span><span class="overlay-blink" style="display:inline-block;width:7px;height:1em;background:#33ff33;margin-left:2px;vertical-align:text-bottom"></span>`;
  node.appendChild(row);

  return node;
}

function buildWin95OverlayNode() {
  const node = document.createElement('div');
  node.className = 'dialog-overlay win95';
  node.style.top = `${state.dialogPosition}%`;

  const head = document.createElement('div');
  head.className = 'dialog-head';
  head.innerHTML = `<span style="flex:1">${escapeHtml(state.dialogName || 'System Failure')}</span><span style="width:16px;height:14px;background:#c0c0c0;display:inline-flex;align-items:center;justify-content:center;color:#000;box-shadow:inset -1px -1px 0 #808080, inset 1px 1px 0 #fff">×</span>`;

  const body = document.createElement('div');
  body.className = 'dialog-body';
  body.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" style="flex-shrink:0" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#ff0000" stroke="#800000" stroke-width="2" />
      <line x1="10" y1="10" x2="22" y2="22" stroke="#fff" stroke-width="3" />
      <line x1="22" y1="10" x2="10" y2="22" stroke="#fff" stroke-width="3" />
    </svg>
    <div>${escapeHtml(state.dialogText)}</div>`;

  const okWrap = document.createElement('div');
  okWrap.className = 'dialog-ok-wrap';
  okWrap.innerHTML = '<span class="dialog-ok">OK</span>';

  node.appendChild(head);
  node.appendChild(body);
  node.appendChild(okWrap);
  return node;
}

function renderDialogOverlay() {
  const container = runtime.refs.overlayContainer;
  container.innerHTML = '';

  if (!state.dialogEnabled || !state.sourceImage || !state.dialogText) {
    return;
  }

  const theme = DIALOG_THEMES[state.dialogStyle];
  let node;

  if (theme?.isWin95) {
    node = buildWin95OverlayNode();
  } else if (theme?.isTerminal) {
    node = buildTerminalOverlayNode();
  } else {
    node = buildRpgOverlayNode(theme);
  }

  container.appendChild(node);
}

function renderGhost() {
  runtime.refs.ghostWrap.classList.toggle('hidden', !state.ghostEnabled || state.isMobile);

  if (!state.ghostEnabled || state.isMobile) {
    runtime.refs.ghostMsg.classList.add('hidden');
    return;
  }

  runtime.refs.ghostMsg.textContent = state.ghostMsg;
  runtime.refs.ghostMsg.classList.toggle('hidden', !state.ghostMsg);
}

function escapeHtml(input) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('\n', '<br/>');
}

function syncPreviewState() {
  const hasImage = Boolean(state.sourceImage);
  runtime.refs.previewCanvas.classList.toggle('hidden', !hasImage);
  runtime.refs.emptyState.classList.toggle('hidden', hasImage);
  runtime.refs.editBtn.classList.toggle('hidden', !hasImage || !runtime.gridData);

  const canVideo = (state.dialogEnabled && state.dialogText) || hasActiveFx();
  runtime.refs.videoBtn.classList.toggle('hidden', !hasImage || !canVideo);
  runtime.refs.downloadBtn.classList.toggle('hidden', !hasImage);
}

function renderAll() {
  renderI18n();
  renderControls();
  renderStatus();
  renderClock();
  renderGhost();
  syncPreviewState();
}

function revokeImageUrl() {
  if (!state.imageUrl) return;
  URL.revokeObjectURL(state.imageUrl);
  state.imageUrl = null;
}

function loadImageFile(file) {
  if (!file || !file.type.startsWith('image/')) return;

  revokeImageUrl();

  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    state.imageUrl = url;
    state.sourceImage = img;
    playClick();
    convertCurrentImage();
    syncPreviewState();
  };
  img.src = url;
}

function convertCurrentImage() {
  if (!state.sourceImage) return;

  setLoading(true);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const img = state.sourceImage;
      const canvas = runtime.refs.previewCanvas;
      const ctx = canvas.getContext('2d');

      const maxSide = 600;
      let width = img.naturalWidth || img.width;
      let height = img.naturalHeight || img.height;

      if (width > maxSide || height > maxSide) {
        const ratio = Math.min(maxSide / width, maxSide / height);
        width = Math.floor(width * ratio);
        height = Math.floor(height * ratio);
      }

      canvas.width = width;
      canvas.height = height;

      const gridW = Math.max(1, Math.floor(width / state.pixelSize));
      const gridH = Math.max(1, Math.floor(height / state.pixelSize));

      const small = document.createElement('canvas');
      small.width = gridW;
      small.height = gridH;
      const smallCtx = small.getContext('2d');
      smallCtx.imageSmoothingEnabled = true;
      smallCtx.imageSmoothingQuality = 'medium';
      smallCtx.drawImage(img, 0, 0, gridW, gridH);

      const palette = PALETTES[state.paletteKey].colors;
      const imageData = smallCtx.getImageData(0, 0, gridW, gridH);
      const data = imageData.data;
      const indices = new Uint8Array(gridW * gridH);

      for (let i = 0; i < data.length; i += 4) {
        const pixelIndex = i / 4;
        if (data[i + 3] < 30) {
          indices[pixelIndex] = 0;
          continue;
        }

        const [nr, ng, nb] = nearestColor(data[i], data[i + 1], data[i + 2], palette);
        data[i] = nr;
        data[i + 1] = ng;
        data[i + 2] = nb;
        indices[pixelIndex] = nearestColorIndex(nr, ng, nb, palette);
      }

      smallCtx.putImageData(imageData, 0, 0);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(small, 0, 0, width, height);

      runtime.baseImageData = ctx.getImageData(0, 0, width, height);
      runtime.gridData = {
        width: gridW,
        height: gridH,
        pixelSize: state.pixelSize,
        palette: state.paletteKey,
        colors: palette,
        indices,
      };

      setLoading(false);
      syncPreviewState();
      renderStatus();
      resetTyping();
      syncFxLoop();
    });
  });
}

function restoreBaseImage() {
  if (!runtime.baseImageData) return;
  const canvas = runtime.refs.previewCanvas;
  const ctx = canvas.getContext('2d');
  ctx.putImageData(runtime.baseImageData, 0, 0);
}

function applyEffectsFrame(frameIndex = state.frameTick) {
  if (!runtime.baseImageData || !runtime.refs.previewCanvas) return;

  const canvas = runtime.refs.previewCanvas;
  const ctx = canvas.getContext('2d');
  ctx.putImageData(runtime.baseImageData, 0, 0);

  const palette = runtime.gridData?.colors;

  if (state.effects.crt) applyCrt(ctx, canvas.width, canvas.height);
  if (state.effects.paletteCycle && palette)
    applyPaletteCycle(ctx, canvas.width, canvas.height, palette, frameIndex);
  if (state.effects.ghost) applyGhost(ctx, canvas.width, canvas.height, frameIndex);
  if (state.effects.ditherFade) applyDitherFade(ctx, canvas.width, canvas.height, frameIndex);
  if (state.effects.glitch) applyGlitch(ctx, canvas.width, canvas.height, state.pixelSize);
}

function stopFxLoop() {
  if (!runtime.fxTimer) return;
  clearInterval(runtime.fxTimer);
  runtime.fxTimer = null;
}

function syncFxLoop() {
  stopFxLoop();

  if (!hasActiveFx()) {
    restoreBaseImage();
    return;
  }

  state.frameTick = 0;
  runtime.fxTimer = setInterval(() => {
    state.frameTick += 1;
    applyEffectsFrame(state.frameTick);
  }, 120);
}

function renderWindowFrame(ctx, x, y, width, height, raised = true) {
  const light = raised ? '#dfdfdf' : '#000';
  const dark = raised ? '#000' : '#dfdfdf';
  const midLight = raised ? '#fff' : '#808080';
  const midDark = raised ? '#808080' : '#fff';

  ctx.fillStyle = light;
  ctx.fillRect(x, y, width, 1);
  ctx.fillRect(x, y, 1, height);

  ctx.fillStyle = dark;
  ctx.fillRect(x, y + height - 1, width, 1);
  ctx.fillRect(x + width - 1, y, 1, height);

  ctx.fillStyle = midLight;
  ctx.fillRect(x + 1, y + 1, width - 2, 1);
  ctx.fillRect(x + 1, y + 1, 1, height - 2);

  ctx.fillStyle = midDark;
  ctx.fillRect(x + 1, y + height - 2, width - 2, 1);
  ctx.fillRect(x + width - 2, y + 1, 1, height - 2);
}

function wrapTextCanvas(ctx, text, maxWidth) {
  const lines = [];
  let current = '';

  for (const ch of text) {
    if (ch === '\n') {
      lines.push(current);
      current = '';
      continue;
    }

    const candidate = current + ch;
    if (ctx.measureText(candidate).width > maxWidth && current) {
      lines.push(current);
      current = ch;
    } else {
      current = candidate;
    }
  }

  if (current || lines.length === 0) lines.push(current);
  return lines;
}

function drawOverlayOnCanvas(ctx, opts) {
  const {
    x,
    y,
    width,
    height,
    typedChars,
    showBlink,
    scale,
    dialogStyle,
    dialogName,
    dialogText,
  } = opts;

  if (!state.dialogEnabled || !dialogText) return;

  const visibleText = dialogText.slice(0, typedChars);

  if (dialogStyle === 'win95') {
    const fontSize = Math.max(10, Math.round(12 * scale));
    const titleSize = Math.max(9, Math.round(11 * scale));
    const icon = Math.round(32 * scale);
    const padding = Math.round(12 * scale);
    const btnW = Math.round(75 * scale);
    const btnH = Math.round(20 * scale);
    const border = Math.max(1, Math.round(2 * scale));
    const titleH = Math.round(18 * scale);

    ctx.font = `${fontSize}px ${FONT_FAMILY}`;
    const maxTextWidth = Math.round(width * 0.5) - padding * 2 - icon - padding;
    const lines = wrapTextCanvas(ctx, visibleText, maxTextWidth);
    const lineH = Math.round(fontSize * 1.6);
    const textH = Math.max(icon, lines.length * lineH);
    const winW = Math.round(width * 0.5);
    const winH = border * 2 + titleH + padding + textH + padding + btnH + padding;

    const ox = x + Math.round((width - winW) / 2);
    const oy = y + Math.round((height * state.dialogPosition) / 100) - winH;

    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(ox, oy, winW, winH);
    renderWindowFrame(ctx, ox, oy, winW, winH, true);

    const grad = ctx.createLinearGradient(ox + border, 0, ox + winW - border, 0);
    grad.addColorStop(0, '#000080');
    grad.addColorStop(1, '#1084d0');
    ctx.fillStyle = grad;
    ctx.fillRect(ox + border, oy + border, winW - border * 2, titleH);

    ctx.fillStyle = '#fff';
    ctx.font = `bold ${titleSize}px ${FONT_FAMILY}`;
    ctx.textBaseline = 'middle';
    ctx.fillText(dialogName || 'System Failure', ox + border + Math.round(4 * scale), oy + border + titleH / 2);

    const closeSize = Math.round(14 * scale);
    const closeX = ox + winW - closeSize - Math.round(4 * scale);
    const closeY = oy + border + Math.round((titleH - closeSize) / 2);
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(closeX, closeY, closeSize, closeSize);
    renderWindowFrame(ctx, closeX, closeY, closeSize, closeSize, true);
    ctx.fillStyle = '#000';
    ctx.font = `${Math.round(10 * scale)}px ${FONT_FAMILY}`;
    ctx.textAlign = 'center';
    ctx.fillText('×', closeX + closeSize / 2, closeY + closeSize / 2);
    ctx.textAlign = 'start';

    const iconX = ox + border + padding;
    const iconY = oy + border + titleH + padding + Math.max(0, (textH - icon) / 2);
    ctx.beginPath();
    ctx.arc(iconX + icon / 2, iconY + icon / 2, icon / 2 - 1, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = Math.max(1, Math.round(scale));
    ctx.stroke();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = Math.max(2, Math.round(3 * scale));
    const cross = Math.round(icon * 0.28);
    ctx.beginPath();
    ctx.moveTo(iconX + cross, iconY + cross);
    ctx.lineTo(iconX + icon - cross, iconY + icon - cross);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(iconX + icon - cross, iconY + cross);
    ctx.lineTo(iconX + cross, iconY + icon - cross);
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.font = `${fontSize}px ${FONT_FAMILY}`;
    ctx.textBaseline = 'middle';
    const textX = iconX + icon + padding;
    const textY = oy + border + titleH + padding;
    lines.forEach((line, i) => {
      ctx.fillText(line, textX, textY + lineH * i + lineH / 2);
    });

    const okX = ox + Math.round((winW - btnW) / 2);
    const okY = oy + winH - padding - btnH;
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(okX, okY, btnW, btnH);
    renderWindowFrame(ctx, okX, okY, btnW, btnH, true);
    ctx.fillStyle = '#000';
    ctx.font = `${Math.max(9, Math.round(11 * scale))}px ${FONT_FAMILY}`;
    ctx.textAlign = 'center';
    ctx.fillText('OK', okX + btnW / 2, okY + btnH / 2);
    ctx.textAlign = 'start';

    return;
  }

  if (dialogStyle === 'terminal') {
    const fontSize = Math.max(10, Math.round(13 * scale));
    const padX = Math.round(14 * scale);
    const padY = Math.round(10 * scale);
    const margin = Math.round(8 * scale);
    const panelX = x + margin;
    const panelW = width - margin * 2;

    ctx.font = `${fontSize}px 'Courier New', monospace`;
    const prefix = '> ';
    const prefixWidth = ctx.measureText(prefix).width;
    const maxTextWidth = panelW - padX * 2 - prefixWidth;

    const lines = wrapTextCanvas(ctx, visibleText, maxTextWidth);
    const lineH = Math.round(fontSize * 1.8);
    const headerH = dialogName ? lineH : 0;
    const boxH = headerH + lineH * Math.max(1, lines.length) + padY * 2;
    const panelY = y + Math.round((height * state.dialogPosition) / 100) - boxH;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(panelX, panelY, panelW, boxH);
    ctx.strokeStyle = '#33ff33';
    ctx.lineWidth = Math.max(1, Math.round(scale));
    ctx.strokeRect(panelX, panelY, panelW, boxH);

    ctx.fillStyle = '#33ff33';
    ctx.textBaseline = 'middle';

    let cursorY = panelY + padY + lineH / 2;
    if (dialogName) {
      ctx.globalAlpha = 0.7;
      ctx.font = `${Math.max(9, Math.round(11 * scale))}px 'Courier New', monospace`;
      ctx.fillText(`${dialogName}@pixel:~$`, panelX + padX, cursorY);
      ctx.globalAlpha = 1;
      cursorY += lineH;
    }

    ctx.font = `${fontSize}px 'Courier New', monospace`;
    lines.forEach((line, i) => {
      if (i === 0) {
        ctx.fillText(prefix + line, panelX + padX, cursorY + i * lineH);
      } else {
        ctx.fillText(line, panelX + padX, cursorY + i * lineH);
      }
    });

    if (showBlink) {
      const last = lines[lines.length - 1] || '';
      const bx =
        panelX +
        padX +
        (lines.length === 1 ? prefixWidth : 0) +
        ctx.measureText(last).width +
        Math.round(2 * scale);
      const by = cursorY + (lines.length - 1) * lineH - fontSize / 2;
      ctx.fillRect(bx, by, Math.round(7 * scale), fontSize);
    }

    return;
  }

  const theme = DIALOG_THEMES[dialogStyle];
  if (!theme) return;

  const scalePx = Math.max(1, Math.round(FRAME_SCALE * scale));
  const frameSlice = theme.frameSliceRaw * scalePx;
  const margin = Math.round(8 * scale);
  const padTextY = Math.round(10 * scale);
  const padTextX = Math.round(14 * scale);
  const boxX = x + margin;
  const boxW = width - margin * 2;

  const fontSize = Math.max(10, Math.round(14 * scale));
  ctx.font = `bold ${fontSize}px ${FONT_FAMILY}`;
  const maxTextWidth = boxW - frameSlice * 2 - padTextX * 2;
  const lines = wrapTextCanvas(ctx, visibleText, maxTextWidth);
  const lineH = Math.round(fontSize * 1.8);
  const textH = lineH * Math.max(1, lines.length);
  const boxH = textH + frameSlice * 2 + padTextY * 2;
  const boxY = y + Math.round((height * state.dialogPosition) / 100) - boxH;

  drawPixelFrame(ctx, theme.framePixels, theme.frameSliceRaw, boxX, boxY, boxW, boxH, scalePx);
  ctx.fillStyle = theme.backgroundFlat || '#000';
  ctx.fillRect(boxX + frameSlice, boxY + frameSlice, boxW - frameSlice * 2, boxH - frameSlice * 2);

  if (dialogName) {
    const nameFont = Math.max(10, Math.round(12 * scale));
    ctx.font = `bold ${nameFont}px ${FONT_FAMILY}`;
    const namePaddingX = Math.round(10 * scale);
    const namePaddingY = Math.round(2 * scale);
    const nameW = ctx.measureText(dialogName).width + namePaddingX * 2 + frameSlice * 2;
    const nameH = Math.round(nameFont * 1.8) + namePaddingY * 2 + frameSlice * 2;
    const nameX = boxX + frameSlice + Math.round(12 * scale);
    const nameY = boxY + frameSlice - Math.round(4 * scale) - nameH;

    drawPixelFrame(
      ctx,
      theme.framePixels,
      theme.frameSliceRaw,
      nameX,
      nameY,
      nameW,
      nameH,
      scalePx,
    );
    ctx.fillStyle = theme.nameBg;
    ctx.fillRect(
      nameX + frameSlice,
      nameY + frameSlice,
      nameW - frameSlice * 2,
      nameH - frameSlice * 2,
    );

    ctx.fillStyle = theme.nameColor;
    ctx.textBaseline = 'middle';
    ctx.fillText(dialogName, nameX + frameSlice + namePaddingX, nameY + nameH / 2);
  }

  ctx.font = `bold ${fontSize}px ${FONT_FAMILY}`;
  ctx.fillStyle = theme.color;
  ctx.textBaseline = 'middle';
  const textX = boxX + frameSlice + padTextX;
  const textY = boxY + frameSlice + padTextY;

  lines.forEach((line, i) => {
    ctx.fillText(line, textX, textY + i * lineH + lineH / 2);
  });

  if (showBlink && typedChars > 0) {
    const last = lines[lines.length - 1] || '';
    const bx = textX + ctx.measureText(last).width + Math.round(6 * scale);
    const by = textY + (lines.length - 1) * lineH;

    if (typedChars >= dialogText.length) {
      ctx.font = `${fontSize}px ${FONT_FAMILY}`;
      ctx.fillText('▼', bx, by + lineH / 2);
    } else {
      ctx.fillRect(bx, by + Math.round(fontSize * 0.1), Math.round(8 * scale), fontSize);
    }
  }
}

function renderExportCanvas(
  typedChars = state.dialogText.length,
  showBlink = true,
  outCanvas,
  maxSize = 1200,
) {
  const preview = runtime.refs.previewCanvas;
  if (!preview || !preview.width || !preview.height) return null;

  const scale = Math.max(1, Math.ceil(maxSize / Math.max(preview.width, preview.height)));
  const imageW = preview.width * scale;
  const imageH = preview.height * scale;

  const padOuter = 2 * scale;
  const padInner = 8 * scale;
  const titleH = 18 * scale;

  const left = padOuter + padInner + 18 * scale + 8 * scale + 2 * scale;
  const top = padOuter + padInner + titleH + 8 * scale;

  const outW = imageW + left * 2;
  const outH = imageH + top + (padOuter + padInner + 18 * scale + 8 * scale + 2 * scale);

  const canvas = outCanvas || document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, outW, outH);

  ctx.fillStyle = '#c0c0c0';
  ctx.fillRect(0, 0, outW, outH);
  renderWindowFrame(ctx, padOuter, padOuter, outW - padOuter * 2, outH - padOuter * 2, true);

  const titleX = padOuter + padInner;
  const titleY = padOuter + padInner;
  const titleW = outW - (padOuter + padInner) * 2;

  const titleGrad = ctx.createLinearGradient(titleX, 0, titleX + titleW, 0);
  titleGrad.addColorStop(0, '#000080');
  titleGrad.addColorStop(1, '#1084d0');
  ctx.fillStyle = titleGrad;
  ctx.fillRect(titleX, titleY, titleW, titleH);

  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${11 * scale}px ${FONT_FAMILY}`;
  ctx.fillText("Sora's Pixel Converter", titleX + 4 * scale, titleY + titleH / 2);

  const btns = ['_', '□', '×'];
  let btnX = titleX + titleW - (16 * scale * 3 + 1 * scale * 2) - 2 * scale;
  const btnY = titleY + Math.round((titleH - 14 * scale) / 2);
  btns.forEach((ch) => {
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(btnX, btnY, 16 * scale, 14 * scale);
    renderWindowFrame(ctx, btnX, btnY, 16 * scale, 14 * scale, true);
    ctx.fillStyle = '#000';
    ctx.font = `${10 * scale}px ${FONT_FAMILY}`;
    ctx.textAlign = 'center';
    ctx.fillText(ch, btnX + 8 * scale, btnY + 7 * scale);
    ctx.textAlign = 'start';
    btnX += 16 * scale + 1 * scale;
  });

  const previewFrameX = padOuter + padInner + 8 * scale;
  const previewFrameY = padOuter + padInner + titleH + 8 * scale;
  const previewFrameW = outW - (padOuter + padInner + 8 * scale) * 2;
  const previewFrameH = outH - previewFrameY - (padOuter + padInner + 18 * scale + 8 * scale - 2 * scale);

  renderWindowFrame(ctx, previewFrameX, previewFrameY, previewFrameW, previewFrameH, false);

  const imageX = left;
  const imageY = top;
  ctx.fillStyle = '#000';
  ctx.fillRect(imageX, imageY, imageW, imageH);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(preview, 0, 0, imageW, imageH);

  drawOverlayOnCanvas(ctx, {
    x: imageX,
    y: imageY,
    width: imageW,
    height: imageH,
    typedChars,
    showBlink,
    scale,
    dialogStyle: state.dialogStyle,
    dialogName: state.dialogName,
    dialogText: state.dialogText,
  });

  return canvas;
}

async function savePng() {
  if (!runtime.refs.previewCanvas.width) return;

  await document.fonts.load("bold 14px 'DotGothic16'");
  const out = renderExportCanvas(state.dialogText.length, true);
  if (!out) return;

  if (state.isMobile && navigator.canShare) {
    try {
      const blob = await new Promise((resolve) => out.toBlob(resolve, 'image/png'));
      const file = new File([blob], 'pixel-art.png', { type: 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file] });
        return;
      }
    } catch (err) {
      // ignore share errors
    }
  }

  const blob = await new Promise((resolve) => out.toBlob(resolve, 'image/png'));
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'pixel-art.png';
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportJson() {
  if (!runtime.gridData) return;

  const payload = {
    version: 1,
    width: runtime.gridData.width,
    height: runtime.gridData.height,
    pixelSize: runtime.gridData.pixelSize,
    palette: runtime.gridData.palette,
    colors: runtime.gridData.colors,
    grid: Array.from(runtime.gridData.indices, (v) => v.toString(16)).join(''),
  };

  const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'pixel-art.json';
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data.version || !data.grid || !data.colors || !data.width || !data.height) return;

      const px = data.pixelSize || 3;
      const width = data.width * px;
      const height = data.height * px;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      for (let i = 0; i < data.grid.length; i += 1) {
        const colorIndex = parseInt(data.grid[i], 16);
        const rgb = data.colors[colorIndex];
        if (!rgb) continue;

        const x = (i % data.width) * px;
        const y = Math.floor(i / data.width) * px;
        ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        ctx.fillRect(x, y, px, px);
      }

      canvas.toBlob((blob) => {
        if (!blob) return;
        revokeImageUrl();
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          state.sourceImage = img;
          state.imageUrl = url;
          if (data.palette && PALETTES[data.palette]) state.paletteKey = data.palette;
          state.pixelSize = px;
          convertCurrentImage();
          renderControls();
        };
        img.src = url;
      }, 'image/png');
    } catch (err) {
      // ignore broken file
    }
  };
  reader.readAsText(file);
}

async function recordVideo() {
  if (!runtime.refs.previewCanvas.width || state.isRecording) return;

  const needsVideo = (state.dialogEnabled && state.dialogText) || hasActiveFx();
  if (!needsVideo) return;

  setRecording(true);
  stopFxLoop();

  let blob;
  let ext;

  try {
    await document.fonts.load("bold 14px 'DotGothic16'");

    const output = renderExportCanvas(0, false, document.createElement('canvas'));
    const stream = output.captureStream(10);
    const chunks = [];

    const mime = MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm';
    ext = mime === 'video/mp4' ? 'mp4' : 'webm';

    const recorder = new MediaRecorder(stream, {
      mimeType: mime,
      videoBitsPerSecond: 20_000_000,
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };

    const totalChars = state.dialogEnabled ? state.dialogText.length : 0;
    let charIndex = 0;
    let frame = 0;
    let tailFrames = 0;
    const minFrames = 25;
    const tailTarget = 13;

    recorder.start();

    await new Promise((resolve) => {
      const timer = setInterval(() => {
        frame += 1;

        if (hasActiveFx() && runtime.baseImageData) {
          applyEffectsFrame(frame);
        } else {
          restoreBaseImage();
        }

        if (totalChars > 0 && charIndex < totalChars) {
          charIndex += 1;
        } else {
          tailFrames += 1;
        }

        const blink = totalChars > 0 ? (charIndex >= totalChars ? frame % 20 < 10 : frame % 10 < 5) : false;
        renderExportCanvas(charIndex, blink, output);

        if ((totalChars === 0 || tailFrames >= tailTarget) && frame >= minFrames) {
          clearInterval(timer);
          recorder.stop();
        }
      }, 120);

      recorder.onstop = () => resolve();
    });

    blob = new Blob(chunks, { type: mime });
  } catch (err) {
    console.error('Video recording failed:', err);
  }

  setRecording(false);
  syncFxLoop();

  if (!blob) return;

  if (state.isMobile && navigator.canShare) {
    try {
      const file = new File([blob], `pixel-art.${ext}`, { type: blob.type });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file] });
        return;
      }
    } catch (err) {
      if (err.name === 'AbortError') return;
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = `pixel-art.${ext}`;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function createEditorState() {
  const grid = runtime.gridData;
  if (!grid) return null;

  return {
    width: grid.width,
    height: grid.height,
    colors: grid.colors,
    indices: new Uint8Array(grid.indices),
    tool: 'pen',
    colorIndex: 1,
    zoomIndex: 3,
    scale: 8,
    panX: 0,
    panY: 0,
    isDrawing: false,
    last: null,
    isPanning: false,
    panStart: null,
    pinch: null,
    showHelp: false,
    undoStack: [],
    redoStack: [],
    maxHistory: 50,
  };
}

function clampEditorZoomIndex(index) {
  return Math.max(0, Math.min(EDITOR_ZOOM_LEVELS.length - 1, index));
}

function setEditorZoomIndex(editor, nextIndex, anchorX, anchorY) {
  const currentIndex = clampEditorZoomIndex(editor.zoomIndex);
  const targetIndex = clampEditorZoomIndex(nextIndex);
  if (currentIndex === targetIndex) return false;

  const prevScale = EDITOR_ZOOM_LEVELS[currentIndex];
  const nextScale = EDITOR_ZOOM_LEVELS[targetIndex];

  const relX = (anchorX - editor.panX) / prevScale;
  const relY = (anchorY - editor.panY) / prevScale;

  editor.zoomIndex = targetIndex;
  editor.scale = nextScale;
  editor.panX = anchorX - relX * nextScale;
  editor.panY = anchorY - relY * nextScale;
  return true;
}

function pushEditorUndo(editor) {
  editor.undoStack.push(new Uint8Array(editor.indices));
  if (editor.undoStack.length > editor.maxHistory) editor.undoStack.shift();
  editor.redoStack = [];
}

function editorUndo() {
  const editor = runtime.editor;
  if (!editor || editor.undoStack.length === 0) return;
  editor.redoStack.push(new Uint8Array(editor.indices));
  editor.indices = editor.undoStack.pop();
  renderEditorCanvas();
  renderEditorControls();
}

function editorRedo() {
  const editor = runtime.editor;
  if (!editor || editor.redoStack.length === 0) return;
  editor.undoStack.push(new Uint8Array(editor.indices));
  editor.indices = editor.redoStack.pop();
  renderEditorCanvas();
  renderEditorControls();
}

function setEditorPixel(editor, x, y) {
  if (x < 0 || x >= editor.width || y < 0 || y >= editor.height) return false;
  const idx = y * editor.width + x;
  const value = editor.tool === 'eraser' ? 0 : editor.colorIndex;
  if (editor.indices[idx] === value) return false;
  editor.indices[idx] = value;
  return true;
}

function drawEditorLine(editor, x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  let err = dx - dy;
  let x = x1;
  let y = y1;

  while (true) {
    setEditorPixel(editor, x, y);
    if (x === x2 && y === y2) break;
    const e2 = err * 2;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
}

function floodFillEditor(editor, sx, sy) {
  if (sx < 0 || sx >= editor.width || sy < 0 || sy >= editor.height) return;

  const target = editor.indices[sy * editor.width + sx];
  const replacement = editor.tool === 'eraser' ? 0 : editor.colorIndex;
  if (target === replacement) return;

  const stack = [[sx, sy]];
  const visited = new Uint8Array(editor.width * editor.height);

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    const idx = y * editor.width + x;
    if (visited[idx]) continue;
    visited[idx] = 1;

    if (editor.indices[idx] !== target) continue;
    editor.indices[idx] = replacement;

    if (x > 0) stack.push([x - 1, y]);
    if (x < editor.width - 1) stack.push([x + 1, y]);
    if (y > 0) stack.push([x, y - 1]);
    if (y < editor.height - 1) stack.push([x, y + 1]);
  }
}

function editorCoordFromPointer(clientX, clientY) {
  const editor = runtime.editor;
  const canvas = runtime.refs.editorCanvas;
  if (!editor || !canvas) return null;

  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const gx = Math.floor((x - editor.panX) / editor.scale);
  const gy = Math.floor((y - editor.panY) / editor.scale);

  return { x: gx, y: gy };
}

function fitEditorScale(editor) {
  const wrap = runtime.refs.editorCanvasWrap;
  const canvas = runtime.refs.editorCanvas;

  const rect = wrap.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  const fit = Math.min(rect.width / editor.width, rect.height / editor.height);
  let pickIndex = 0;
  EDITOR_ZOOM_LEVELS.forEach((zoom, index) => {
    if (zoom <= fit) pickIndex = index;
  });

  editor.zoomIndex = pickIndex;
  editor.scale = EDITOR_ZOOM_LEVELS[pickIndex];
  editor.panX = (rect.width - editor.width * editor.scale) / 2;
  editor.panY = (rect.height - editor.height * editor.scale) / 2;
}

function renderEditorCanvas() {
  const editor = runtime.editor;
  if (!editor) return;

  const canvas = runtime.refs.editorCanvas;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < editor.height; y += 1) {
    for (let x = 0; x < editor.width; x += 1) {
      const px = editor.panX + x * editor.scale;
      const py = editor.panY + y * editor.scale;

      if (px + editor.scale < 0 || py + editor.scale < 0 || px > canvas.width || py > canvas.height) {
        continue;
      }

      ctx.fillStyle = (x + y) % 2 === 0 ? '#c0c0c0' : '#a0a0a0';
      ctx.fillRect(px, py, editor.scale, editor.scale);

      const index = editor.indices[y * editor.width + x];
      const color = editor.colors[index];
      if (!color) continue;
      ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      ctx.fillRect(px, py, editor.scale, editor.scale);
    }
  }

  if (editor.scale >= 4) {
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();

    for (let x = 0; x <= editor.width; x += 1) {
      const px = Math.round(editor.panX + x * editor.scale) + 0.5;
      ctx.moveTo(px, editor.panY);
      ctx.lineTo(px, editor.panY + editor.height * editor.scale);
    }

    for (let y = 0; y <= editor.height; y += 1) {
      const py = Math.round(editor.panY + y * editor.scale) + 0.5;
      ctx.moveTo(editor.panX, py);
      ctx.lineTo(editor.panX + editor.width * editor.scale, py);
    }

    ctx.stroke();
  }

  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;
  ctx.strokeRect(
    Math.round(editor.panX) - 0.5,
    Math.round(editor.panY) - 0.5,
    editor.width * editor.scale + 1,
    editor.height * editor.scale + 1,
  );
}

function renderEditorControls() {
  const editor = runtime.editor;
  if (!editor) return;

  const dict = t();

  runtime.refs.editorTools.innerHTML = '';
  [
    ['pen', dict.pen],
    ['eraser', dict.eraser],
    ['fill', dict.fill],
  ].forEach(([tool, label]) => {
    const btn = document.createElement('button');
    btn.className = `btn btn-small ${editor.tool === tool ? 'active' : ''}`;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      editor.tool = tool;
      playClick();
      renderEditorControls();
    });
    runtime.refs.editorTools.appendChild(btn);
  });

  runtime.refs.editorPalette.innerHTML = '';
  editor.colors.forEach((rgb, idx) => {
    const btn = document.createElement('button');
    btn.className = `editor-color-btn ${editor.colorIndex === idx ? 'active' : ''}`;
    btn.style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    btn.setAttribute('aria-label', `color-${idx}`);
    btn.addEventListener('click', () => {
      editor.colorIndex = idx;
      editor.tool = 'pen';
      playClick();
      renderEditorControls();
    });
    runtime.refs.editorPalette.appendChild(btn);
  });

  runtime.refs.editorUndo.disabled = editor.undoStack.length === 0;
  runtime.refs.editorRedo.disabled = editor.redoStack.length === 0;
  runtime.refs.editorZoomReset.textContent = `x${editor.scale}`;
  runtime.refs.editorHelpPop.textContent = state.isMobile
    ? dict.editorHelpMobile
    : dict.editorHelpPc;
  runtime.refs.editorHelpPop.classList.toggle('hidden', !editor.showHelp);
  runtime.refs.editorHelpBtn.classList.toggle('active', !!editor.showHelp);
}

function openEditor() {
  if (!runtime.gridData) return;

  runtime.editor = createEditorState();
  fitEditorScale(runtime.editor);
  runtime.editorSpacePan = false;
  state.isEditorOpen = true;
  runtime.refs.editorModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  renderEditorControls();
  renderEditorCanvas();
  playClick();
}

function closeEditor() {
  state.isEditorOpen = false;
  runtime.refs.editorModal.classList.remove('open');
  document.body.style.overflow = '';
  runtime.editor = null;
  runtime.editorSpacePan = false;
  playClick();
}

function saveEditor() {
  const editor = runtime.editor;
  if (!editor || !runtime.gridData) return;

  runtime.gridData = {
    ...runtime.gridData,
    indices: new Uint8Array(editor.indices),
  };

  const canvas = runtime.refs.previewCanvas;
  const ctx = canvas.getContext('2d');
  const px = runtime.gridData.pixelSize;

  canvas.width = runtime.gridData.width * px;
  canvas.height = runtime.gridData.height * px;
  ctx.imageSmoothingEnabled = false;

  for (let y = 0; y < runtime.gridData.height; y += 1) {
    for (let x = 0; x < runtime.gridData.width; x += 1) {
      const idx = runtime.gridData.indices[y * runtime.gridData.width + x];
      const color = runtime.gridData.colors[idx];
      if (!color) continue;
      ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      ctx.fillRect(x * px, y * px, px, px);
    }
  }

  runtime.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL('image/png');
  const img = new Image();
  img.onload = () => {
    state.sourceImage = img;
  };
  img.src = dataUrl;

  closeEditor();
  syncFxLoop();
}

function onEditorPointerDown(event) {
  const editor = runtime.editor;
  if (!editor) return;

  const isPan = event.button === 1 || (event.button === 0 && runtime.editorSpacePan);
  if (isPan) {
    event.preventDefault();
    editor.isPanning = true;
    editor.panStart = {
      x: event.clientX,
      y: event.clientY,
      panX: editor.panX,
      panY: editor.panY,
    };
    return;
  }

  if (event.button === 2) {
    const p = editorCoordFromPointer(event.clientX, event.clientY);
    if (!p) return;
    if (p.x < 0 || p.x >= editor.width || p.y < 0 || p.y >= editor.height) return;
    const idx = editor.indices[p.y * editor.width + p.x];
    editor.colorIndex = idx;
    editor.tool = 'pen';
    renderEditorControls();
    playClick();
    return;
  }

  if (event.button !== 0) return;
  event.currentTarget.setPointerCapture(event.pointerId);

  const p = editorCoordFromPointer(event.clientX, event.clientY);
  if (!p) return;

  if (editor.tool === 'fill') {
    pushEditorUndo(editor);
    floodFillEditor(editor, p.x, p.y);
    renderEditorCanvas();
    renderEditorControls();
    playClick();
    return;
  }

  pushEditorUndo(editor);
  editor.isDrawing = true;
  editor.last = p;
  setEditorPixel(editor, p.x, p.y);
  renderEditorCanvas();
}

function onEditorPointerMove(event) {
  const editor = runtime.editor;
  if (!editor) return;

  if (editor.isPanning && editor.panStart) {
    const dx = event.clientX - editor.panStart.x;
    const dy = event.clientY - editor.panStart.y;
    editor.panX = editor.panStart.panX + dx;
    editor.panY = editor.panStart.panY + dy;
    renderEditorCanvas();
    return;
  }

  if (!editor.isDrawing) return;

  const p = editorCoordFromPointer(event.clientX, event.clientY);
  if (!p) return;

  if (editor.last && (editor.last.x !== p.x || editor.last.y !== p.y)) {
    drawEditorLine(editor, editor.last.x, editor.last.y, p.x, p.y);
    editor.last = p;
    renderEditorCanvas();
  }
}

function onEditorPointerUp() {
  const editor = runtime.editor;
  if (!editor) return;
  editor.isDrawing = false;
  editor.isPanning = false;
  editor.panStart = null;
  editor.last = null;
  renderEditorControls();
}

function onEditorWheel(event) {
  const editor = runtime.editor;
  if (!editor) return;

  event.preventDefault();

  const rect = runtime.refs.editorCanvas.getBoundingClientRect();
  const mx = event.clientX - rect.left;
  const my = event.clientY - rect.top;
  const delta = event.deltaY < 0 ? 1 : -1;
  const changed = setEditorZoomIndex(editor, editor.zoomIndex + delta, mx, my);
  if (!changed) return;

  renderEditorCanvas();
  renderEditorControls();
}

function onEditorTouchStart(event) {
  const editor = runtime.editor;
  if (!editor) return;
  if (event.touches.length !== 2) return;

  event.preventDefault();
  editor.isDrawing = false;
  editor.last = null;
  editor.pinch = {
    dist: Math.hypot(
      event.touches[1].clientX - event.touches[0].clientX,
      event.touches[1].clientY - event.touches[0].clientY,
    ),
    midX: (event.touches[0].clientX + event.touches[1].clientX) / 2,
    midY: (event.touches[0].clientY + event.touches[1].clientY) / 2,
    startPanX: editor.panX,
    startPanY: editor.panY,
    startZoomIndex: editor.zoomIndex,
  };
}

function onEditorTouchMove(event) {
  const editor = runtime.editor;
  if (!editor || !editor.pinch || event.touches.length !== 2) return;

  event.preventDefault();
  const t0 = event.touches[0];
  const t1 = event.touches[1];
  const currentDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
  const currentMidX = (t0.clientX + t1.clientX) / 2;
  const currentMidY = (t0.clientY + t1.clientY) / 2;

  const startScale = EDITOR_ZOOM_LEVELS[editor.pinch.startZoomIndex];
  const targetScale = startScale * (currentDist / editor.pinch.dist);
  let nextIndex = 0;
  for (let i = 0; i < EDITOR_ZOOM_LEVELS.length; i += 1) {
    if (EDITOR_ZOOM_LEVELS[i] <= targetScale) nextIndex = i;
  }
  nextIndex = clampEditorZoomIndex(nextIndex);

  const rect = runtime.refs.editorCanvas.getBoundingClientRect();
  const startMidXLocal = editor.pinch.midX - rect.left;
  const startMidYLocal = editor.pinch.midY - rect.top;
  const currentMidXLocal = currentMidX - rect.left;
  const currentMidYLocal = currentMidY - rect.top;
  const nextScale = EDITOR_ZOOM_LEVELS[nextIndex];

  editor.zoomIndex = nextIndex;
  editor.scale = nextScale;
  editor.panX =
    currentMidXLocal -
    ((startMidXLocal - editor.pinch.startPanX) * nextScale) / startScale;
  editor.panY =
    currentMidYLocal -
    ((startMidYLocal - editor.pinch.startPanY) * nextScale) / startScale;

  renderEditorCanvas();
  renderEditorControls();
}

function onEditorTouchEnd() {
  const editor = runtime.editor;
  if (!editor) return;
  editor.pinch = null;
}

function bindEvents() {
  const r = runtime.refs;

  r.previewDrop.addEventListener('click', () => {
    r.imageInput.click();
    playClick();
  });

  r.previewDrop.addEventListener('dragover', (event) => {
    event.preventDefault();
    state.dragOver = true;
    r.previewDrop.classList.add('dragover');
  });

  r.previewDrop.addEventListener('dragleave', () => {
    state.dragOver = false;
    r.previewDrop.classList.remove('dragover');
  });

  r.previewDrop.addEventListener('drop', (event) => {
    event.preventDefault();
    state.dragOver = false;
    r.previewDrop.classList.remove('dragover');
    loadImageFile(event.dataTransfer.files[0]);
    triggerGhost('drop');
  });

  r.imageInput.addEventListener('change', (event) => {
    loadImageFile(event.target.files[0]);
    event.target.value = '';
    triggerGhost('drop');
  });

  r.jsonInput.addEventListener('change', (event) => {
    importJson(event.target.files[0]);
    event.target.value = '';
  });

  window.addEventListener('paste', (event) => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (!item.type.startsWith('image/')) continue;
      event.preventDefault();
      loadImageFile(item.getAsFile());
      triggerGhost('drop');
      return;
    }
  });

  r.dialogEnabled.addEventListener('change', (event) => {
    state.dialogEnabled = event.target.checked;
    playToggle(state.dialogEnabled);

    if (state.dialogEnabled) {
      triggerGhost('dialog');
      resetTyping();
    } else {
      if (runtime.typingTimer) {
        clearInterval(runtime.typingTimer);
        runtime.typingTimer = null;
      }
      state.typedChars = 0;
    }

    renderControls();
    renderDialogOverlay();
    syncPreviewState();
  });

  r.dialogName.addEventListener('input', (event) => {
    state.dialogName = event.target.value;
    renderDialogOverlay();
  });

  r.dialogText.addEventListener('input', (event) => {
    state.dialogText = event.target.value;
    resetTyping();
    syncPreviewState();
  });

  r.dialogPosition.addEventListener('input', (event) => {
    state.dialogPosition = Number(event.target.value);
    renderControls();
    renderDialogOverlay();
  });

  r.downloadBtn.addEventListener('click', async () => {
    await savePng();
    playClick();
    triggerGhost('download');
  });

  r.videoBtn.addEventListener('click', async () => {
    if (state.isRecording) return;
    playClick();
    triggerGhost('download');
    await recordVideo();
  });

  r.editBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    openEditor();
  });

  r.taskAbout.addEventListener('click', () => {
    if (state.isAboutOpen) {
      closeAbout();
    } else {
      openAbout();
    }
  });

  r.aboutClose.addEventListener('click', closeAbout);
  r.aboutBackdrop.addEventListener('click', closeAbout);

  r.taskGhost.addEventListener('click', () => {
    state.ghostEnabled = !state.ghostEnabled;
    playToggle(state.ghostEnabled);
    renderGhost();
    r.taskGhost.classList.toggle('active', state.ghostEnabled);
  });

  r.ghostImage.addEventListener('click', () => {
    triggerGhost('click');
    playClick();
  });

  r.taskLang.addEventListener('click', () => {
    if (state.isLangOpen) {
      closeLangMenu();
    } else {
      openLangMenu();
      playClick();
    }
  });

  document.addEventListener('mousedown', (event) => {
    if (!state.isLangOpen) return;
    if (!r.langWrap.contains(event.target)) {
      closeLangMenu();
    }
  });

  r.soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    renderClock();
  });

  r.soundToggle.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    state.soundEnabled = !state.soundEnabled;
    renderClock();
  });

  r.iconReadme.addEventListener('dblclick', () => openAbout());
  r.iconHome.addEventListener('dblclick', () => window.open('https://ameniwa.com', '_blank', 'noopener,noreferrer'));
  r.iconX.addEventListener('dblclick', () => window.open('https://x.com/ameniwa_', '_blank', 'noopener,noreferrer'));

  r.taskStart.addEventListener('click', playClick);

  r.mobileTabPixel.addEventListener('click', () => {
    state.mobileTab = 'pixel';
    playClick();
    renderControls();
  });
  r.mobileTabPalette.addEventListener('click', () => {
    state.mobileTab = 'palette';
    playClick();
    renderControls();
  });
  r.mobileTabDialog.addEventListener('click', () => {
    state.mobileTab = 'dialog';
    playClick();
    renderControls();
  });

  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    r.jsonExportBtn.classList.remove('hidden');
    r.jsonImportBtn.classList.remove('hidden');

    r.jsonExportBtn.addEventListener('click', () => {
      exportJson();
      playClick();
    });

    r.jsonImportBtn.addEventListener('click', () => {
      r.jsonInput.click();
      playClick();
    });
  }

  window.addEventListener('resize', () => {
    const prevMobile = state.isMobile;
    state.isMobile = window.innerWidth < 768;
    if (prevMobile !== state.isMobile) {
      renderI18n();
    }
    if (runtime.editor) {
      fitEditorScale(runtime.editor);
      renderEditorCanvas();
      renderEditorControls();
    }
  });

  r.editorCloseBtn.addEventListener('click', closeEditor);
  r.editorBackdrop.addEventListener('click', closeEditor);
  r.editorCancel.addEventListener('click', closeEditor);
  r.editorSave.addEventListener('click', saveEditor);

  r.editorUndo.addEventListener('click', editorUndo);
  r.editorRedo.addEventListener('click', editorRedo);

  r.editorZoomIn.addEventListener('click', () => {
    const editor = runtime.editor;
    if (!editor) return;
    const rect = r.editorCanvasWrap.getBoundingClientRect();
    const changed = setEditorZoomIndex(editor, editor.zoomIndex + 1, rect.width / 2, rect.height / 2);
    if (!changed) return;
    renderEditorCanvas();
    renderEditorControls();
  });

  r.editorZoomOut.addEventListener('click', () => {
    const editor = runtime.editor;
    if (!editor) return;
    const rect = r.editorCanvasWrap.getBoundingClientRect();
    const changed = setEditorZoomIndex(editor, editor.zoomIndex - 1, rect.width / 2, rect.height / 2);
    if (!changed) return;
    renderEditorCanvas();
    renderEditorControls();
  });

  r.editorZoomReset.addEventListener('click', () => {
    if (!runtime.editor) return;
    fitEditorScale(runtime.editor);
    renderEditorCanvas();
    renderEditorControls();
  });

  r.editorHelpBtn.addEventListener('click', () => {
    if (!runtime.editor) return;
    runtime.editor.showHelp = !runtime.editor.showHelp;
    playClick();
    renderEditorControls();
  });

  r.editorCanvas.addEventListener('contextmenu', (event) => event.preventDefault());
  r.editorCanvas.addEventListener('pointerdown', onEditorPointerDown);
  r.editorCanvas.addEventListener('pointermove', onEditorPointerMove);
  r.editorCanvas.addEventListener('pointerup', onEditorPointerUp);
  r.editorCanvas.addEventListener('pointerleave', onEditorPointerUp);
  r.editorCanvas.addEventListener('wheel', onEditorWheel, { passive: false });
  r.editorCanvas.addEventListener('touchstart', onEditorTouchStart, { passive: false });
  r.editorCanvas.addEventListener('touchmove', onEditorTouchMove, { passive: false });
  r.editorCanvas.addEventListener('touchend', onEditorTouchEnd);
  r.editorCanvas.addEventListener('touchcancel', onEditorTouchEnd);

  window.addEventListener('keydown', (event) => {
    if (!state.isEditorOpen || !runtime.editor) return;

    if (event.key === ' ') {
      event.preventDefault();
      runtime.editorSpacePan = true;
      return;
    }

    if (event.key === 'Escape') {
      closeEditor();
      return;
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
      event.preventDefault();
      editorUndo();
      return;
    }

    if (
      (event.ctrlKey || event.metaKey) &&
      (event.key === 'y' || (event.key === 'z' && event.shiftKey))
    ) {
      event.preventDefault();
      editorRedo();
    }
  });

  window.addEventListener('keyup', (event) => {
    if (!state.isEditorOpen || !runtime.editor) return;
    if (event.key === ' ') runtime.editorSpacePan = false;
  });
}

function syncUiState() {
  renderAll();
  syncPreviewState();
}

function init() {
  buildBaseLayout();
  bindEvents();

  state.now = new Date();
  renderAll();
  syncPreviewState();
  renderDialogOverlay();

  runtime.clockTimer = setInterval(() => {
    state.now = new Date();
    renderClock();
  }, 60_000);

  startGhostIdle();
}

init();
