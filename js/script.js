const form = document.querySelector('form');

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

  document.body.style.backgroundColor = colors.bg;
  document
    .querySelectorAll('.text')
    .forEach((item) => (item.style.color = colors.text));
  document.getElementById('sq-1').style.backgroundColor = colors.sq1;
  document.getElementById('sq-2').style.backgroundColor = colors.sq2;
  document.getElementById('sq-2').style.backgroundColor = colors.sq3;
}

function init() {
  let colors = localStorage.getItem('colors');
  console.log(JSON.parse(colors));

  form.addEventListener('submit', updateColors);
}

document.addEventListener('DOMContentLoaded', init);

// inicia a aplicação, verifica se há cores no localStorage
// caso sim, usa essas cores para atualizar a página
// caso não, usa valores 'default'
