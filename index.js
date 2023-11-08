const myLibrary = [];

function Book(title, author, pages, read) {//initialize
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //get the value from the form then create a "new Book(title, author, pages, read?)"
  //push the new book in the myLibrarr array[]

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value
  let read = document.querySelector('#read').checked
  let newBook = new Book(title, author, pages, read)
  
  console.log('hi')
}

let newBookBtn = document.querySelector('#new-book-btn');

newBookBtn.addEventListener("click", function(){
  alert('hi')
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'block'
})

document.querySelector('#new-book-form').addEventListener("submit", function(){
  event.preventDefault();
  alert('lkj')
})
