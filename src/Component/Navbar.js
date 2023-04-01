import React from 'react'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container d-flex w-100">
          <div className="navbar-brand"><img src="../images/logo.png" alt="logo" style={{width: "80%"}} /></div>
          <div className="navbar-collapse d-lg-flex d-md-none d-none" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                {/* <span className="nav-link active" aria-current="page" href="#">Home</span> */}
                <Link to="/" className='nav-link active'>Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="about" className='nav-link'>About</Link>
              </li>
              <li className="nav-item mx-2">
              <Link to="course" className='nav-link'>Courses</Link>
              </li>
              {/* <li className="nav-item mx-2">
              <Link to="contact" className='btn primary-btn py-1'>Enquiry</Link>
              </li> */}
            </ul>
            <div>             
              <form className="d-flex  justify-content-center align-items-center">
                <div className='search-box position-relative d-flex justify-content-center align-items-center'>
                  <span className="material-icons position-absolute">search</span>
                  <input className="form-control me-2 position-relative" type="search" placeholder="Search" aria-label="Search" />
                </div>
                 <div> <i className='fas fa-shopping-cart mx-2'></i></div>
               <span className='d-flex justify-content-center align-items-center'>
                <Link to="/Login" className='nav-link' onClick={() => navigate("/Login")}>Login</Link>/
                <Link to="/Register" className='nav-link' onClick={() => navigate("/Register")}>Register</Link>
                <Link to="contact" className='btn primary-btn py-1'>Enquiry</Link>
                </span>
              </form>
            </div>
          </div>
          <div className="d-lg-none d-md-block d-sm-block d-sm-block"><MobileMenu /></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
