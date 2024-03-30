const tableBody = document.querySelector(".shelfBody");

const myLibrary = [];

function Book(image, title, author, pages, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

        const image = document.createElement("img");
        image.classList.add("bookCover")
        image.src = book.image;

        const title = document.createElement("td");
        title.textContent = book.title;
        // row.appendChild(title);

        const author = document.createElement("td");
        author.textContent = book.author;
        // row.appendChild(author);

        const pages = document.createElement("td");
        pages.textContent = book.pages;
        // row.appendChild(pages);

        const read = document.createElement("td");
        read.textContent = book.read;
        // row.appendChild(read);

        row.append(image, title, author, pages, read);
        tableBody.append(row);
    });
}

const testBook = new Book(
    "images/martian.webp",
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
// myLibrary.push(testBook1);

addBookToLibrary();
