// DOM to manipulate:
const adviceNumber = document.querySelector('#adviceNumber');
const adviceText = document.querySelector('#adviceText');
const adviceButton = document.querySelector('#btn')

// Function for GET request from API and DOM manipulation:
const getAdvice = async () => {
    try {
        const requestLink = 'https://api.adviceslip.com/advice';
        const advice = await axios.get(requestLink);
        adviceNumber.innerText = advice.data.slip.id;
        adviceText.innerText = `"${advice.data.slip.advice}"`;
    }
    catch (err) {
        console.log(err);
    }
}

// Button to generate a new advice:
adviceButton.addEventListener('click', function (e) {
    e.preventDefault();
    getAdvice();
});

// Execute on page load:
getAdvice();