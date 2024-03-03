const dialog = document.querySelector("dialog");
const addImg = document.querySelector(".add-img img"); 
const closeButton = document.querySelector("dialog button");
const confirmBookButton = document.querySelector("dialog button.submit");
const body = document.querySelector("body");
const inputTitle = document.querySelector("input[name='title']");
const inputAuthor = document.querySelector("input[name='author']");
const inputPages = document.querySelector("input[name='pages']");
const cardsContainer = document.querySelector(".container-books");
const book_class_names = ["book-title", "author-name", "n_pages", "read"];
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // let's implement modals somehow...
}

addImg.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

confirmBookButton.addEventListener("click", (e) => {
    if(inputTitle.checkValidity() && inputAuthor.checkValidity() && inputPages.checkValidity()) {
        e.preventDefault();
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value));
        addBookDOM();
        dialog.close();
    }
})

function addBookDOM() {
    const card = document.createElement("div");
    card.classList.add("card-item");
    Object.entries(myLibrary[myLibrary.length - 1]).forEach((pairKeyValue, index) => {
        const div_temp = document.createElement("div");
        div_temp.classList.add(book_class_names[index]);
        if (index !== 3){
            div_temp.textContent = pairKeyValue[1];
        } else {
            div_temp.textContent = pairKeyValue[1] ? "Already read" : "Not read yet";
        }
        card.appendChild(div_temp);
    })
    cardsContainer.appendChild(card);
}

// close dialog when clicked outside of the dialog
dialog.addEventListener("click", (e) => {
    if (e.target === dialog)
        dialog.close();
})

