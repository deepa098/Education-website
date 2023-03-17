import React , {useState} from 'react'

const Development = () => {

    const [list, setList] = useState([
        {
            id : 1,
            icon: "fas fa-video",
            listtag: "Sign Up in Website",
            listdesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nam?"
        },
        {
            id : 2,
            icon: "fas fa-map",
            listtag: "Enroll Your Course",
            listdesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nam?"
        },
        {
            id : 3,
            icon: "fas fa-video",
            listtag: "Start From Now",
            listdesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nam?"
        }

    ]);

    return (
        <>
            <section className='py-5 my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="dev-image position-relative">
                                <img src="/images/banner-2.jpg" alt="banner-2" className='img-fluid' />
                                <div className='dot-bg-1'></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-2 dev-sec">
                            <div className='px-4'>
                                <span className='small-heading primary-text'>Self Development</span>
                                <h2 className='heading2 f-30 pt-1 fw-500'>Get Instant Access To <br /> expert Solution</h2>
                                <p className='p-tag  pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti error optio officia amet repudiandae qui aspernatur eveniet in fugit tempora.</p>
                                <ul className='list-unstyled dev-list mt-4'>
                                    {
                                        list && list.map((listdata) => {
                                            return (
                                                <li className='mb-3 d-flex align-items-center justify-content-between'  key={listdata.id}>
                                                    <div>
                                                        <span className="dev-icon">
                                                           
                                                           <i className={listdata.icon}></i>
                                                        </span>
                                                    </div>

                                                    <div className='ms-3'>
                                                        <h3 className='heading3'>{listdata.listtag}</h3>
                                                        <p className='p-tag'>{listdata.listdesc}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Development
