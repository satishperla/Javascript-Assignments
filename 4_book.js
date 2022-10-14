class Author {
    constructor(authorId, name, contactNo, address) {
        this.authorId = authorId;
        this.name = name;
        this.contactNo = contactNo;
        this.address = address;
    }
}

class Book {
    constructor(bookId, bookName, authorIds, publicationName, publishedDate) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.authorIds = authorIds;
        this.publicationName = publicationName;
        this.publishedDate = publishedDate;
    }

    showDetails() {
        console.log("Book ID : " + this.bookId);
        console.log("Book Name : " + this.bookName);
        console.log("Author IDs : " + this.authorIds);
        console.log("Publication : " + this.publicationName);
        console.log("Published On : " + this.publishedDate);
    }
}

var author1 = new Author(231, "Author 231", 1234567890, "Hyderabad");
var author2 = new Author(43, "Author 43", 9988776655, "Bangalore");
var author3 = new Author(54, "Author 54", 2233445566, "Chennai");

var book1 = new Book(12, "General Science", [author1.authorId, author2.authorId], "CTS publications", "15 Oct 2020");

book1.showDetails();
