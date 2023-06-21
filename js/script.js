const form = document.querySelector('form');

function updateDOM(colors) {
  document.getElementById('bg-in').value = colors.bg;
  document.getElementById('text-in').value = colors.text;
  document.getElementById('square-1-in').value = colors.sq1;
  document.getElementById('square-2-in').value = colors.sq2;
  document.getElementById('square-3-in').value = colors.sq3;

  document.body.style.backgroundColor = colors.bg;
  document
    .querySelectorAll('.text')
    .forEach((item) => (item.style.color = colors.text));
  document.getElementById('sq-1').style.backgroundColor = colors.sq1;
  document.getElementById('sq-2').style.backgroundColor = colors.sq2;
  document.getElementById('sq-3').style.backgroundColor = colors.sq3;
}

function updateColors(e) {
  e.preventDefault();

  const colors = {
    bg: document.getElementById('bg-in').value,
    text: document.getElementById('text-in').value,
    sq1: document.getElementById('square-1-in').value,
    sq2: document.getElementById('square-2-in').value,
    sq3: document.getElementById('square-3-in').value,
  };

  localStorage.setItem('colors', JSON.stringify(colors));
  updateDOM(colors);
}

function init() {
  let colors = JSON.parse(localStorage.getItem('colors'));

  if (colors) {
    updateDOM(colors);
  }

  form.addEventListener('submit', updateColors);
}

document.addEventListener('DOMContentLoaded', init);
