import React from 'react'

const Newsletter = () => {
    return (
        <>
            <section className='py-5 my-3'>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-11 d-flex align-items-center justify-content-end me-md-4 position-relative">
                            <div  className='newsletter-box d-flex align-items-start justify-content-center flex-column' >
                                <span className='small-heading primary-text'>Newsletter</span>
                                <h2 className='f-30 heading2 pt-1 fw-500'>Subscribe to Get <br /> Latest News</h2>
                                <form action="" className='w-100 mt-2'>
                                    <div className='newsletter d-flex w-75 align-items-start position-relative'>
                                        <input type="email" placeholder='Enter Your Email' />
                                        <button className='btn primary-btn btn-sm'>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <img src="/images/banner-3.avif" alt="newsletter"  className='img-fluid newsletter-img' style={{width : "50%"}}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter
