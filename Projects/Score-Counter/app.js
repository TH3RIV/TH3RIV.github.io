// DEFINE THE HEADINGS

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

let scoreOne = 0;
let scoreTwo = 0;

h1.innerText = `${scoreOne} - ${scoreTwo}`;
h2.innerText = "Add points using the buttons";

// DEFINE THE BUTTONS

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const rr = document.querySelector('#rr');

// GET THE BUTTONS TO INCREASE AND RESET THE SCORE:

p1.addEventListener('click', function () {
    scoreOne = scoreOne + 1;
    h1.innerText = `${scoreOne} - ${scoreTwo}`;
});

p2.addEventListener('click', function () {
    scoreTwo = scoreTwo + 1;
    h1.innerText = `${scoreOne} - ${scoreTwo}`;
});

rr.addEventListener('click', function () {
    scoreOne = 0;
    scoreTwo = 0;
    h1.innerText = `${scoreOne} - ${scoreTwo}`;
    h2.innerText = "Add points using the buttons";
});

// CONNECT THE THE SET NUMBER OF POINTS

let input = document.querySelector('select');

input.addEventListener('select', function () {
    if (scoreOne === input.value && scoreOne > 0) {
        h2.innerText = "Player One WINS";
    }
    else if (scoreTwo === input.value && scoreTwo > 0) {
        h2.innerText = "Player Two WINS";
    }
    else {
        h2.innerText = "Add points using the buttons";
    }
});