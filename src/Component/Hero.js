import React, {useState} from 'react'
import Services from './Services'
import OurCourses from './OurCourses'
import CoursesSec from './CoursesSec';
import Development from './Development';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Footer from './Footer';
import Newsletter from './Newsletter';
import { useNavigate } from "react-router-dom";
import Contact from './Contact';

const Hero = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([
        {
            id : 1,
            userImg : "/images/user-1.avif"
        },
        {
            id : 2,
            userImg : "/images/user-2.avif"
        },
        {
            id : 3,
            userImg : "/images/user-3.avif"
        },

        {
            id : 4,
            userImg : "/images/user-4.avif"
        }
    ]);

    return (
        <>
            <section className='sec d-flex justify-content-center align-items-center main-bg position-relative main-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="hero-content">
                                <span className='sec-text pb-3'>Expert Instruction</span>
                                <h1 className='heading1 f-40 f-semobold'>It's time to amplify <strong>Your</strong>
                                    <br />
                                    <span className='primary-text'> online Education</span></h1>
                                <p className='p-tag f-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima similique possimus eius. Est, repudiandae! Totam beatae nam voluptatem blanditiis ratione.</p>
                                <div className='buttons mt-4'>
                                    <button className='btn primary-btn me-4'>Our Courses</button>
                                    <button className='btn primary-outline-btn' onClick={() => navigate("/Register")}>Sign Up</button>
                                </div>

                                <div className="user-enrollment d-flex mt-5  align-items-center">
                                    <div className='d-flex'>
                                    {user && user.map((user) => {
                                        return (
                                            <div className="user-images" key= {user.id}>
                                                <img src={user.userImg} alt="userimage" />
                                            </div>
                                        )
                                    })}
                                    </div>
                                    <div className="ms-3 h4 "><span className='fw-bold primary-text'> 45K+</span> Enrolment</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12  home-banner">
                            <div className="home-assests">
                                <img src="/images/banner.png" alt="banner" className='img-fluid' />
                                <div className="icon-card1 icon position-absolute">
                                    <i className='fas fa-lightbulb'></i>
                                </div>
                                <div className="icon-card2 icon position-absolute">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="home-card home-card-1">
                                    <div className="d-flex flex-row align-items-center ">
                                        <div className='user-images me-4'>
                                            <img src="./images/user-4.avif" alt="user" className="img-fluid" />
                                        </div>
                                        <div className="home-details">
                                            <p className='primary-text '>Scarlet Witch</p>
                                            <p className=''>San Diego , PA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-card home-card-2">
                                    <div className="d-flex flex-row align-items-center justify-content-start">
                                        <div className="icon me-4">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="home-details">
                                            <p className=''>Congratulations !</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />
            <OurCourses />
            <CoursesSec />
            <Development />
            <Testimonial/>
            <Blog />
            <Contact />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Hero
