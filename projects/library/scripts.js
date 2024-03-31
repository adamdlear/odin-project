const tableBody = document.querySelector(".shelf-body");
// const submitButton = document.querySelector(".addBook");
const form = document.querySelector(".book-form");

const myLibrary = [];

function Book(image, title, author, pages, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createLibrary() {
    myLibrary.forEach((book) => {
        addBookToLibrary(book);
    });
}

function addBookToLibrary(book) {
    const row = document.createElement("tr");
    row.classList.add("shelf-row");

    const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.classList.add("bookCover");
    image.src = book.image;
    imageCell.appendChild(image);

    const title = document.createElement("td");
    title.textContent = book.title;

    const author = document.createElement("td");
    author.textContent = book.author;

    const pages = document.createElement("td");
    pages.textContent = book.pages;

    const read = document.createElement("td");
    read.textContent = book.read;

    row.append(imageCell, title, author, pages, read);
    tableBody.append(row);
}

function addNewBook(event) {
    event.preventDefault();
    const img = "";
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const book = new Book(img, title, author, pages, read);
    addBookToLibrary(book);
    form.reset();
}

const testBook = new Book(
    "images/tpp.jpg",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);
const testBook1 = new Book(
    "images/cpl.jpeg",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);

myLibrary.push(testBook);
myLibrary.push(testBook1);

createLibrary();
form.addEventListener("submit", addNewBook)
