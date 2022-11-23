const rtg1 = document.querySelector('#rtg');
const tks1 = document.querySelector('#tks');
const selectedOpt1 = document.querySelector('#selected_opt');
const sbtn1 = document.querySelector('#btn');
const options1 = document.getElementsByName('choice');

function showOption() {
    for (i = 0; i < options1.length; i++) {
        if (options1[i].checked) {
            selectedOpt1.innerText = `You selected ${options1[i].value} out of 5`;
        }
    }
};

sbtn1.addEventListener('click', function (e) {
    e.preventDefault();
    rtg1.style.display = 'none';
    tks1.style.display = 'flex';
    showOption();
}); 