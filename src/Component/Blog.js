import React, { useState } from 'react'

const Blog = () => {

    const [blog, setBlog] = useState([
        {
            id: 1,
            image: "/images/blog-1.jpg",
            title: "Data Science and Machine learning with python Hands On !",
            like: " 2654 +",
            userimage: "/images/user-1.avif",
            username: "Nadim Muhammad"
        },
        {
            id: 2,
            image: "/images/blog-2.jpg",
            title: "Create Amazing Color Scheme For Your UX Design Project",
            like: " 2654 +",
            userimage: "/images/user-3.avif",
            username: "AP Eykdi"
        },
        {
            id: 3,
            image: "/images/blog-3.webp",
            title: "Culture And Leadership : Strateiges for a Successful Buisness",
            like: " 2654 +",
            userimage: "/images/user-4.avif",
            username: "suhani Shahth"
        },
    ]);

    return (
        <>
            <section className='py-4 my-3' id='blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <span className='small-heading primary-text'>Blog News</span>
                            <h2 className='heading2 f-30 pt-2 fw-500'>Latest From The Blog</h2>
                            <p className='p-tag pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolores</p>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <div className="row justify-content-center align-items-center">
                            {blog && blog.map((blogdata) => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4" key={blogdata.id}>
                                        <div className="card blog-card">
                                            <div className="course-image">
                                                <img src={blogdata.image} alt="course" />
                                            </div>
                                            <div className="blog-details px-2 mt-3">
                                                <h3 className='blog-title'>
                                                    {blogdata.title}
                                                </h3>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className='date mb-0'>
                                                        <i className="fas fa-calendar me-2"></i>
                                                        21  March , 2021
                                                    </p>
                                                    <p className='total-like  mb-0'>
                                                        <i className='fas fa-heart me-2'></i>
                                                        {blogdata.like}
                                                    </p>
                                                </div>
                                                <hr />
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex flex-row align-items-center ">
                                                        <div className='user-images me-2'>
                                                            <img src={blogdata.userimage} alt="user" className="img-fluid" />
                                                        </div>
                                                        <div className="testimonial-details">
                                                            <p className='mb-0 title'>{blogdata.username}</p>
                                                        </div>
                                                    </div>
                                                    <button className='btn primary-btn btn-small py-2'>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
