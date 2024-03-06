const emailInput = document.getElementById("userInput");
const subBtn = document.getElementById("subscribeBtn");
const resultText = document.getElementById("resultText");
const unsubBtn = document.getElementById("unsubscribeBtn");

const emails = [];


function showMessage(message, color) {
    resultText.textContent = message;
    resultText.style.color = color;

    setTimeout(function () {
        resultText.textContent = "";
    }, 4000);
}


function isValidEmail(email) {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);

}


function subscribe() {

    const emailVal = emailInput.value.trim();

    if(emailVal === "") {
        showMessage("Please write the email you want to SUBSCRIBE to!", "red");
        return;
    } else if(!isValidEmail(emailVal)) {
        showMessage("Please give a valid email address!", "red");
        return;
    } else if(emails.includes(emailVal)) {
        showMessage("Your email is already SUBSCRIBED!", "red");
        return;
    } else{
        emails.push(emailVal);
        showMessage("You have successfully SUBSCRIBED to the newsletter. Thank you!", "#28a745");
        return;
    }

}


function unsubscribe() {

    const emailVal = emailInput.value.trim();

    if(emailVal === "") {
        showMessage("Please write the email that you want to unsubscribe!", "red");
        return;
    } else if (!isValidEmail(emailVal)) {
        showMessage("Please give a valid email address!", "red");
        return;
    } else if (!emails.includes(emailVal)) {
        showMessage("Your email is already UNSUBSCRIBED!", "red");
        return;
    } else {
        let index = emails.indexOf(emailVal);
        emails.splice(index, 1);
        showMessage("You have successfully UNSUBSCRIBED from the Newsletter!", "#28a745");
        return;
    }

}

subBtn.addEventListener('click', subscribe);
unsubBtn.addEventListener('click', unsubscribe);