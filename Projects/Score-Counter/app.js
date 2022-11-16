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
    if (scoreOne == inputVal && scoreOne > scoreTwo) {
        h2.innerText = "Player One WINS!";
        h2.style.color = 'rgb(0, 65, 206)';
        p1.disabled = true;
        p2.disabled = true;
    }
});

p2.addEventListener('click', function () {
    scoreTwo = scoreTwo + 1;
    h1.innerText = `${scoreOne} - ${scoreTwo}`;
    if (scoreTwo == inputVal && scoreTwo > scoreOne) {
        h2.innerText = "Player Two WINS!";
        h2.style.color = 'rgb(129, 0, 0)';
        p1.disabled = true;
        p2.disabled = true;
    }
});

rr.addEventListener('click', function () {
    scoreOne = 0;
    scoreTwo = 0;
    h1.innerText = `${scoreOne} - ${scoreTwo}`;
    h2.innerText = "Add points using the buttons";
    h2.style.color = 'rgb(0, 0, 0)';
    p1.disabled = false;
    p2.disabled = false;
});

// CONNECT SET NUMBER OF POINTS

let input = document.querySelector('select');
let inputVal = input.value;

input.addEventListener('input', function () {
    inputVal = input.value;
    console.log(inputVal);
});