// declare empty array
let myLibrary = [];


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function for add book to library 

function addBookToLibrary (title, author, pages, read) {
    
    const book = new Book (title, author, pages, read);

    myLibrary.push(book);
    displayBooks()
}

// function for display books on page

function displayBooks () {
    const books = document.querySelector(".books");

    const removeDivs = document.querySelectorAll(".card")
        for(let i = 0; i < removeDivs.length; i++) {
            removeDivs[i].remove();
        }

        let index = 0;
        myLibrary.forEach(myLibrarys => {

        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);


       // create remove button
        const removebtn = document.createElement("button")
        removebtn.classList.add("remove-button")
        removebtn.textContent = "Remove";

        // link the data attribute

        removebtn.dataset.linkedArray = index;
        index++;
        card.appendChild(removebtn);

        removebtn.addEventListener("click", removeBook);

        function removeBook () {
            let bookToRemove = removebtn.dataset.linkedArray;
            console.log("remove", parseInt(bookToRemove));
            myLibrary.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayBooks()
        }

        for(let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);
            const para = document.createElement("p");
            para.textContent= (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para);
        }

    })
}

addBookToLibrary ("Harry Potter 1", "J.K.Rowling", "309", "Yes");
addBookToLibrary ("Lord of the Rings", "J.R.R. Tolkien", "1178", "No");
addBookToLibrary ("Inferno", "Dan Brown", "642", "Yes");

//displayBooks()


// display the add book form
const openformbtn = document.querySelector(".addbookbtn");
openformbtn.addEventListener("click", displayTheForm);

function displayTheForm () {
    document.getElementById("addbookform").style.display ="";
}

//

const submitButton = document.querySelector(".addbtn")
submitButton.addEventListener("click", entryInputs);

function entryInputs () {
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").value;
    let Read = document.getElementById("read").value;

    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
      return;
    }

    addBookToLibrary(Title, Author, Pages, Read);

    document.getElementById("add-book").reset()
}

// start function for reset button

const resetButton = document.querySelector(".resetbtn")
resetButton.addEventListener("click", clearForm);

function clearForm () {
    document.getElementById("add-book").reset();
}
