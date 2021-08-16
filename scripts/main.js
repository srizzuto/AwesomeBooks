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
    self.books = [];
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', this.add)
    document.getElementById('add').addEventListener('click', this.show)
    console.log('Library created')
  }

  show() {
    let booklist = document.getElementById('booklist');
    let bookshell = document.createElement('p');
    let removebutton = document.createElement('button');
    booklist.appendChild(bookshell);
    bookshell.innerHTML(`"${book.title}" by ${book.author}`);
    bookshell.appendChild(removebutton);
  }

  add() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let book = new Book(title, author);
    self.books.push(book);
    console.log(self.books);
    console.log(`"${book.title}" by ${book.author} was created`);
  }

  remove() {
    self.books = this.books.filter((book) => self.books.indexOf(book));
  }
}


const library = new Library();