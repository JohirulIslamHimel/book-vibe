const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  console.log(allReadList);

  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

// To get wishlist data
const getAllWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

// To add new books to your wishlist
const addWishListToLocalDB = (book) => {
  const allWishList = getAllWishListFromLocalDB();
  const isAlreadyExist = allWishList.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allWishList.push(book);
    localStorage.setItem("wishList", JSON.stringify(allWishList));
  }
};
export {
  getAllReadListFromLocalDB,
  addReadListToLocalDB,
  getAllWishListFromLocalDB,
  addWishListToLocalDB,
};
