let formElement = document.querySelector("#form");
let textElement = document.querySelector("#note-text");
let cardsContainer = document.querySelector(".cards-container");
let clearBtnElement = document.querySelector("#clear-button");

function updateStroge() {
	localStorage.setItem("notes", cardsContainer.innerHTML);
}

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	let note = textElement.value;
	let newNote = document.createElement("div");
	newNote.classList.add("card");
	newNote.innerHTML = `<p>${note}</p><i class="fa-solid fa-trash"></i>`;
	cardsContainer.prepend(newNote);
	textElement.value = "";
	updateStroge();

	newNote.addEventListener("click", () => {
		growUp(newNote);
	});
});

function growUp(note) {
	let trashIcon = note.querySelector("i.fa-solid.fa-trash");
	if (note.classList.contains("grow")) {
		note.classList.remove("grow");
		trashIcon.style.display = "none";
		note.style.overflow = "hidden";
		note.style.height = "50px";
	} else {
		note.classList.add("grow");
		note.style.height = "auto";
		trashIcon.style.display = "inline";
		trashIcon.addEventListener("click", () => {
			note.remove();
			updateStroge();
		});
	}
}

if (localStorage.getItem("notes")) {
	cardsContainer.innerHTML = localStorage.getItem("notes");
}

cardsContainer.querySelectorAll(".card").forEach((note) => {
	note.addEventListener("click", () => {
		growUp(note);
	});
});

clearBtnElement.addEventListener("click", () => {
	cardsContainer.innerHTML = "";
	updateStroge();
});
