let contactButtons = document.querySelectorAll("#contact-us");
let dialog = document.querySelector("dialog");
let closeButton = document.querySelector("#close-dialog");
let submitButton = document.querySelector("#submit-form");

contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        dialog.showModal();
    });
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', () => {
    dialog.close();
});