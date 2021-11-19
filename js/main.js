let button = document.querySelector('.form__btn');
let form = document.querySelector('.form');
let contain = document.querySelector('.contain__cards')

function createCard(nameValue, descValue, scrValue, priceValue) {
    //создание элементов
    const card = document.createElement('div');
    const containimg = document.createElement('div');
    const img = document.createElement('img');
    const del = document.createElement('a');
    const content = document.createElement('div');
    const title = document.createElement('p');
    const desc = document.createElement('p');
    const price = document.createElement('p');
    //присвоение классов
    card.classList.add('card');
    containimg.classList.add('img__contain');
    img.classList.add('img');
    img.src = scrValue;
    img.alt="Product";
    del.classList.add('card__delete');
    del.href = "#";
    content.classList.add('card__content');
    title.classList.add('card__title');
    title.textContent = nameValue;
    desc.classList.add('card__desc');
    desc.textContent = descValue;
    price.classList.add('card__price');
    price.textContent = priceValue;
    //вложение элементов
    contain.appendChild(card);
    card.appendChild(containimg);
    card.appendChild(content);
    card.appendChild(del);
    containimg.appendChild(img);
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(price);

    return card;

}
function addCard(event) {
    event.preventDefault();
    const img = form.elements.scr;
    const name = form.elements.name;
    const desc = form.elements.desc;
    const price = form.elements.price;
    const card = createCard(name.value, desc.value, scr.value, price.value)
    //добавление карточки
    contain.appendChild(card)
}
form.addEventListener('submit', addCard);