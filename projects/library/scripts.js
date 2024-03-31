const tableBody = document.querySelector(".shelf-body");
const submitButton = document.querySelector(".addBook");

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
        const row = document.createElement("tr");
        row.classList.add("shelf-row");

        const image = document.createElement("img");
        image.classList.add("bookCover");
        image.src = book.image;

        const title = document.createElement("td");
        title.textContent = book.title;

        const author = document.createElement("td");
        author.textContent = book.author;

        const pages = document.createElement("td");
        pages.textContent = book.pages;

        const read = document.createElement("td");
        read.textContent = book.read;

        row.append(image, title, author, pages, read);
        tableBody.append(row);
    });
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    const book = new Book("test string", title, author, pages, read);
    myLibrary.push(book);
    clearShelf();
    createLibrary();
}

function clearShelf() {
    const tableRows = document.getElementsByClassName(".shelf-row");
    tableRows.remove();
}

const testBook = new Book(
    "images/tpp.jpg",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);
const testBook1 = new Book(
    "imagestring",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);

myLibrary.push(testBook);

createLibrary();
submitButton.addEventListener("click", addBookToLibrary());
