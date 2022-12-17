// STORAGE
let myLibrary = []

// BOOK OBJECT
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// LIBRARY OBJECT
let Library = {
    storage: [],
    addBookToLibrary(book) {
        this.storage.push(book)
    },
    getStorage() {
        return this.storage
    }
}

const toggleRead = (e) => {
    if (e.read === true) {
        e.read = false
    } else {
        e.read = true
    }

    updateDisplay()
}

const updateDisplay = () => {
    // CLEAR CURRENT DISPLAY
    const display = document.getElementById('card-container')
    display.innerHTML = ''

    Library.getStorage().forEach(function(book) {
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
        if(book.read) {
            isRead.innerHTML = 'Read'
            isRead.classList.add("bg-lime-800")
        } else {
            isRead.innerHTML = 'Not Read'
            isRead.classList.add("bg-rose-800")
        }
    
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
}

// ### FORM SECTION ###
const doForm = (e) => {
    var data = new FormData(document.getElementById("form"))

    data.append("title", document.getElementById("title-input").value)
    data.append("author", document.getElementById("author-input").value)
    data.append("pages", document.getElementById("pages-input").value)
    data.append("read", document.getElementById("read-input").value)

    let newBook = new Book(data.get("title"), data.get("author"), data.get("pages"), true)

    console.log(Library.getStorage())
    Library.addBookToLibrary(newBook)
    console.log(Library.getStorage())
    
    updateDisplay()
}

document.querySelector("#form").addEventListener("submit", function(e) {
    e.preventDefault()
    doForm()
})

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
let theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
let theHobbit3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
let theHobbit4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)

Library.addBookToLibrary(theHobbit)
Library.addBookToLibrary(theHobbit2)
Library.addBookToLibrary(theHobbit3)
Library.addBookToLibrary(theHobbit4)

updateDisplay()

console.log(Library.getStorage())