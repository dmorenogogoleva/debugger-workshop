const button = document.querySelector('.main-button');
const catalog = document.querySelector('.catalog');
const { increase, mysticFunction } = require('../../helpers');

let count = 0;

button.addEventListener('click', function () {
  const photo = document.createElement('img');
  photo.src = 'http://placecorgi.com/100/100';
  catalog.appendChild(photo);

  count = increase(count);

  mysticFunction(count);
});
