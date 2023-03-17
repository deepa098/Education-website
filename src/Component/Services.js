import React , {useState} from 'react'

const Services = () => {

     const [state, setstate] = useState([
         {
             id: 1,
             icon: "fas fa-book-reader",
            cardtitle: "Expert Teacher",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, pariatur.",
         },
         {
            id: 2,
            icon: "fas fa-book-reader",
           cardtitle: "Self Development",
           desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, pariatur.",
        },
        {
            id: 3,
            icon: "fas fa-laptop-house",
           cardtitle: "Remote Learning",
           desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, pariatur.",
        },
        {
            id: 4,
            icon: "fab fa-audible",
           cardtitle: "Life Time Support",
           desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, pariatur.",
        }
     ]); 

  return (
    <>
      <section className='py-5' id='about'>
      <div className="container">
          <div className="row mx-auto">
              <div className="col-lg-12 text-center">
                    <span className='small-heading primary-text'>Maximize Your Potential's</span>
                    <h2 className='heading2 f-30 pt-1 fw-500'>Learn The Secreats To Life Success</h2>
                    <p className='p-tag px-5 pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolores</p>
              </div>
              <div className="col-lg-12 mt-5">
                  <div className="row justify-content-center align-items-center">
                  {state && state.map((data) => {
                     return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-2" key={data.id}>
                            <div className="card services-card">
                                <div className="card-image">
                                <i className={data.icon}></i>
                                </div>
                                <div>
                                    <h3 className='card-heading'>{data.cardtitle}</h3>
                                    <p className='p-tag'>{data.desc}</p>
                                </div>
                            </div>
                      </div>
                      )
                  })}
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
