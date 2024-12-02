const commuWord1 = [['metrics','계량적 분석'],['self-reported','자가 보고된'],['subconsciously','잠재의식적으로'],['upbringing','양육, 훈육'],['inconsistent','내용이 다른'],['nuances','미묘한 차이'],['restorative','원기를 회복시키는'],['deprive','빼앗다'],['malleable','영향을 잘 받는'],['molded','만들다, 주조하다'],['self-discovery','자아 발견'],['harmony','조화, 화합']];
const commuWord2 = [['consent','동의'],['transparent','투명한, 정직한'],['disclose','공개하다, 밝히다'],['sustainability','지속 가능성'],['emit','방출하다, 내뿜다'],['deployment','배치, 사용'],['mitigate','완화하다, 경감하다'],['initiative','계획, 주도'],['infringement','침해, 위반'],['bias','편견, 편향'],['representation','표현, 묘사'],['legislation','법률, 입법']];
const commuWord3 =[['egocentric','자기중심적인, 이기적인'],['oblivious','의식하지 못하는'],['acknowledge','인정하다'],['compound','악화시키다'],['circumstance','환경, 상황, 정황, 형편'],['disparity','차이, 격차, 불균형, 부조화'],['dedicated','전념하는, 헌신적인'],['conspire','음모를 꾸미다'],['skewed','왜곡된'],['downplaying','경시하다'],['chalk','~탓으로 돌리다'],['paradoxical','역설적인']]
const commuWordtotal = [
    ['up for debate', '논쟁 거리가 되는, 논의의 대상이 되는'],
    ['metrics', '(성격을 정의하거나 측정하기 위해 사용되는) 기준, 척도'],
    ['self-reported', '자가 보고된, 개인이 스스로 정보를 제공한'],
    ['subconsciously', '잠재의식적으로'],
    ['inconsistent', '일관성이 없는, 일관되지 않는'],
    ['nuances', '미묘한 차이, 뉘앙스'],
    ['restorative', '원기를 회복시키는'],
    ['malleable', '잘 변하는, 쉽게 영향을 받는'],
    ['molded', '만들어지다, 형성되다'],
    ['upbringing', '양육, 가정교육'],
    ['take with a gram of salt', '(정보를 액면 그대로 믿기보다는) 의심을 가지고 신중하게 받아들이다'],
    ['deprive', '빼앗다, 박탈하다'],
    ['consent', '동의'],
    ['transparent', '투명한, 정직한'],
    ['disclose', '공개하다, 밝히다'],
    ['sustainability', '지속 가능성'],
    ['emit (emission)', '방출하다, 내뿜다'],
    ['deployment', '배치, 사용'],
    ['mitigate', '완화하다, 경감하다'],
    ['(take) initiative', '계획, 주도'],
    ['infringement', '침해, 위반'],
    ['bias', '편견, 편향'],
    ['representation', '표현, 묘사'],
    ['legislation', '법률, 위법'],
    ['egocentric', '자기중심적인, 이기적인'],
    ['oblivious', '의식(자각)하지 못하는'],
    ['acknowledge', '(사실로) 인정하다 혹은 (권위나 자격을) 인정하다'],
    ['compound', '악화시키다, 더 심각하게 만들다'],
    ['circumstance', '(일, 사건 등을 둘러싼) 환경, 상황, 정황 혹은 (개인의, 특히 재정적인) 형편(사정)'],
    ['disparity', '(특히 한쪽에 불공평한) 차이, 격차, 불균형, 부조화'],
    ['dedicated', '전념하는, 헌신적인 (=committed)'],
    ['conspire', '음모[모의]를 꾸미다, 공모하다 혹은 안 좋게 돌아가다'],
    ['skewed (towards)', '왜곡된, 편향된, 비스듬한, 삐딱한'],
    ['downplaying', '경시하다, 대단치 않게 생각하다 (=play down)'],
    ['chalk (A) up to (B)', '~탓으로 돌리다'],
    ['paradoxical', '역설적인'],
    ['regulate', '규제[통제/단속]하다'],
    ['contribute', '기여하다, 원인이 되다'],
    ['enact', '법으로 제정하다, 시행하다'],
    ['suggested', '제안된, 추천된 (알고리즘에 의해)'],
    ['correlational', '연관된, 상관관계의'],
    ['norm', '규범, 표준'],
    ['panacea', '만병통치약'],
    ['pushback', '반발, 저항'],
    ['afforestation', '조림, 숲이 없던 지역에 나무를 심는 과정'],
    ['reforestation', '재조림, 황폐하된 숲이나 벌채된 지역에 나무를 다시 심는 과정'],
    ['carbon sequestration', '탄소 격리'],
    ['green washing', '겉으로만 친환경적인 척하는 행동'],
    ['biodiversity', '생물의 다양성'],
    ['greenhouse gases', '온실기체'],
    ['savanna', '대초원, 사바나'],
    ['degraded', '모욕을 당한'],
    ['unintended', '의도하지 않은'],
    ['regeneration', '회생'],
    ['commercial', '상용'],
    ['initiative', '계획'],
    ['allay', '(~에 대한 두려움을) 가라앉히다'],
    ['prerequisite', '전제 조건, 필수적인 조건'],
    ['plunge', '급락하다'],
    ['demographic', '인구 통계의, 인구구조에 관한'],
    ['disruptive', '지장을 주는, 방해가 되는'],
    ['subsidy', '(정부 등에서 제공하는) 보조금'],
    ['vow', '맹세하다, 서약하다'],
    ['crumble', '붕괴하다; 부스러지다'],
    ['fertility rate', '출산율'],
    ['reverse', '반전시키다, 뒤집다'],
    ['halve', '절반으로 줄다'],
    ['decline', '감소'],
    ['tempting', '솔깃한, 구미가 당기는'],
    ['transition', '이행, 과도기'],
    ['immense', '엄청난, 거대한'],
    ['pensioner', '연금 수령자'],
    ['wince', '(통증, 당혹감으로 얼굴 표정이) 움찔하다'],
    ['provision', '공급, 제공'],
    ['compel', '강요하다, 억지로 하게 하다'],
    ['prospect', '(성공할) 전망'],
    ['immigration', '이민'],
    ['vigorous', '활기찬, 건강한'],
    ['consumption', '소비, 소모'],
    ['inevitable', '피할 수 없는, 면할 수 없는, 부득이한']
  ];
  
const commuWord = [commuWord1, commuWord2, commuWord3, commuWordtotal]
// 로컬 스토리지에서 단어 목록을 불러오는 함수
function loadWords() {
    const storedWords = localStorage.getItem('words');
    if (storedWords) {
        return JSON.parse(storedWords);
    }
    return [];
}

function commu(n) {
    const words = loadWords();
    commuWord[n-1].forEach(item => {
        const word = item[0]
        const meaning = item[1]
        words.unshift({word, meaning})
        saveWords(words);
        displayWords();
    });
}

function reset() {
    localStorage.clear();
    displayWords();
}

// 로컬 스토리지에 단어 목록을 저장하는 함수
function saveWords(words) {
    localStorage.setItem('words', JSON.stringify(words));
}

// 단어를 추가하는 함수
function addWord() {
    const wordInput = document.getElementById('wordInput');
    const meaningInput = document.getElementById('meaningInput');
    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();
    
    if (word && meaning) {
        const words = loadWords();
        words.unshift({ word, meaning });
        saveWords(words);
        displayWords();
        wordInput.value = '';
        meaningInput.value = ''; // 입력 필드 초기화
    }
}

// 마지막 단어를 삭제하는 함수
function deleteWord() {
    const words = loadWords();
    if (words) {
        words.shift();
        saveWords(words);
        displayWords();
    }
}

// 화면에 단어 목록을 표시하는 함수
function displayWords() {
    const words = loadWords();
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';
    
    words.forEach(item => {
        const li = document.createElement('li');

        // 단어와 뜻을 각각 span으로 감싸서 표시
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = item.word;

        const meaningSpan = document.createElement('span');
        meaningSpan.className = 'meaning';
        meaningSpan.textContent = item.meaning;

        li.appendChild(wordSpan);
        li.appendChild(meaningSpan);

        wordList.appendChild(li);
    });
}


let testWords = [];
let currentWordIndex = 0;
let correctAnswers = 0;
// 단어 테스트를 시작하는 함수
function startTest() {
    const words = loadWords();
    if (words.length === 0) {
        alert('저장된 단어가 없습니다.');
        return;
    }

    // 단어를 랜덤하게 섞음
    testWords = words.sort(() => Math.random() - 0.5);
    currentWordIndex = 0;

    document.getElementById('testSection').style.display = 'block'; // 테스트 섹션 표시
    document.getElementById('wordList').style.display = 'none'; // 단어 목록 숨기기
    document.getElementById('testAnswer').value = ''; // 이전 답 초기화
    document.getElementById('progress').textContent = `진행률: ${currentWordIndex+1}/${testWords.length}`;
    displayNextWord();
}

// 다음 단어를 화면에 표시하는 함수
function displayNextWord() {
    if (currentWordIndex < testWords.length) {
        document.getElementById('testWord').textContent = testWords[currentWordIndex].word;
        document.getElementById('feedback').textContent = ''; // 피드백 초기화
    } else {
        document.getElementById('feedback').textContent = '모든 단어를 맞췄습니다!';
        document.getElementById('testSection').style.display = 'none'; // 테스트 종료
        document.getElementById('wordList').style.display = 'block'; // 단어 목록 다시 보이기
    }
}

// 사용자가 입력한 뜻을 확인하는 함수
function checkAnswer() {
    const userAnswer = document.getElementById('testAnswer').value.trim().split(', ');
    const correctAnswer = testWords[currentWordIndex].meaning.split(', ');

    if (userAnswer.every(element => correctAnswer.includes(element))) {
        correctAnswers++;
        currentWordIndex++;
        displayNextWord();
        document.getElementById('testAnswer').value = ''; // 입력 필드 초기화
    } else {
        document.getElementById('feedback').textContent = '틀렸습니다. 다시 시도하세요.';
    }
    document.getElementById('progress').textContent = `진행률: ${currentWordIndex+1}/${testWords.length}`;
}

function seeAnswer() {
    const  testAnswer = document.getElementById('testAnswer');
    testAnswer.value = testWords[currentWordIndex].meaning;
}

// Enter 키를 확인하여 해당 함수 실행
function checkEnter(event, func) {
    if (event.key === 'Enter') {
        func();
    }
}

let testMeanings = []; // 뜻 기반 테스트를 위한 배열
let currentMeaningIndex = 0;
let correctMeaningAnswers = 0;

// 단어 -> 뜻 테스트 시작
function startWordTest() {
    const words = loadWords()
    if (words.length === 0) {
        alert('저장된 단어가 없습니다.');
        return;
    }

    // 뜻을 랜덤하게 섞음
    testMeanings = words.sort(() => Math.random() - 0.5);
    currentMeaningIndex = 0;

    document.getElementById('wordTestSection').style.display = 'block'; // 단어 테스트 섹션 표시
    document.getElementById('testSection').style.display = 'none'; // 뜻 -> 단어 테스트 섹션 숨기기
    document.getElementById('wordList').style.display = 'none'; // 단어 목록 숨기기
    document.getElementById('wordAnswer').value = ''; // 입력 필드 초기화
    document.getElementById('wordProgress').textContent = `진행률: ${currentMeaningIndex+1}/${testMeanings.length}`;
    displayNextMeaning();
}

// 다음 뜻을 화면에 표시하는 함수
function displayNextMeaning() {
    if (currentMeaningIndex < testMeanings.length) {
        document.getElementById('testMeaning').textContent = testMeanings[currentMeaningIndex].meaning;
        document.getElementById('wordFeedback').textContent = ''; // 피드백 초기화
    } else {
        document.getElementById('wordFeedback').textContent = '모든 뜻에 해당하는 단어를 맞췄습니다!';
        document.getElementById('wordTestSection').style.display = 'none'; // 테스트 종료
        document.getElementById('wordList').style.display = 'block'; // 단어 목록 다시 보이기
    }
}

// 사용자가 입력한 단어를 확인하는 함수
function checkWordAnswer() {
    const userAnswer = document.getElementById('wordAnswer').value.trim();
    const correctWord = testMeanings[currentMeaningIndex].word;

    if (userAnswer === correctWord) {
        correctMeaningAnswers++;
        currentMeaningIndex++;
        displayNextMeaning();
        document.getElementById('wordAnswer').value = ''; // 입력 필드 초기화
    } else {
        document.getElementById('wordFeedback').textContent = '틀렸습니다. 다시 시도하세요.';
    }
    document.getElementById('wordProgress').textContent = `진행률: ${currentMeaningIndex+1}/${testMeanings.length}`;
}

function seeWordAnswer() {
    const  wordAnswer = document.getElementById('wordAnswer');
    wordAnswer.value = testMeanings[currentMeaningIndex].word;
}




function endTest() {
    document.getElementById('wordTestSection').style.display = 'none';
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('wordList').style.display = 'block';
}

// 페이지가 로드되면 단어 목록을 표시
window.onload = function() {
    displayWords();
}



