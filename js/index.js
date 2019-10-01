btn.onclick = function() {
    // Записываем в массив значения введённые пользователем
  let numbers = document.getElementById('inp').value;
  let array = numbers.split(',');
    // Достаём у каждого значения последний символ и записываем в начало значения
  let arrayL = [];
  let arrayF = [];
  for (let i = 0; i < array.length; i++) {
      elem = array[i];
      lastSimb = elem.slice(-1);
      elemL = lastSimb + elem;
      arrayL.push(elemL);
  }
    // Сортирум массив по первому символу и возвращаем массив в input
  arrayL.sort();
  for (let i = 0; i < arrayL.length; i++) {
      elemA = arrayL[i];
      elemA = elemA.slice(1);
      arrayF.push(elemA);
  }
  document.getElementById('inp').value = arrayF;
}