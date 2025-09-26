const levelDisplay = document.getElementById('levelWindow');
const root = document.querySelector(':root');
const newLevelBtn = document.getElementById('addLevel');
const userTextWindow = document.getElementById('userText');
const body = document.querySelector('body');
const highlight = document.getElementById('highlight');
let levelSymbols = document.getElementById('levelOption');

let i = 0;
let challengeSymbols = ['s', 'a', 'd', 'f', 'j', 'k', 'l', ';'];
let score = 0;
let mistakes = 0;
let completed = '';
const invalidChar = ['Alt', 'Control', 'Shift', 'CapsLock', 'Escape', 'Tab'];

// --- Functions --- \\

// --- Makes random level --- \\
function fillLevelWindow(arr, window) {
    let filledArr = []
    
    for (let i = 0; i < 50; i++){
        filledArr += arr[Math.floor(Math.random() * arr.length)]
        
        // --- Adds spaces --- \\
        if (i % 7 === 2){
            filledArr += " "
        }
    }
    window.textContent = filledArr
    i = 0;
    completed = '';
}

// --- Updates displayed level --- \\
function updateLevel(event, str) { 

        completed.concat(completed += event.key);
        let remaining = str.slice(i + 1);
     
        if (str[i] == event.key) {
            levelDisplay.innerHTML = `<span style="color: green">${completed}</span>${remaining}`;
            updateScore();
        }
        else {
            levelDisplay.innerHTML = `<span style="color: red">${completed}</span>${remaining}`;
            updateMistakes();
        }
       
};

function updateScore() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
}

function updateMistakes () {
    mistakes++;
    document.getElementById('mistakes').textContent = `Mistakes: ${mistakes}`;
}

function endScreen (body) {
    location.replace('endScreen.html');
    document.getElementById('score').textContent += `${score}`;
    document.getElementById('mistakes').textContent += `${mistakes}`;
    return
}

// --- Main logic --- \\
root.addEventListener('keydown', (event) => {
    // Level completed
    if (i == levelDisplay.textContent.length - 1){
        return endScreen(body);
    }
    
    const fullLevel = levelDisplay.textContent;   
    
    updateLevel(event, fullLevel);
    
    if(event.key == 'Backspace'){
        return i--;
    }
    i++ 
})

fillLevelWindow(challengeSymbols, levelDisplay);


