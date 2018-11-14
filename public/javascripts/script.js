const button = document.querySelector('.main-button');
const catalog = document.querySelector('.catalog');

const addPhoto = function() {
  const photo = document.createElement('img');
  photo.src = 'http://placecorgi.com/100/100';
  catalog.appendChild(photo); 
}


button.addEventListener('click', addPhoto);
