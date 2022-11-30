const currentUrl = document.querySelector('#currentUrl');
currentUrl.addEventListener('click', (event) => {
const newUrl = prompt('Введите новый текст для ссылки');
currentUrl.textContent = newUrl;
event.preventDefault()
currentUrl.addEventListener
})