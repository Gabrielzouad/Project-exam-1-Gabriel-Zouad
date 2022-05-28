const nameInput = document.querySelector("#navnInput");
const emailInput = document.querySelector("#emailInput");
const messageInput = document.querySelector("#messageInput");
const emneInput = document.querySelector("#emneInput");
const sent = document.querySelector("#sendt");
const errorMessage = document.querySelectorAll(".error");

// tester om formen er valid
function validate() {
  clearError();
  let errorPass = false;

  if (nameInput.value.length < 5) {
    errorMessage[0].innerText = "Fyll inn navn";
    nameInput.classList.add("error");
    errorPass = true;
  }

  if (!emailValid(emailInput.value)) {
    errorMessage[1].innerText = "Skriv inn gylding epost";
    emailInput.classList.add("error");
    errorPass = true;
  }

  if (emneInput.value.length < 4) {
    errorMessage[2].innerText = "fyll inn emne";
    emneInput.classList.add("error");
    errorPass = true;
  }

  if (messageInput.value.length < 25) {
    errorMessage[3].innerText = "Skriv en gylding melding(minst 10 karakterer)";
    messageInput.classList.add("error");
    errorPass = true;
  }

  if (!errorPass) {
    sent.innerText = "You have sent us a message!";
  }
}
// fjerner error melding
function clearError() {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].innerText = "";
  }
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  messageInput.classList.remove("error");
  emneInput.classList.remove("error");
}

// validerer emailen
function emailValid(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
