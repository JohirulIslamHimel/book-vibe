import React, { useContext } from "react";
import { BookContext } from "../component/context/BookProvider";

const Books = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  return <div>This is books page</div>;
};

export default Books;
