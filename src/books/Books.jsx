import React, { useContext } from "react";
import { BookContext } from "../component/context/BookProvider";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks);
  console.log(wishList);

  return (
    <div className="container mx-auto">
      Read list : {storedBooks.length} <br />
      Wish list : {wishList.length}
    </div>
  );
};

export default Books;
