let formElement = document.querySelector("#form");
let textElement = document.querySelector("#note-text");
let cardsContainer = document.querySelector(".cards-container");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
	let note = textElement.value;
    let newNote = document.createElement("div");
    newNote.classList.add("card");
    newNote.innerHTML = `<p>${note}</p><i class="fa-solid fa-trash"></i>`
    cardsContainer.appendChild(newNote);

    newNote.addEventListener("click", () => {
        let trashIcon = newNote.querySelector("i.fa-solid.fa-trash");
        if (newNote.classList.contains("grow")) {
            newNote.classList.remove("grow");
            trashIcon.style.display = "none";
            newNote.style.overflow = "hidden";
            newNote.style.height = "50px";
        } else {
            newNote.classList.add("grow");
            newNote.style.height = "auto";
            trashIcon.style.display = "inline";
            trashIcon.addEventListener("click", () => {
                newNote.remove();
            });
        }
    });
});
