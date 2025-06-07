let currentColor = 'black';
let mouseDown = false;

document.querySelectorAll('.color').forEach(color => {
  color.addEventListener('click', () => {
    document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
    color.classList.add('selected');
    currentColor = color.dataset.color;
  });
});

const grid = document.getElementById('grid');
for (let i = 0; i < 400; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mousedown', () => {
    mouseDown = true;
    square.style.backgroundColor = currentColor;
  });

  square.addEventListener('mouseover', () => {
    if (mouseDown) {
      square.style.backgroundColor = currentColor;
    }
  });

  square.addEventListener('mouseup', () => {
    mouseDown = false;
  });

  grid.appendChild(square);
};

document.body.addEventListener('mouseup', () => {
  mouseDown = false;
});
