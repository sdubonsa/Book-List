// STORAGE
let myLibrary = []

// BOOK OBJECT
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// FUNCTIONS
function addBookToLibrary (book) {
    myLibrary.push(book);
}

const toggleRead = (e) => {
    console.log(e.read)

    if (e.read === true) {
        e.read = false
    } else {
        e.read = true
    }

    console.log(e.read)
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
let theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
let theHobbit3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
let theHobbit4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
addBookToLibrary(theHobbit)
addBookToLibrary(theHobbit2)
addBookToLibrary(theHobbit3)
addBookToLibrary(theHobbit4)


myLibrary.forEach(function(book) {
    // ACTUAL CARD
    const card = document.createElement("div")

    // STYLING FOR CARD
    card.classList.add("flex", "flex-col", "text-white", "bg-gray-700", "rounded-lg", "w-40", "h-40")

    // CARD ELEMENTS
    const title = document.createElement('h1')
    title.classList.add("card-title")

    const author = document.createElement('p')
    author.classList.add("author")

    const pages = document.createElement('p')
    pages.classList.add("pages")

    const isRead = document.createElement('button')
    isRead.classList.add("read-btn")
    isRead.onclick = function() {
        toggleRead(book)
    }

    // GIVE CARD ELEMENTS THINGS
    title.innerHTML = book.title
    author.innerHTML = book.author
    pages.innerHTML = book.pages
    isRead.innerHTML = book.read

    // APPEND ELEMENTS
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(isRead)

    // ADD STUFF TO THE CARD-CONTAINER
    const container = document.getElementById('card-container')
    container.classList.add("h-screen", "flex", "flex-row", "gap-10", "m-10")
    container.appendChild(card)
})

console.log(myLibrary)