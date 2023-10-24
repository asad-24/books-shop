import { Link } from "react-router-dom"
import bookLab from "../../assets/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg"
import "./home.css"
function Home() {
  return (
    <div>
       <div className="mainCon" >

     <img src={bookLab} alt="" className="bookShop"/>
  <div className="Welcome text-center mx-auto">
  <div className="d-flex justify-content-center align-items-center flex-column mx-auto">
  <h1 className="textWEl text center text-dark">WelCome to my book store </h1>
  <Link to="/allBook">
  <button type="button" className="btn btn-primary">See All Books</button>
  </Link>
   
  </div>
  </div>
   </div>
    
    </div>
  )
}

export default Home
