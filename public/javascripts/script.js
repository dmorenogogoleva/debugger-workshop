// helpers

const increase = function (num) {
  return num += 1;
};

export const MYSTIC_CONDITION = function (num) {
  return num > 2
}

export const mysticFunction = function (num) {
  if (MYSTIC_CONDITION(num)) {
    document.location.reload();
  }
}

const button = document.querySelector('.main-button');
const catalog = document.querySelector('.catalog');

let count = 0;

button.addEventListener('click', function () {
  const photo = document.createElement('img');
  photo.src = 'http://placecorgi.com/100/100';
  catalog.appendChild(photo);

  count = increase(count);

  mysticFunction(count);
});
