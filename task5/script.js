const input = document.querySelector('#input');
const button = document.querySelector('#button');
const duplicateField = document.querySelector('#duplicateField');

input.addEventListener(`input`, function(event) {
    duplicateField.textContent = input.value;
});

button.addEventListener(`click`, function(event) {
    event.preventDefault();
    console.log(duplicateField.textContent);
    input.value = "";
    duplicateField.textContent = "";
});