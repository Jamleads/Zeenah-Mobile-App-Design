'use strict';
const blurSection = document.querySelector('.blur-section');
const depositBtn = document.querySelector('.deposit');
const connectMachat = document.querySelector('.connection');
const cancelPay = document.querySelector('.cancel');

if (
  document.querySelector('.payment-method') ||
  document.querySelector('.express-deposit2')
) {
  const payMethod = document.querySelectorAll('.gateway ');
  console.log(payMethod, typeof payMethod);
  Array.from(payMethod).forEach(method => {
    method.addEventListener('click', choosePayMethod);
  });

  depositBtn.addEventListener('click', deposit);
  cancelPay.addEventListener('click', cancelPayment);
}

function choosePayMethod(e) {
  const element = e.target;
  element.classList.add('chose');
}
function deposit() {
  connectMachat.classList.remove('hide');
  blurSection.classList.add('blur');
}
function cancelPayment() {
  connectMachat.classList.add('hide');
  blurSection.classList.remove('blur');
}

if (document.querySelector('.add-Bank-transfer')) {
  const blurSection2 = document.querySelector('.blur-section2');
  const enterPin = document.querySelector('.enter-pin');

  // Might come back to do the numbers button clicking
  document.querySelector('.confirm').addEventListener('click', function () {
    blurSection2.classList.add('blur');
    enterPin.classList.remove('hide');
  });

  document.querySelector('.cancel2').addEventListener('click', function () {
    blurSection2.classList.remove('blur');
    enterPin.classList.add('hide');
  });
}
