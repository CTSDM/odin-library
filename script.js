const dialog = document.querySelector("dialog");
const addImg = document.querySelector(".add-img img"); 
const closeButton = document.querySelector("dialog button");
const confirmBookButton = document.querySelector("dialog button.submit");
const body = document.querySelector("body");
const inputTitle = document.querySelector("input[name='title']");
const inputAuthor = document.querySelector("input[name='author']");
const inputPages = document.querySelector("input[name='pages']");
let nBooks = 0;
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
        console.log("halllooo");
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value));
        dialog.close();
    }
})

// close dialog when clicked outside of the dialog
dialog.addEventListener("click", (e) => {
    if (e.target === dialog)
        dialog.close();
})

