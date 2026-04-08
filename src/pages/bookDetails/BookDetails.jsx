// import React, { use } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../component/context/BookProvider";

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
    // bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarAsRead, handleWishList } = useContext(BookContext);
  //   console.log(handleMarAsRead, storedBooks);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
      <figure className="w-full flex justify-center items-center bg-gray-100 rounded-xl p-6">
        <img src={image} alt="Album" className="h-64 md:h-96 lg:h-125 " />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-3xl lg:text-4xl font-bold">
          {bookName}
        </h2>
        <h2 className="card-title text-xl font-medium text-gray-600">
          By : {author}
        </h2>
        <p className="py-2 border-y font-medium text-gray-700">{category}</p>
        <p className="text-gray-600 leading-relaxed">
          {" "}
          <span className="font-bold text-[#131313]">Review :</span> {review}
        </p>
        {
          <div className="flex flex-wrap items-center gap-5">
            {tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge text-green-500 bg-green-100 font-bold px-4 py-3 "
              >
                {tag}
              </div>
            ))}
          </div>
        }
        <div className="border-t border-[#13131326] pt-6 space-y-4">
          <div className="grid grid-cols-[180px_1fr] gap-y-3 text-lg">
            <span className="text-[#131313b3]">Number of Pages:</span>
            <span className="font-bold text-[#131313]">{totalPages}</span>

            <span className="text-[#131313b3]">Publisher:</span>
            <span className="font-bold text-[#131313]">{publisher}</span>

            <span className="text-[#131313b3]">Year of Publishing:</span>
            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>

            <span className="text-[#131313b3]">Rating:</span>
            <span className="font-bold text-[#131313]">{rating}</span>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={() => handleMarAsRead(expectedBook)}
              className="btn btn-outline btn-info px-8"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(expectedBook)}
              className="btn btn-accent text-white px-8"
            >
              Add toWishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
