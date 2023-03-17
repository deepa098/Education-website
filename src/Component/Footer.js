import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <footer className='d-flex justify-contet-center align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
    
                            <p className='footer-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis dignissimos exercitationem eum illum magnam iste aut delectus nesciunt quasi!</p>
                            <ul className='list-unstyled d-flex'>
                                <li><a href="#" target='_blank'>
                                    <i className='text-white-50 me-3 fab fa-facebook'></i>
                                </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 me-3 fab fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 me-3 fab fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target='_blank'>
                                        <i className='text-white-50 me-3 fab fa-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <p className="footer-title">Explore</p>
                                    <ul className='list-unstyled footer-list'>
                                        <li><Link to="about">About</Link></li>
                                        <li><Link to="contact">Contact Us</Link></li>
                                        <li><Link to="blog">Blogs</Link></li>
                                        <li>Terms & Condition</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="footer-title">Courses</p>
                                    <ul className='list-unstyled footer-list'>
                                        <li>SEO Business</li>
                                        <li>Graphics Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Site Development</li>
                                        <li>Social Marketing</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="footer-title">Address</p>
                                    <ul className='list-unstyled footer-list'>
                                        <li>
                                            <address>
                                               Floor 2/4 Ahemdabad,India
                                            </address>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer">
                <p className='mb-0'>© 2023,All Rights Reserved</p>
            </div>

        </>
    )
}

export default Footer
