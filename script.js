const firstButton = document.querySelector('[data-button-1]');
const firstForm = document.querySelector('.first-form');

const secondForm = document.querySelector('.second-form');
const secondButton = document.querySelector('[data-button-2]');

const thirdButton = document.querySelector('[data-button-3]');
const thirdForm = document.querySelector('.third-form');

const forthButton = document.querySelector('[data-button-4]');
const fifthButton = document.querySelector('[data-button-5]');
//

const showingFirstForm = function () {
  firstForm.style.WebkitAnimation = 'popback 0.5s';
  firstForm.classList.remove('hidden');
  firstForm.style.zIndex = '20';
};

//

const showingSecondForm = function () {
  secondForm.style.WebkitAnimation = 'slidein 0.3s';
  secondForm.classList.remove('hidden');
  secondForm.style.zIndex = '10';
};

const showingSecondFormPopback = function () {
  secondForm.style.WebkitAnimation = 'popback 0.5s';
  secondForm.classList.remove('hidden');
  secondForm.style.zIndex = '25';
};

const removingSecondForm = function () {
  secondForm.style.WebkitAnimation = 'slideout 0.5s';
  secondForm.classList.add('hidden');
};
//
const showingThirdForm = function () {
  thirdForm.style.WebkitAnimation = 'slidein 0.3s';
  thirdForm.classList.remove('hidden');
  thirdForm.style.zIndex = '15';
};

const removingThirdForm = function () {
  thirdForm.style.WebkitAnimation = 'slideout 0.3s';
  thirdForm.classList.add('hidden');
};

firstButton.addEventListener('click', function (e) {
  e.preventDefault();
  firstForm.classList.add('hidden');
  firstForm.style.WebkitAnimation = 'popup 1s';
  setTimeout(showingSecondForm, 500);
});

secondButton.addEventListener('click', function (e) {
  e.preventDefault();
  secondForm.classList.add('hidden');
  secondForm.style.WebkitAnimation = 'popup 1s';
  setTimeout(showingThirdForm, 500);
});

thirdButton.addEventListener('click', function (e) {
  e.preventDefault();
  removingSecondForm();
  setTimeout(showingFirstForm, 270);
});

forthButton.addEventListener('click', function (e) {
  e.preventDefault();
  removingThirdForm();
  setTimeout(showingSecondFormPopback, 200);
});
