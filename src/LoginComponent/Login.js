
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <main>
                <div className="container main-container d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-10 col-md-12 col-12 main-wrapper bg-white p-0">
                            <div className="row w-100 g-0 h-100">
                                <div className="col-lg-6 col-md-6 col-12 p-0 position-relative banner-sec">
                                    <div className="banner-img" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 p-0 content">
                                    <div className="login-content px-5 py-4 pe-3 d-flex justify-content-center align-items-center">
                                        <form>
                                            <div className="row w-100 px-2 ">
                                                <div className="col-lg-12">
                                                    <div className="heading mb-5">
                                                        <h1>Log in</h1>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-2 mt-2">
                                                        <label htmlFor="email">Username or email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmail4"
                                                            placeholder="Username or email"
                                                            aria-label="Email"
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
                                                <div className="col-lg-12 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox"
                                                        name="checkbox"
                                                        defaultValue="Bike"
                                                        className='me-2'
                                                    />
                                                    <label htmlFor="checkbox">Remember me</label>
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <div className="my-3 justify-content-center ">
                                                        <button type="button" className="btn w-100 primary-btn text-white py-2">
                                                            Log In
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <Link to="/Reset" className="m-2 p-tag">Lost Your Password?</Link>
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

export default Login
