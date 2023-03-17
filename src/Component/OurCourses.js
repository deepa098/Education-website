import React from 'react'

const OurCourses = () => {
    return (
        <>
            <section className='py-5 d-flex justify-content-start align-items-center'>
                <div className="container-fluid">
                    <div className="row px-3 mx-auto ">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 position-relative">
                            <div>
                                <div className='dot-bg'></div>
                                <img src="/images/illustration.png" alt="courses" className='img-fluid ms-lg-4 ms-sm-0' />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-12 col-12 col-sm-12 d-flex justify-content-center align-items-start flex-column custom-m">
                            <span className='small-heading primary-text'>Self Development Courses</span>
                            <h2 className='heading2 f-30 pt-2 fw-500'>Get Instant Access To <br /> Expert Solution</h2>
                            <p className='p-tag pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolores</p>
                            <ul className='list-unstyled mt-2 mb-4 course-list'>
                                <li><i className="fas fa-check me-3"></i>High Quality Video  Details</li>
                                <li><i className="fas fa-check me-3"></i>Powerful Audience</li>
                                <li><i className="fas fa-check me-3"></i>Premium Content Worldwide</li>
                            </ul>

                            <button className='btn primary-btn me-4 primary-bg'>Our Courses</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurCourses
