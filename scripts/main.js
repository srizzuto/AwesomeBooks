
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    console.log('A Book was created')
  }
}

class Library {
  constructor() {
    self = this;
    self.books = JSON.parse(window.localStorage.getItem('stored'));
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', this.add);
    console.log('Library created');
  }

  add() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let book = new Book(title, author);


    self.books.push(book);
    document.getElementById('form').reset();

    self.show();
  }

  show() {
    let booklist = document.getElementById('booklist');
    while (booklist.firstChild) {
      booklist.removeChild(booklist.firstChild)
    }
    self.books.map((book) => {
      let bookshell = document.createElement('p');
      let removebutton = document.createElement('button');

      removebutton.innerHTML = "Remove";

      booklist.appendChild(bookshell);
      bookshell.innerHTML = `"${book.title}" by ${book.author}`;
      bookshell.appendChild(removebutton);
      removebutton.addEventListener('click', () => { self.books = self.books.filter((bok) => self.books.indexOf(bok)); self.show(); localStorage.setItem('stored', JSON.stringify(self.books)) })
    })

  }

}

const library = new Library();

window.addEventListener('load', () => {
  if (window.localStorage.getItem('stored') === null) {
    window.localStorage.setItem('stored', JSON.stringify([]))
  }
  else library.show();
})

