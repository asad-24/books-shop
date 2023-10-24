import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context.jsx";
import "./mybook.css";

const MyBook = () => {
  const { books } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [getBooks, setGetBooks] = useState(null);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const book = books.find((book) => book.title.toLowerCase() === search.toLowerCase());

    if (book) {
      setGetBooks(book);
      setError(""); // Reset the error message
    } else {
      setGetBooks(null);
      setError("No result found for book");
    }
  }, [search, books]);

  // Check if books is an array and not empty
  if (!Array.isArray(books) || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div className="container">
      <form className="searchForm mt-5" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group mb-3 searchBar">
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
      <div className="row">
        {getBooks ? (
          <div className="col-12">
            <div className="alert alert-success">{`${getBooks.title} found!`}</div>
          </div>
        ) : (
          <>
            <div className="sample">
              {books.length > 0 &&
                books.map((element) => {
                  const { title, image_url } = element;
                  const bookName = title.substring(0, 15);
                  return (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 col-12"
                      style={{
                        display:
                          search === "" ||
                          bookName.toLowerCase().includes(search.toLowerCase())
                            ? "inline-block"
                            : "none",
                      }}
                      key={element.id}
                    >
                      <NavLink to={`book/${element.id}`}>
                        <div className="card mt-4">
                          <div className="card-body">
                            <img src={image_url} className="card-img-top" alt="..." />
                            <h5 className="card-title text-center mt-4">
                              {bookName.length >= 15 ? `${bookName}...` : bookName}
                            </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
            {error && <div className="col-12 mt-3 alert alert-danger">{error}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default MyBook;
