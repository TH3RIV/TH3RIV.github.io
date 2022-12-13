// ************* OPEN / CLOSE CONTACT FORM *************

const sent = document.querySelector('#sent');

const contactLink = document.querySelector('#contactLink');
contactLink.addEventListener('click', () => {
    document.querySelector("#contact-form").style.display = "block";
});

const btnClose = document.querySelector('#btnClose');
btnClose.addEventListener('click', () => {
    document.querySelector("#contact-form").style.display = "none";
    sent.innerText = "";
});

// ************* SEND INFORMATION *************

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.send(formData);

    sent.innerText = "Message sent, I'll get back to you ASAP!";

    form.reset();
});