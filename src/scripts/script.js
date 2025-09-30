// --- Script for main logic --\\


const level_display = document.getElementById('levelWindow');
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
function fill_level_window(arr, window) {
    // call method from level class
}

// --- Updates displayed level --- \\
function update_level(event, str) { 

        completed.concat(completed += event.key);
        let remaining = str.slice(i + 1);
     
        if (str[i] == event.key) {
            levelDisplay.innerHTML = `<span style="color: green">${completed}</span>${remaining}`;
            update_score();
        }
        else {
            levelDisplay.innerHTML = `<span style="color: red">${completed}</span>${remaining}`;
            update_mistakes();
        }
       
};

function update_score() {
    // call method from score class
}

function update_mistakes () {
    // call method from score class
}

// --- Main logic --- \\
root.addEventListener('keydown', (event) => {
    // Level completed
    if (i == level_display.textContent.length - 1){
        // change endscreen display value
        return 
    }
    
    const full_level = level_display.textContent;   
    
    update_level(event, full_level);
    
    if(event.key == 'Backspace'){
        return i--;
    }
    i++ 
})

fill_level_window(challengeSymbols, level_display);