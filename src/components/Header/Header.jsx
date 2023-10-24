

import logo from "../../assets/openlibrary-logo-tighter.svg"
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <img src={logo} alt="" className="libraryLogo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active view overlay zoom fw-bold" aria-current="page" to="/allBook">ALL Books</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
