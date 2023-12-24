// dropdown

const iconToggle = document.querySelector('.icon-toggle');
const iconMenu = iconToggle.querySelector('span');
const navbar = document.querySelector('nav');
const dropdown = document.querySelector('.nav-item');
let dropdownOpen = false;
iconToggle.addEventListener('click', function () {
  if (dropdownOpen) {
    iconMenu.innerHTML = 'menu';
    dropdown.style.top = '-200px';
    navbar.style.height = '60px';
  } else {
    iconMenu.innerHTML = 'close';
    dropdown.style.top = '150px';
    navbar.style.height = '340px';
    navbar.style.alignItems = 'start';
  }
  dropdownOpen = !dropdownOpen;
});

// otomastis ganti foto pada hero-img(jumbotron/header)

function slide() {
  const heroImg = document.querySelector('section.jumbotron');
  const gambarSlide = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
  let i = 0;

  heroImg.style.backgroundImage = 'url(asset/img/heroslide/' + gambarSlide[i++] + ')';
  setInterval(function () {
    heroImg.style.backgroundImage = 'url(asset/img/heroslide/' + gambarSlide[i++] + ')';
    if (i == gambarSlide.length) {
      i = 0;
    }
  }, 10000);
}
slide();

setTimeout(slide, 0);

// card hover

const cardButton = document.querySelectorAll('.card-item button');
cardButton.forEach(function (button, index) {
  button.addEventListener('click', function () {
    console.log(button.parentElement);
    button.nextElementSibling.classList.toggle('bottomValue');
  });
});
