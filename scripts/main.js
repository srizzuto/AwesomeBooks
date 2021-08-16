function Book(title, author) { this.title = title; this.author = author; }
class Library {
  constructor() {
    this.books = JSON.parse(window.localStorage.getItem('stored'));
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', () => { this.add(); });
  }

  add() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = new Book(title, author);

    this.books.push(book);
    document.getElementById('form').reset();

    this.show();
  }

  show() {
    const booklist = document.getElementById('booklist');
    while (booklist.firstChild) {
      booklist.removeChild(booklist.firstChild);
    }
    this.books.forEach((book) => {
      const bookshell = document.createElement('p');
      const removebutton = document.createElement('button');

      removebutton.innerHTML = 'Remove';

      booklist.appendChild(bookshell);
      bookshell.innerHTML = `"${book.title}" by ${book.author}`;
      bookshell.appendChild(removebutton);
      removebutton.addEventListener('click', () => { this.books = this.books.filter((bok) => this.books.indexOf(bok)); this.show(); localStorage.setItem('stored', JSON.stringify(this.books)); });
    });
  }
}

const library = new Library();

window.addEventListener('load', () => {
  if (window.localStorage.getItem('stored') === null) {
    window.localStorage.setItem('stored', JSON.stringify([]));
    library.show();
  } else library.show();
});
