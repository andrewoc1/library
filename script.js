function Book(id, author, title, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  let id = crypto.randomUUID();
  let bookToAdd = new Book(id, author, title, pages, read);
  myLibrary.push(bookToAdd);

  displayBooks();
}
const myLibrary = [];

const booksContainer = document.querySelector(".books-container");

function displayBooks() {
  booksContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const titleElement = document.createElement("span");
    titleElement.innerHTML = book.title;
    const authorElement = document.createElement("span");
    authorElement.innerHTML = `By: ${book.author}`;
    const pagesElement = document.createElement("span");
    pagesElement.innerHTML = `Pages: ${book.pages}`;

    const readElement = document.createElement("button");
    readElement.classList.add("read-btn");
    readElement.dataset.id = book.id;
    if (book.read === true) {
      readElement.innerHTML = "Read";
      readElement.style.backgroundColor = "green";
    } else {
      readElement.innerHTML = "Not Read";
      readElement.style.backgroundColor = "red";
    }

    const removeElement = document.createElement("button");
    removeElement.classList.add("remove-book-btn");
    removeElement.dataset.id = book.id;
    removeElement.innerHTML = "Remove Book";

    card.append(titleElement);
    card.append(authorElement);
    card.append(pagesElement);
    card.append(readElement);
    card.append(removeElement);
    booksContainer.append(card);
  });
}

const bookForm = document.querySelector("#form-container");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(bookForm);

  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read") !== null;

  addBookToLibrary(author, title, pages, read);
  bookForm.reset();
});

booksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-btn")) {
    const bookId = e.target.dataset.id;
    const targetBook = myLibrary.find((book) => book.id === bookId);
    if (targetBook) {
      targetBook.read = !targetBook.read;
    }
  }

  if (e.target.classList.contains("remove-book-btn")) {
    const bookId = e.target.dataset.id;
    const index = myLibrary.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }

  displayBooks();
});
