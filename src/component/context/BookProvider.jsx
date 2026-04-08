import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

  const handleMarAsRead = (currentBook) => {
    // step:1 -- store book id or store book object
    // step:2 -- where to store
    // step:3 -- If the book is already exist then show a alert or toast
    // step:4 -- If not then add the book array or collection
    // console.log(currentBook);

    addReadListToLocalDB(currentBook);

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
  };
  const handleWishList = (currentBook) => {
    // step:1 -- store book id or store book object
    // step:2 -- where to store
    // step:3 -- If the book is already exist then show a alert or toast
    // step:4 -- If not then add the book array or collection

    addWishListToLocalDB(currentBook);
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }
    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
  };

  const data = {
    readList,
    setReadList,
    handleMarAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
