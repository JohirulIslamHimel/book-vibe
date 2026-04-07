import React, { useContext } from "react";
import { BookContext } from "../component/context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../component/listedBooks/ListedReadList";
import ListedWishList from "../component/listedBooks/ListedWishList";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks);
  console.log(wishList);

  return (
    <div className="container mx-auto my-3">
      {/* Read list : {storedBooks.length} <br />
      Wish list : {wishList.length} */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListedWishList></ListedWishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
