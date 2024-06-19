// let elemBody = document.body;
// elemBody.style.backgroundColor = '#fff';
// let container = document.querySelector('.container');
// let cards = document.querySelectorAll('.card');
// for (let i = 0; i < cards.length; i++) {
//   let eachCard = cards[i];
//   eachCard.dataset.nth = i + 1;
//   eachCard.addEventListener('click', function (evt) {
//     container.dataset.selected = evt.currentTarget.dataset.nth;
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const image = document.querySelector('.image');

//   image.addEventListener('click', () => {
//     if (image.classList.contains('rainbow')) {
//       image.classList.remove('rainbow');
//     } else {
//       image.classList.add('rainbow');
//     }
//   });
// });
let elemBody = document.body;
elemBody.style.backgroundColor = '#fff';
let container = document.querySelector('.container');
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;

  eachCard.addEventListener('click', function (evt) {
    container.dataset.selected = evt.currentTarget.dataset.nth;
    cards.forEach((card) => card.classList.remove('rainbow-border'));
    evt.currentTarget.classList.add('rainbow-border');
  });
}
