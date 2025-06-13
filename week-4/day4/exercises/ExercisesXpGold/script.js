const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const lastname = params.get('lastname');

document.getElementById('output').textContent = `Hello, ${name} ${lastname}!`;