const conso = document.querySelector(`#conso`);
conso.addEventListener(`click`, function()  {
  console.log(`Метод для выполнения в web консоль`)
})

const aler = document.querySelector(`#aler`);

aler.addEventListener(`click`, function() {
  alert(`Для выведения модального окна`)
})

const promp = document.querySelector(`#promp`);

promp.addEventListener(`click`, function() {
  prompt(`Ввод текста в модальном окне`)
})