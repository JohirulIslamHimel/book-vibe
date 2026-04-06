// import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  //   console.log(bookId);

  //   const books = use(booksPromise);
  //   console.log(books);

  const books = useLoaderData();
  console.log(books);

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  console.log(expectedBook);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    categorytags,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
      <figure className="w-full flex justify-center items-center bg-gray-100 rounded-xl">
        <img src={image} alt="Album" className="h-100 " />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title">{bookName}</h2>
        <h2 className="card-title">{author}</h2>
        <p className="py-2 border-y">{categorytags}</p>
        <p>{review}</p>
        {
          <div className="flex items-center gap-5">
            {tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge text-green-500 bg-green-100 font-bold "
              >
                {tag}
              </div>
            ))}
          </div>
        }
        <div className=" border-t space-y-3">
          <div className="flex justify-between items-center gap-2 ">
            <span>
              Number of pages: <span>{totalPages}</span>
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>
              Publisher: <span>{publisher}</span>
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>
              Year of Publishing: <span>{yearOfPublishing}</span>
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>
              Rating: <span>{rating}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
