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
}
const myLibrary = [
  new Book(1, "author1", "book1", 80, true),
  new Book(2, "author2", "book2", 85, false),
];

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(book.title);
  });
}
displayBooks();
