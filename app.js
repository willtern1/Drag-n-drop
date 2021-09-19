const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}
// Функция перетягивания элемента ,скрывает элем классом и добавляет класс при перетягивании
function dragstart (evt) {
  evt.target.classList.add('hold');
  setTimeout(() => evt.target.classList.add('hide'), 0);
}
// Функция появления элемента после скидывания
function  dragend (evt) {
  evt.target.classList.remove('hold', 'hide');
}
//Функция отключения стандартного действия бразуреа
function dragover (evt) {
  evt.preventDefault();
}
// Функция визуализации  перехода объкта при перетаскивании по колонкам
function dragenter (evt) {
  evt.target.classList.add('hovered');
}
//Функция отключения визуализации , после смещения из колонки
function dragleave (evt) {
  evt.target.classList.remove('hovered');
}
//Функция скидывания айтема в колонку
function dragdrop (evt) {
  evt.target.classList.remove('hovered');
  evt.target.append(item); //Добавление в конец блока
}
