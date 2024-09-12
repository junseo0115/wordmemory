
let testWords = [];
let currentWordIndex = 0;
const commuWord1 = [['metrics','계량적 분석'],['self-reported','자가 보고된'],['subconsciously','잠재의식적으로'],['upbringing','양육, 훈육'],['inconsistent','내용이 다른'],['nuances','미묘한 차이'],['restorative','원기를 회복시키는'],['deprive','빼앗다'],['malleable','영향을 잘 받는'],['molded','만들다, 주조하다'],['self-discovery','자아 발견'],['harmony','조화, 화합']];
const commuWord2 = [['consent','동의'],['transparent','투명한, 정직한'],['disclose','공개하다, 밝히다'],['sustainability','지속 가능성'],['emit','방출하다, 내뿜다'],['deployment','배치, 사용'],['mitigate','완화하다, 경감하다'],['initiative','계획, 주도'],['infringement','침해, 위반'],['bias','편견, 편향'],['representation','표현, 묘사'],['legislation','법률, 입법']];
const commuWord3 =[['egocentric','자기중심적인, 이기적인'],['oblivious','의식하지 못하는'],['acknowledge','인정하다'],['compound','악화시키다'],['circumstance','환경, 상황, 정황, 형편'],['disparity','차이, 격차, 불균형, 부조화'],['dedicated','전념하는, 헌신적인'],['conspire','음모를 꾸미다'],['skewed','왜곡된'],['downplaying','경시하다'],['chalk','~탓으로 돌리다'],['paradoxical','역설적인']]
const commuWord = [commuWord1, commuWord2, commuWord3]
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
        currentWordIndex++;
        displayNextWord();
        document.getElementById('testAnswer').value = ''; // 입력 필드 초기화
    } else {
        document.getElementById('feedback').textContent = '틀렸습니다. 다시 시도하세요.';
    }
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

// 단어 -> 뜻 테스트 시작
function startWordTest() {
    const words = loadWords();
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
        currentMeaningIndex++;
        displayNextMeaning();
        document.getElementById('wordAnswer').value = ''; // 입력 필드 초기화
    } else {
        document.getElementById('wordFeedback').textContent = '틀렸습니다. 다시 시도하세요.';
    }
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


