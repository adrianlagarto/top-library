const myLibrary = [];

function Book(title, author, pages, read) {//initialize
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render(){
  let libraryEl = document.querySelector('#library');
  libraryEl.innerHTML = '';
  for(let i = 0;i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.setAttribute("class", "book-card");//<<styling porpuses
    bookEl.innerHTML = `
    <div class="card-header">
      <p class="title">${book.title}</p>
      <p class="author">by ${book.author}</p>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    </div>
    `;
    libraryEl.appendChild(bookEl);
    console.log(myLibrary[i])
  }
}



function addBookToLibrary() {
  //get the value from the form then create a "new Book(title, author, pages, read?)"
  //push the new book in the myLibrarr array[]

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value
  let read = document.querySelector('#read').checked
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  render();
  console.log('hi')
}

let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener("click", function(){
  alert('hi')
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'block'
})

document.querySelector('#new-book-form').addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
})
