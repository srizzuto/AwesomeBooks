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
    console.log('Library created')
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