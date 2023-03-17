import React from 'react'


const Register = () => {
   
    return (
        <>
            <main>
                <div className="container main-container d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-10 col-md-12 col-12 main-wrapper bg-white p-0" id='register'>
                            <div className="row w-100 g-0 h-100">
                                <div className="col-lg-6 col-md-6 col-12 p-0 position-relative banner-sec">
                                    <div className='banner-img register-img'></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 p-0 content">
                                    <div className="login-content px-5 py-4 pe-3 d-flex justify-content-center align-items-center">
                                        <form>
                                            <div className="row w-100 px-2 ">
                                                <div className="col-lg-12">
                                                    <div className="heading mb-2">
                                                        <h1 style={{fontSize:"18px"}}>Register</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-2 mt-2">
                                                        <label htmlFor="email">Email Address</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmail4"
                                                            placeholder="Username or email"
                                                            aria-label="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-2 mt-2">
                                                        <label htmlFor="name">Username</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="username"
                                                            placeholder="Username"
                                                           
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 position-relative">
                                                    <div className="mb-2 mt-2">
                                                        <label htmlFor="Password" className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control position-relative"
                                                            id="id_password"
                                                            placeholder="Password"
                                                            aria-label="Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 position-relative">
                                                    <div className="mb-2 mt-2">
                                                        <label htmlFor="Password" className="form-label">
                                                           Confirm Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control position-relative"
                                                            id="id_password"
                                                            placeholder="Password"
                                                            aria-label="Password"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12 mt-2">
                                                    <div className="my-3 justify-content-center ">
                                                        <button type="button" className="btn w-100 primary-btn text-white py-2">
                                                            Log In
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register
