import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([
        {
            id: 1,
            icon: "fas fa-quote-left",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti voluptatem architecto.",
            image: "/images/user-4.avif",
            title: "Dr. Strange",
            role: "Marketing Management"
        },
        {
            id: 2,
            icon: "fas fa-quote-left",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti voluptatem architecto.",
            image: "/images/user-3.avif",
            title: "Martin",
            role: "Marketing Management"
        },
        {
            id: 3,
            icon: "fas fa-quote-left",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti voluptatem architecto.",
            image: "/images/user-1.avif",
            title: "Robert",
            role: "Marketing Management"
        },
        {
            id: 4,
            icon: "fas fa-quote-left",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti voluptatem architecto.",
            image: "/images/user-1.avif",
            title: "Robert",
            role: "Marketing Management"
        },
    ]);

    

    return (
        <>
            <section className='testimonial-sec py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <span className='small-heading primary-text'>Testimonials</span>
                            <h2 className='heading2 f-30 pt-1 fw-500'>Success Stories From Students</h2>
                            <p className='p-tag  pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti error optio officia amet repudiandae </p>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <div className="">

                                <Splide aria-label="My Favorite Images" options={ { rewind: true, autoplay : true,
                                type   : 'loop', perMove: 1 , arrows:false ,perPage: 3,focus  : 'center',
                                    breakpoints :{
                                        550 : {
                                            perPage: 1
                                        },
                                        700: {
                                            perPage: 2 
                                        },
                                        991 : {
                                            perPage: 2
                                        },
                                        1024 : {
                                            perPage: 3
                                        },
                                         
                                    }
                                } } >

                                    {
                                        testimonial && testimonial.map((testimonialdata) => {
                                            return (
                                                <SplideSlide style={{margin: "10px 0"}} key={testimonialdata.id}>
                                                    <div className="testimonial-card" >

                                                        <div className='quote d-flex justify-content-center align-items-center'>
                                                            <i className={testimonialdata.icon}></i>
                                                        </div>
                                                        <div className="testimonial-desc mb-2">
                                                            <p>{testimonialdata.desc}</p>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center ">
                                                            <div className='user-images me-3'>
                                                                <img src={testimonialdata.image} alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="testimonial-details">
                                                                <p className='mb-0 fw-500 title'>{testimonialdata.title}</p>
                                                                <p className='p-tag mb-0'>{testimonialdata.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SplideSlide>
                                            )
                                        })
                                    }

                                </Splide>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
