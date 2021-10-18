import { show, hide } from './main.js';

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
