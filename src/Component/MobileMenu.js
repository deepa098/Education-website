import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ name, ...props }) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const end = {
        right: "0 !important",
    }

    return (
        <>
            <Button className="mobile-menu d-flex justify-content-center align-items-center" onClick={handleShow}>
                <span className="material-icons">menu</span>
            </Button>

            <Offcanvas show={show} onHide={handleClose} {...props} style={end}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav mx-auto mb-2">
                        <li className="nav-item mx-2">
                        <Link to="/" className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="about" className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="course" className='nav-link'>Courses</Link>
                        </li>
                       
                    </ul>
                    <form className="d-flex justify-content-center align-items-center">
                        <div className='search-box position-relative d-flex justify-content-center align-items-center'>
                            <span className="material-icons position-absolute">search</span>
                            <input className="form-control me-2 position-relative" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div> <i className='fas fa-shopping-cart mx-2'></i></div>
                        <span className='d-flex justify-content-left align-items-center flex-wrap'>
                            <Link to="/Login" className='nav-link' onClick={() => navigate("/Login")}>Login</Link>/
                            <Link to="/Register" className='nav-link' onClick={() => navigate("/Register")}>Register</Link>
                            <Link to="contact" className='btn primary-btn py-1 mx-2'>Enquiry</Link>
                        </span>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>


    )
}

export default MobileMenu
