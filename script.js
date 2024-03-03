const dialog = document.querySelector("dialog");
const addImg = document.querySelector(".add-img img"); 
const closeButton = document.querySelector("dialog button");
const confirmBookButton = document.querySelector("dialog button.submit");
const body = document.querySelector("body");
const inputTitle = document.querySelector("input[name='title']");
const inputAuthor = document.querySelector("input[name='author']");
const inputPages = document.querySelector("input[name='pages']");
const inputBookRead = document.querySelector("input[type='checkbox']");
const cardsContainer = document.querySelector(".container-books");
const book_class_names = ["book-title", "author-name", "n_pages", "read"];
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addImg.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    dialog.close();
});

confirmBookButton.addEventListener("click", (e) => {
    if(inputTitle.checkValidity() && inputAuthor.checkValidity() && inputPages.checkValidity() ) {
        e.preventDefault();
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputBookRead.checked));
        addBookDOM();
        document.querySelector("form").reset();
        dialog.close();
    }
})

function addBookDOM() {
    const card = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", deleteBookBoom);
    card.classList.add("card-item");
    card.dataset.index = myLibrary.length - 1;
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
    card.appendChild(deleteButton);
    cardsContainer.appendChild(card);
}

function deleteBookBoom(e) {
    const index = +e.target.parentElement.dataset.index;
    const cardsNodeList = e.target.parentElement.parentElement.childNodes;
    // update the data-index of the not deleted nodes if needed
    for (let i = index; i < cardsNodeList.length - 1; ++i) {
        cardsNodeList[i + 1].dataset.index = i;
    }
    // delete node
    e.target.parentElement.remove(); 
    // update myLibrary
    myLibrary.splice(index, 1);
}

// close dialog when clicked outside of the dialog
dialog.addEventListener("click", (e) => {
    if (e.target === dialog)
    {
        document.querySelector("form").reset();
        dialog.close();
    }
})

