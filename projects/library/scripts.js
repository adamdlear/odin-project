const myLibrary = [];

function Book(title, author, pages, read) {
    // this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const tableBody = document.querySelector(".shelfBody");
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

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

        row.append(title, author, pages, read);
        tableBody.append(row);
        console.log(row);
    });
}

const testBook = new Book(
    // "imagestring",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);
const testBook1 = new Book(
    // "imagestring",
    "This Test Book",
    "Test Author",
    100,
    "Yes",
);

myLibrary.push(testBook);
myLibrary.push(testBook1);

addBookToLibrary();
