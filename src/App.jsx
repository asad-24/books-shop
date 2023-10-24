
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router,
 Routes,
  Route,
  
} from "react-router-dom";
import BookDetail from './components/bookDetail/BookDetail';
import ErrorPage from './errorPage/ErrorPage';
import MyBook from './components/MyBooks/MyBook';
function App() {


  return (
<>
<Router>
<Header/> 
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allBook' element={<MyBook/>}/>

<Route path='allBook/book/:id' element={<BookDetail/>}/>
<Route path='*' element={<ErrorPage/>}/>
  </Routes>
</Router>



</>
  )
}

export default App
