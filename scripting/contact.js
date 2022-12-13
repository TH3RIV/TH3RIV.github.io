// ************* OPEN / CLOSE CONTACT FORM *************

const contactLink = document.querySelector('#contactLink');
contactLink.addEventListener('click', () => {
    document.querySelector("#contact-form").style.display = "block";
});

const btnClose = document.querySelector('#btnClose');
btnClose.addEventListener('click', () => {
    document.querySelector("#contact-form").style.display = "none";
});