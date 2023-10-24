import { useParams } from "react-router-dom"

import { useGlobalContext } from "../../context";

function BookDetail() {
  const {id} = useParams()
  const { books } = useGlobalContext();
  console.log("details book",books)
  const book= books.find(book => book.id === parseInt(id))
  return (
    <div className="mt-5">
      {
        book? (
          <div className="container " >
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center ">
              <img src={book.image_url} className="detailPagePic w-100" alt="..." />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h1 className="fw-bold">{book.title}</h1>
            
            <p className="card-text text-muted">{book.description}</p>
            <p className="card-text text-muted"><b>Author:</b> {book.authors}</p>
            <p className="card-text text-muted"><b>number of pages:</b> {book.num_pages}</p>
            <p className="card-text text-muted"><b>rating:</b> {book.rating}</p>
            <p className="card-text text-muted">
              <b>format:</b> {book.format}</p>
              </div>
            </div>
           
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }
     
      
    </div>
  )
}

export default BookDetail
