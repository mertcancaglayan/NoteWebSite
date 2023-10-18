let cards = document.querySelectorAll('.card');
let btnElement = document.querySelector('#form')

btnElement.addEventListener("submit", (event) => {
    event.preventDefault()
})


cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains("grow")){
            card.classList.remove('grow');
        } else {
            card.classList.add('grow');
        }
    });
});
