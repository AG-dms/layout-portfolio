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
