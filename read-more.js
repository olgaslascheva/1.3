let showMore = document.querySelector('.brands__show-more');
let items = document.querySelectorAll('.item-hidden');
let label = document.querySelector('.label');
let icon = showMore.querySelector('.brands__icon');
console.log(label);

showMore.addEventListener('click', function(){
    icon.classList.toggle('icon--rotate');
    if (!showMore.classList.contains('active')) {
        label.textContent = 'Скрыть';
        showMore.classList.add('active');

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('item-hidden');
        }
    } else {
        label.textContent = 'Показать все';
        showMore.classList.remove('active');

        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('item-hidden');
        }
    }
});
