//base function

export function hide(elem) {
  elem.classList.remove('show');
  elem.classList.add('hide');
}

export function show(block) {
  block.classList.remove('hide');
  block.classList.add('show');
}
