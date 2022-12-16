// STORAGE
let myLibrary = []

// BOOK OBJECT
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype = {
    info() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    }
}


// FUNCTIONS
function addBookToLibrary (book) {
    myLibrary.push(book);
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
addBookToLibrary(theHobbit)

myLibrary.forEach(function(book) {
    // ACTUAL CARD
    const card = document.createElement("div")

    // STYLING FOR CARD
    card.classList.add("flex", "flex-col", "text-white", "bg-gray-700", "rounded-lg", "min-w-fit")

    // CARD ELEMENTS
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const isRead = document.createElement('p')

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
    container.appendChild(card)

    const p = document.getElementsByTagName('p')
    console.log(p)
    p.forEach(function(element) {
        element.classList.add("w-3/4")
    })
})

console.log(myLibrary)