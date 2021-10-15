function hide(elem) {
  elem.classList.remove('show');
  elem.classList.add('hide');
}

function show(block) {
  block.classList.remove('hide');
  block.classList.add('show');
}

const filterBtn = document.querySelectorAll('.btnF');
const filterMenu = document.querySelector('.filter__catalog');
const catalogBox = document.querySelectorAll('.catalog-menu__title');
filterBtn.forEach((item) => {
  item.addEventListener('click', () => {
    if (filterMenu.classList.contains('hide')) {
      show(filterMenu);
    } else {
      hide(filterMenu);
    }
  });
});

catalogBox.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.parentNode.childNodes.forEach((item) => {
      if (item.tagName != 'UL') {
        return;
      } else if (item.classList.contains('show')) {
        hide(item);
      } else {
        show(item);
      }
    });
  });
});
const sizeBlock = document.querySelector('.chooseSize');
let sizeBtn = document.querySelector('.size__btn');
sizeBtn.addEventListener('click', () => {
  if (sizeBlock.classList.contains('hide')) {
    show(sizeBlock);
  } else {
    hide(sizeBlock);
  }
});

const menuBtn = document.querySelector('.hamBtn');
const menu = document.querySelector('.menu');

//open menu
function openMenu() {
  menuBtn.classList.add('header_hamburger');
  menu.classList.add('menu_active');
}

// close menu
function closeMenu() {
  menuBtn.classList.remove('header_hamburger');
  menu.classList.remove('menu_active');
  menu.scrollTo(0, 0);
}

menuBtn.addEventListener('click', () => {
  if (!menu.classList.contains('menu_active')) {
    openMenu();
  } else {
    closeMenu();
  }
});

document.body.addEventListener('click', (e) => {
  if (
    e.target.tagName !== 'IMG' &&
    e.className !== 'hamBtn' &&
    menu.classList.contains('menu_active')
  ) {
    closeMenu();
  }
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const a = /abc/;
const b = /dfr/;

console.log(typeof a);
