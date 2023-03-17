import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <header className='top black-bg d-flex justify-content-center align-item-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-4 col-3 d-flex">
                            <p className='me-2 d-lg-flex d-md-flex d-sm-none d-none'>Are you intrested in joining Program ?  <span className='d-lg-block d-md-flex d-md-none ms-1'> Contact Me</span></p>
                            <ul className='list-unstyled d-flex'>
                                <li><a href="3" target='_blank'>
                                    <i className='text-white-50 mx-1 fab fa-facebook'></i>
                                </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 mx-1 fab fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 mx-1 fab fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 mx-1 fab fa-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-8 col-9 d-flex justify-content-end">
                            <ul className='list-unstyled d-flex'>
                                <li className='mx-lg-2 mx-sm-1'>
                                    <p>Join Now</p>
                                </li>
                                <li className='mx-lg-2 mx-sm-1'> <p>Courses</p></li>
                                <li className='mx-lg-2 mx-sm-1'> <p>Membership Login</p></li>
                                <li >
                                    <div className="user-images" style={{ width: "27px", height: "27px", borderColor: "#000" }}>
                                        <Link to="/userProfile">
                                            <img src="./images/user-1.avif" alt="userimage" />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
