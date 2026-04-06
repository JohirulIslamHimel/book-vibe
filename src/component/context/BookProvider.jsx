import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarAsRead = (currentBook) => {
    // step:1 -- store book id or store book object
    // step:2 -- where to store
    // step:3 -- If the book is already exist then show a alert or toast
    // step:4 -- If not then add the book array or collection
    console.log(currentBook);
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      alert("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} is added to list`);
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarAsRead,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
