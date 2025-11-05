// --- Script for main logic --\\

// --- DOM variables --- \\
const levelTextDisplay = document.getElementById('levelTextDisplay');
const root = document.querySelector(':root');
const userTextDisplay = document.getElementById('userTextDisplay');
const body = document.querySelector('body');

// --- Helping variables --- \\
let i = 0;
let levelSymbols = ['s', 'a', 'd', 'f', 'j', 'k', 'l', ';', 'aa', 'ss', 'dd', 'ff', 'jj', 'kk', 'll'];
let score = 0;
let mistakes = 0;
let completedLevel = '';
let levelLenght = 20;
const invalidChar = ['Alt', 'Control', 'Shift', 'CapsLock', 'Escape', 'Tab'];
let remainingLevel = ''
let temp = ''

// --- Functions --- \\

// --- Generates random level --- \\
function createLevel(arr, levelLenght) {
    let temp = '';
    for (let i = 0; i < levelLenght; i++){
       temp = temp.concat(arr[1]) 
    }
    console.log('level: ' + temp)
    return temp
}

function check_state(level, char){
    if (char == level){
        return createCharacterSpan(char, 'correct')
    }
    else {
        return createCharacterSpan(char, 'incorrect')
    }
}

function createCharacterSpan(char, state){
    switch (state){
        case 'pending':
            return `<span style='color: blue'>${char}</span>`
        case 'correct':
            return `<span style='color: green'>${char}</span>`
        case 'incorrect':
            return `<span style='color: red'>${char}</span>`
    }
}

function update_score() {
    // call method from score class
}

function update_mistakes () {
    // call method from score class
}

// --- Main logic --- \\
let level = createLevel(levelSymbols,  20)
console.log(level)
levelTextDisplay.textContent = level

root.addEventListener('keydown', (event) => {
    // Level completed
    if (i >= levelTextDisplay.textContent.length){
        console.log('done')
        return
    }
    else {
        temp = temp.concat(check_state(level[i], event.key))
        remainingLevel = level.slice(i + 1)
        console.log(remainingLevel)
        levelTextDisplay.innerHTML = `${temp}${remainingLevel}`
    }
    i++ 
})
