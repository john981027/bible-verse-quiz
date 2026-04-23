const bibleData = [
  {
    id: 1,
    lessonLabel: "1과",
    title: "무엇을 따라 살아야 하나요?",
    summary: "하나님 나라의 백성은 성경의 가르침을 따라 생각하고 행동하며 살아요",
    reference: "히브리서 11장 3절",
    verse:
      "믿음으로 모든 세계가 하나님의 말씀으로 지어진 줄을 우리가 아나니 보이는 것은 나타난 것으로 말미암아 된 것이 아니니라",
  },
  {
    id: 2,
    lessonLabel: "2과",
    title: "이 세상은 누구의 것일까요?",
    summary: "하나님 나라의 백성은 이 세상 전부를 하나님의 것으로 확신하며 살아요",
    reference: "시편 24편 1절",
    verse: "땅과 거기에 충만한 것과 세계와 그 가운데에 사는 자들은 다 여호와의 것이로다",
  },
  {
    id: 3,
    lessonLabel: "3과",
    title: "이 세상은 선한가요? 악한가요?",
    summary: "이세상은 하나님과 멀어져 악한 죄의 방향으로 향하고 있어요",
    reference: "이사야 59장 2절",
    verse:
      "오직 너희 죄악이 너희와 너희 하나님 사이를 갈라 놓았고 너희 죄가 그의 얼굴을 가리어서 너희에게서 듣지 않으시게 함이니라",
  },
  {
    id: 4,
    lessonLabel: "4과",
    title: "누가 이세상을 회복 하나요?",
    summary: "하나님은 예수그리스도를 통해 이세상을 회복하세요",
    reference: "골로새서 1장 20절",
    verse:
      "그의 십자가의 피로 화평을 이루사 만물 곧 땅에 있는 것들이나 하늘에 있는 것들이 그로 말미암아 자기와 화목하게 되기를 기뻐하심이라",
  },
  {
    id: 5,
    lessonLabel: "5과",
    title: "우리는 누구인가요?",
    summary: "우리는 하나님의 형상으로서 서로를 소중히 여겨요",
    reference: "창세기 1장 27절",
    verse: "하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고",
  },
  {
    id: 6,
    lessonLabel: "6과",
    title: "죄로 인해 우리는 어떻게 되었나요?",
    summary: "죄로인해 우리 안에 하나님의 형상이 깨어 졌어요",
    reference: "시편 53편 1절",
    verse:
      "어리석은 자는 그의 마음에 이르기를 하나님이 없다 하도다 그들은 부패하며 가증한 악을 행함이여 선을 행하는 자가 없도다",
  },
  {
    id: 7,
    lessonLabel: "7과",
    title: "우리에게 지금 가장 필요한 것은 무엇인가요?",
    summary: "우리는 하나님을 간절히 원하는 새사람이에요",
    reference: "고린도후서 5장 17절",
    verse:
      "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새 것이 되었도다",
  },
  {
    id: 8,
    lessonLabel: "8과",
    title: "세상 속에서 우리는 누구일까요?",
    summary: "우리는 세상에 속하지 않는 나그네로 하나님의 부르심을 따라 살아요",
    reference: "창세기 12장 4절",
    verse:
      "이에 아브람이 여호와의 말씀을 따라갔고 롯도 그와 함께 갔으며 아브람이 하란을 떠날 때에 칠십오 세였더라",
  },
  {
    id: 9,
    lessonLabel: "9과",
    title: "하나님이 세우신 가정은 어떤 가정일까요?",
    summary: "우리 가정은 하나님이 주신 복이에요",
    reference: "시편 127편 3절",
    verse: "보라 자식들은 여호와의 기업이요 태의 열매는 그의 상급이로다",
  },
  {
    id: 10,
    lessonLabel: "10과",
    title: "깨어진 가정은 누가 돌보시나요?",
    summary: "하나님은 관계가 깨어진 가정을 돌보세요",
    reference: "잠언 17장 1절",
    verse: "마른 떡 한 조각만 있고도 화목하는 것이 제육이 집에 가득하고도 다투는 것보다 나으니라",
  },
  {
    id: 11,
    lessonLabel: "11과",
    title: "가정은 누가 회복시켜 줄까요?",
    summary: "하나님은 우리 가정을 회복시켜 주세요",
    reference: "여호수아 24장 15절",
    verse:
      "만일 여호와를 섬기는 것이 너희에게 좋지 않게 보이거든 너희 조상들이 강 저쪽에서 섬기던 신들이든지 또는 너희가 거주하는 땅에 있는 아모리 족속의 신들이든지 너희가 섬길 자를 오늘 택하라 오직 나와 내 집은 여호와를 섬기겠노라 하니",
  },
  {
    id: 12,
    lessonLabel: "12과",
    title: "하나나님 나라 안에서 가족은 누구일까요?",
    summary: "하나님 나라 백성은 예수님안에서 모두가 한 가족이에요",
    reference: "로마서 12장 12~13절",
    verse: "12 소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며 13 성도들의 쓸 것을 공급하며 손 대접하기를 힘쓰라",
  },
  {
    id: 13,
    lessonLabel: "13과",
    title: "하나님 지혜를 어떻게 알고 배워야 할까요?",
    summary: "하나님이 만드신 모든 것을 배우면서 하나님을 발견해요",
    reference: "시편 19편 1절",
    verse: "하늘이 하나님의 영광을 선포하고 궁창이 그의 손으로 하신 일을 나타내는도다",
  },
  {
    id: 14,
    lessonLabel: "14과",
    title: "배운 것으로 왜 자랑하고 싶을까요?",
    summary: "나를 자랑하기 위해서 배우지 않아요",
    reference: "골로새서 2장 8절",
    verse:
      "누가 철학과 헛된 속임수로 너희를 사로잡을까 주의하라 이것은 사람의 전통과 세상의 초등학문을 따름이요 그리스도를 따름이 아니니라",
  },
  {
    id: 15,
    lessonLabel: "15과",
    title: "누구를 의지할때 잘 배울수 있나요?",
    summary: "우리는 성령님을 의지하며 배워요",
    reference: "고린도후서 10장 5절",
    verse: "하나님 아는 것을 대적하여 높아진 것을 다 무너뜨리고 모든 생각을 사로잡아 그리스도에게 복종하게 하니",
  },
  {
    id: 16,
    lessonLabel: "16과",
    title: "우리의 배움을 어떻게 사용할까요?",
    summary: "내가 배운것으로 이웃을 공감하고 섬겨요",
    reference: "빌립보서 2장 5절",
    verse: "너희 안에 이 마음을 품으라 곧 그리스도 예수의 마음이니",
  },
  {
    id: 17,
    lessonLabel: "17과",
    title: "세상을 향한 우리의 과제는 무엇일까요?",
    summary: "하나님은 우리에게 세상을 돌보라는 명령을 주셨어요",
    reference: "로마서 1장 20절",
    verse:
      "창세로부터 그의 보이지 아니하는 것들 곧 그의 영원하신 능력과 신성이 그가 만드신 만물에 분명히 보여 알려졌나니 그러므로 그들이 핑계하지 못할지니라",
  },
  {
    id: 18,
    lessonLabel: "18과",
    title: "우리가 세상에서 조심해야 할 것은 무엇인가요?",
    summary: "우리는 하나님을 거부하는 세상의 가치를 경계해요",
    reference: "잠언 4장 27절",
    verse: "좌로나 우로나 치우치지 말고 네 발을 악에서 떠나게 하라",
  },
  {
    id: 19,
    lessonLabel: "19과",
    title: "우리는 세상에서 어떤 영향력을 끼치나요?",
    summary: "우리는 소금과 빛으로 살며 세상을 아름답게 가꾸어요",
    reference: "마태복음 5장 16절",
    verse:
      "이같이 너희 빛이 사람 앞에 비치게 하여 그들로 너희 착한 행실을 보고 하늘에 계신 너희 아버지께 영광을 돌리게 하라",
  },
  {
    id: 20,
    lessonLabel: "20과",
    title: "예배를 통해 하나님을 닮아갈 수 있을까요?",
    summary: "예배를 통해 하나님을 더욱 닮아갈 수 있어요",
    reference: "고린도후서 3장 18절",
    verse:
      "우리가 다 수건을 벗은 얼굴로 거울을 보는 것 같이 주의 영광을 보매 그와 같은 형상으로 변화하여 영광에서 영광에 이르니 곧 주의 영으로 말미암음이니라",
  },
  {
    id: 21,
    lessonLabel: "21과",
    title: "우리는 누구에게 예배하나요?",
    summary: "잘못된 예배는 하나님의 형상을 망가뜨려요",
    reference: "시편 115편 8절",
    verse: "우상을 만드는 자들과 그것을 의지하는 자들이 다 그와 같으리로다",
  },
  {
    id: 22,
    lessonLabel: "22과",
    title: "우리는 어떻게 진실한 예배자로 살수 있을까요?",
    summary: "예배를 통해 하나님을 반응하고 삶의 예배자로 살아요",
    reference: "이사야 6장 8절",
    verse:
      "내가 또 주의 목소리를 들으니 주께서 이르시되 내가 누구를 보내며 누가 우리를 위하여 갈꼬 하시니 그 때에 내가 이르되 내가 여기 있나이다 나를 보내소서 하였더니",
  },
  {
    id: 23,
    lessonLabel: "종려주일",
    title: "예수님의 고난 우리에게 무엇을 주셨나요?",
    summary: "예수님의 고난과 죽음으로 우리가 구원을 받았어요",
    reference: "베드로전서 2장 21절",
    verse:
      "이를 위하여 너희가 부르심을 받았으니 그리스도도 너희를 위하여 고난을 받으사 너희에게 본을 끼쳐 그 자취를 따라오게 하려 하셨느니라",
  },
  {
    id: 24,
    lessonLabel: "부활주일",
    title: "예수님의 부활 우리에게 어떤 의미가 있나요?",
    summary: "예수님의 부활은 우리에게 생명과 희망을 주어요",
    reference: "요한복음 20장 8절",
    verse: "그 때에야 무덤에 먼저 갔던 그 다른 제자도 들어가 보고 믿더라",
  },
  {
    id: 25,
    lessonLabel: "어린이주일",
    title: "하나님을 경외하면 무엇이 달라질까요?",
    summary: "하나님을 경외하여 지혜를 얻어요",
    reference: "잠언 1장 8절",
    verse: "내 아들아 네 아비의 훈계를 들으며 네 어미의 법을 떠나지 말라",
  },
  {
    id: 26,
    lessonLabel: "나라사랑 주일",
    title: "우리나라의 주인은 누구인가요?",
    summary: "하나님이 우리나라의 주인이에요",
    reference: "로마서 13장 6절",
    verse: "너희가 조세를 바치는 것도 이로 말미암음이라 그들이 하나님의 일꾼이 되어 바로 이 일에 항상 힘쓰느니라",
  },
].map(enrichQuestion);

const STORAGE_KEY = "bible-verse-quiz-records-v2";
const MAX_STORED_RECORDS = 40;

const difficultyConfig = {
  beginner: { label: "초급", subtitle: "3지선다", mode: "choice", optionCount: 3 },
  intermediate: { label: "중급", subtitle: "4지선다", mode: "choice", optionCount: 4 },
  advanced: { label: "고급", subtitle: "5지선다", mode: "choice", optionCount: 5 },
  memory: { label: "암기형", subtitle: "숫자 직접 입력", mode: "input", optionCount: 0 },
};

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const playerNameInput = document.querySelector("#player-name");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const hintButton = document.querySelector("#hint-button");
const progressText = document.querySelector("#progress-text");
const difficultyBadge = document.querySelector("#difficulty-badge");
const hintCountBadge = document.querySelector("#hint-count-badge");
const verseText = document.querySelector("#verse-text");
const optionsContainer = document.querySelector("#options-container");
const hintBox = document.querySelector("#hint-box");
const feedback = document.querySelector("#feedback");
const questionText = document.querySelector("#question-text");
const guideText = document.querySelector("#guide-text");

const memoryAnswerForm = document.querySelector("#memory-answer-form");
const memoryBookLabel = document.querySelector("#memory-book-label");
const chapterInput = document.querySelector("#chapter-input");
const verseInput = document.querySelector("#verse-input");
const submitAnswerButton = document.querySelector("#submit-answer-button");

const historyEmpty = document.querySelector("#history-empty");
const historyList = document.querySelector("#history-list");

const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");
const resultScore = document.querySelector("#result-score");
const resultSummary = document.querySelector("#result-summary");
const resultCorrect = document.querySelector("#result-correct");
const resultHints = document.querySelector("#result-hints");
const resultDifficulty = document.querySelector("#result-difficulty");
const resultTotal = document.querySelector("#result-total");
const resultHintText = document.querySelector("#result-hint-text");
const reviewEmpty = document.querySelector("#review-empty");
const reviewList = document.querySelector("#review-list");

const state = {
  playerName: "익명",
  totalQuestions: 10,
  difficulty: "beginner",
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  usedHintIds: new Set(),
  isLocked: false,
  timerId: null,
  answerLog: [],
};

function parseReference(reference) {
  const match = reference.match(/^(.*?)\s+(\d+)(장|편)\s+([0-9~]+)절$/);

  if (!match) {
    throw new Error(`지원하지 않는 참고 구절 형식입니다: ${reference}`);
  }

  return {
    bookName: match[1],
    chapterNumber: String(Number(match[2])),
    chapterLabel: match[3],
    verseNumber: normalizeVerseValue(match[4]),
  };
}

function enrichQuestion(item) {
  return {
    ...item,
    ...parseReference(item.reference),
  };
}

function normalizeVerseValue(value) {
  const sanitized = value
    .trim()
    .replace(/\s+/g, "")
    .replace(/[-–—]/g, "~")
    .replace(/[^0-9~]/g, "");

  if (!sanitized) {
    return "";
  }

  return sanitized
    .split("~")
    .filter(Boolean)
    .map((part) => String(Number(part)))
    .join("~");
}

function normalizeChapterValue(value) {
  const digits = value.replace(/\D/g, "");
  return digits ? String(Number(digits)) : "";
}

function shuffle(array) {
  const copied = [...array];

  for (let index = copied.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[randomIndex]] = [copied[randomIndex], copied[index]];
  }

  return copied;
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, element]) => {
    element.classList.toggle("active", name === screenName);
  });
}

function getSelectedValue(groupName) {
  const selected = document.querySelector(`[data-group="${groupName}"].is-selected`);
  return selected ? selected.dataset.value : "";
}

function getDifficultyMeta(difficultyKey = state.difficulty) {
  return difficultyConfig[difficultyKey];
}

function getDifficultyBadgeText(difficultyKey = state.difficulty) {
  const difficulty = getDifficultyMeta(difficultyKey);
  return `${difficulty.label} · ${difficulty.subtitle}`;
}

function formatHint(question) {
  if (question.lessonLabel.endsWith("과")) {
    return `[힌트] ${question.lessonLabel} ${question.title}`;
  }

  return `[힌트] ${question.lessonLabel} - ${question.title}`;
}

function buildOptions(question) {
  const optionCount = getDifficultyMeta().optionCount;
  const distractorPool = shuffle(
    [...new Set(bibleData.filter((item) => item.id !== question.id).map((item) => item.reference))]
  ).slice(0, optionCount - 1);

  return shuffle([
    { reference: question.reference, isCorrect: true },
    ...distractorPool.map((reference) => ({ reference, isCorrect: false })),
  ]);
}

function updateHintState(question) {
  const hasHint = state.usedHintIds.has(question.id);

  hintCountBadge.textContent = `힌트 ${state.usedHintIds.size}개`;
  hintButton.textContent = hasHint ? "힌트 다시 보기" : "힌트 보기 (-1점)";
  hintBox.hidden = !hasHint;
  hintBox.textContent = hasHint ? formatHint(question) : "";
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.className = "feedback";
}

function clearMemoryInputs() {
  chapterInput.value = "";
  verseInput.value = "";
  chapterInput.disabled = false;
  verseInput.disabled = false;
  submitAnswerButton.disabled = false;
  chapterInput.classList.remove("is-correct", "is-wrong");
  verseInput.classList.remove("is-correct", "is-wrong");
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const difficulty = getDifficultyMeta();

  progressText.textContent = `${state.currentIndex + 1} / ${state.totalQuestions}`;
  difficultyBadge.textContent = getDifficultyBadgeText();
  verseText.textContent = `“${question.verse}”`;
  clearFeedback();
  state.isLocked = false;
  hintButton.disabled = false;

  if (difficulty.mode === "input") {
    renderInputQuestion(question);
  } else {
    renderChoiceQuestion(question);
  }

  updateHintState(question);
}

function renderChoiceQuestion(question) {
  const options = buildOptions(question);

  questionText.textContent = "다음 말씀의 장과 절은 무엇일까요?";
  guideText.textContent = "정답을 선택하면 다음 문제로 자동 진행됩니다.";

  memoryAnswerForm.hidden = true;
  optionsContainer.hidden = false;
  optionsContainer.innerHTML = "";

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.correct = String(option.isCorrect);
    button.dataset.reference = option.reference;
    button.innerHTML = `
      <span class="option-index">${index + 1}</span>
      <span class="option-text">${option.reference}</span>
    `;

    button.addEventListener("click", () => handleChoiceAnswer(button, option.isCorrect));
    optionsContainer.appendChild(button);
  });
}

function renderInputQuestion(question) {
  questionText.textContent = "책 이름을 보고 장/편과 절 숫자를 직접 입력해 보세요.";
  guideText.textContent = "정답 확인을 누르면 자동으로 다음 문제로 넘어갑니다.";
  memoryBookLabel.textContent = `책 이름: ${question.bookName}`;

  optionsContainer.hidden = true;
  optionsContainer.innerHTML = "";
  memoryAnswerForm.hidden = false;
  clearMemoryInputs();
  chapterInput.focus();
}

function getScore() {
  const rawScore = (state.correctCount / state.totalQuestions) * 100 - state.usedHintIds.size;
  return Math.max(0, Math.round(rawScore));
}

function getResultMessage(score) {
  if (score >= 95) {
    return "말씀을 또렷하게 기억하고 있어요. 시험 대비 흐름이 아주 좋습니다.";
  }

  if (score >= 80) {
    return "좋은 기억력을 보여 주고 있어요. 틀린 문제만 다시 보면 훨씬 단단해질 거예요.";
  }

  if (score >= 60) {
    return "기본 흐름은 잘 잡혀 있어요. 아래 오답 복습으로 암기를 더 선명하게 만들어 보세요.";
  }

  return "틀린 문제를 다시 읽고 반복하면 빠르게 기억이 붙습니다. 오답 복습부터 다시 시작해 보세요.";
}

function buildRecord() {
  return {
    playerName: state.playerName,
    totalQuestions: state.totalQuestions,
    correctCount: state.correctCount,
    score: getScore(),
    hintCount: state.usedHintIds.size,
    difficulty: state.difficulty,
    difficultyLabel: getDifficultyBadgeText(),
    wrongCount: state.totalQuestions - state.correctCount,
    playedAt: new Date().toISOString(),
  };
}

function loadStoredRecords() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveStoredRecords(records) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (error) {
    // Ignore storage errors and keep the quiz usable.
  }
}

function persistCurrentRecord() {
  const records = loadStoredRecords();
  const nextRecords = [buildRecord(), ...records].slice(0, MAX_STORED_RECORDS);
  saveStoredRecords(nextRecords);
}

function formatPlayedAt(value) {
  const date = new Date(value);

  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function renderHistoryPreview(nameValue) {
  const targetName = nameValue.trim();
  const records = loadStoredRecords();

  historyList.innerHTML = "";

  if (!targetName) {
    historyEmpty.hidden = false;
    historyEmpty.textContent = "이름을 먼저 입력하면 이전 기록을 보여 드립니다.";
    return;
  }

  const matchingRecords = records.filter((record) => record.playerName === targetName).slice(0, 6);

  if (matchingRecords.length === 0) {
    historyEmpty.hidden = false;
    historyEmpty.textContent = `${targetName} 이름으로 저장된 기록이 아직 없어요. 첫 도전을 시작해 보세요.`;
    return;
  }

  historyEmpty.hidden = true;

  matchingRecords.forEach((record) => {
    const card = document.createElement("article");
    card.className = "history-card";
    card.innerHTML = `
      <div class="history-card-top">
        <strong>${record.score}점</strong>
        <span>${formatPlayedAt(record.playedAt)}</span>
      </div>
      <p class="history-card-summary">${record.correctCount} / ${record.totalQuestions} 정답</p>
      <div class="history-card-meta">
        <span>${record.difficultyLabel}</span>
        <span>힌트 ${record.hintCount}개</span>
      </div>
    `;
    historyList.appendChild(card);
  });
}

function renderReviewList() {
  const wrongAnswers = state.answerLog.filter((entry) => !entry.isCorrect);

  reviewList.innerHTML = "";
  reviewEmpty.hidden = wrongAnswers.length !== 0;

  wrongAnswers.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-card-top">
        <span class="review-order">복습 ${index + 1}</span>
        <div class="review-tags">
          <span class="review-tag">${entry.lessonLabel}</span>
          <span class="review-tag">${entry.hintUsed ? "힌트 사용" : "힌트 없음"}</span>
        </div>
      </div>
      <h4>${entry.title}</h4>
      <p class="review-verse">“${entry.verse}”</p>
      <p class="review-summary-copy">${entry.summary}</p>
      <div class="review-answer-grid">
        <article>
          <span>정답</span>
          <strong>${entry.correctReference}</strong>
        </article>
        <article>
          <span>내 답</span>
          <strong>${entry.userAnswer}</strong>
        </article>
      </div>
    `;
    reviewList.appendChild(card);
  });
}

function renderResult() {
  const hintCount = state.usedHintIds.size;
  const difficulty = getDifficultyMeta();
  const score = getScore();

  persistCurrentRecord();

  resultTitle.textContent = `${state.playerName}님의 성경 퀴즈 결과`;
  resultMessage.textContent = getResultMessage(score);
  resultScore.textContent = String(score);
  resultSummary.textContent = `${state.correctCount} / ${state.totalQuestions} 정답`;
  resultCorrect.textContent = `${state.correctCount} / ${state.totalQuestions}`;
  resultHints.textContent = `${hintCount}개`;
  resultDifficulty.textContent = difficulty.label;
  resultTotal.textContent = `${state.totalQuestions}문제`;
  resultHintText.textContent = `힌트 ${hintCount}개 사용`;

  renderReviewList();
  renderHistoryPreview(state.playerName);
  showScreen("result");
}

function moveNext() {
  if (state.currentIndex >= state.totalQuestions - 1) {
    renderResult();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function recordAnswer(question, isCorrect, userAnswer) {
  state.answerLog.push({
    id: question.id,
    isCorrect,
    userAnswer,
    correctReference: question.reference,
    verse: question.verse,
    lessonLabel: question.lessonLabel,
    title: question.title,
    summary: question.summary,
    hintUsed: state.usedHintIds.has(question.id),
  });
}

function lockChoiceButtons() {
  const optionButtons = [...document.querySelectorAll(".option-button")];
  optionButtons.forEach((button) => {
    button.disabled = true;
    button.classList.add("is-locked");

    if (button.dataset.correct === "true") {
      button.classList.add("is-correct");
    }
  });
}

function handleChoiceAnswer(selectedButton, isCorrect) {
  if (state.isLocked) {
    return;
  }

  const question = state.questions[state.currentIndex];

  state.isLocked = true;
  hintButton.disabled = true;
  lockChoiceButtons();

  recordAnswer(question, isCorrect, selectedButton.dataset.reference);

  if (isCorrect) {
    state.correctCount += 1;
    selectedButton.classList.add("is-correct");
    feedback.textContent = `정답입니다! ${question.reference}`;
    feedback.className = "feedback is-success";
  } else {
    selectedButton.classList.add("is-wrong");
    feedback.textContent = `아쉬워요. 정답은 ${question.reference}입니다.`;
    feedback.className = "feedback is-error";
  }

  window.clearTimeout(state.timerId);
  state.timerId = window.setTimeout(moveNext, 1000);
}

function formatUserInputAnswer(question, chapterValue, verseValue) {
  const pieces = [];

  if (chapterValue) {
    pieces.push(`${chapterValue}${question.chapterLabel}`);
  }

  if (verseValue) {
    pieces.push(`${verseValue}절`);
  }

  return pieces.length === 0 ? "입력 안 함" : `${question.bookName} ${pieces.join(" ")}`;
}

function handleMemoryAnswerSubmit(event) {
  event.preventDefault();

  if (state.isLocked) {
    return;
  }

  const question = state.questions[state.currentIndex];
  const chapterValue = normalizeChapterValue(chapterInput.value);
  const verseValue = normalizeVerseValue(verseInput.value);

  if (!chapterValue || !verseValue) {
    feedback.textContent = "장/편과 절을 모두 입력해 주세요.";
    feedback.className = "feedback is-error";
    return;
  }

  const isCorrect = chapterValue === question.chapterNumber && verseValue === question.verseNumber;

  state.isLocked = true;
  hintButton.disabled = true;
  chapterInput.disabled = true;
  verseInput.disabled = true;
  submitAnswerButton.disabled = true;

  recordAnswer(question, isCorrect, formatUserInputAnswer(question, chapterValue, verseValue));

  if (isCorrect) {
    state.correctCount += 1;
    chapterInput.classList.add("is-correct");
    verseInput.classList.add("is-correct");
    feedback.textContent = `정답입니다! ${question.reference}`;
    feedback.className = "feedback is-success";
  } else {
    chapterInput.classList.add("is-wrong");
    verseInput.classList.add("is-wrong");
    feedback.textContent = `아쉬워요. 정답은 ${question.reference}입니다.`;
    feedback.className = "feedback is-error";
  }

  window.clearTimeout(state.timerId);
  state.timerId = window.setTimeout(moveNext, 1000);
}

function revealHint() {
  const question = state.questions[state.currentIndex];

  if (!state.usedHintIds.has(question.id)) {
    state.usedHintIds.add(question.id);
  }

  updateHintState(question);
}

function startGame() {
  window.clearTimeout(state.timerId);

  state.playerName = playerNameInput.value.trim() || "익명";
  state.totalQuestions = Number(getSelectedValue("count")) || 10;
  state.difficulty = getSelectedValue("difficulty") || "beginner";
  state.questions = shuffle(bibleData).slice(0, state.totalQuestions);
  state.currentIndex = 0;
  state.correctCount = 0;
  state.usedHintIds = new Set();
  state.isLocked = false;
  state.timerId = null;
  state.answerLog = [];

  renderQuestion();
  showScreen("quiz");
}

function resetGame() {
  window.clearTimeout(state.timerId);
  state.isLocked = false;
  renderHistoryPreview(playerNameInput.value.trim());
  showScreen("start");
}

document.querySelectorAll("[data-group]").forEach((button) => {
  button.addEventListener("click", () => {
    const { group } = button.dataset;

    document.querySelectorAll(`[data-group="${group}"]`).forEach((item) => {
      item.classList.remove("is-selected");
    });

    button.classList.add("is-selected");
  });
});

chapterInput.addEventListener("input", () => {
  chapterInput.value = chapterInput.value.replace(/\D/g, "").slice(0, 3);
  chapterInput.classList.remove("is-correct", "is-wrong");
});

verseInput.addEventListener("input", () => {
  verseInput.value = verseInput.value.replace(/[^0-9~\-]/g, "").slice(0, 7);
  verseInput.classList.remove("is-correct", "is-wrong");
});

playerNameInput.addEventListener("input", () => {
  renderHistoryPreview(playerNameInput.value);
});

memoryAnswerForm.addEventListener("submit", handleMemoryAnswerSubmit);
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
hintButton.addEventListener("click", revealHint);

renderHistoryPreview("");
