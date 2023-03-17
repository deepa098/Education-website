import React from 'react'
import { useNavigate } from "react-router-dom";

const Reset = () => {

    const navigate = useNavigate();

    return (
        <>
            <main className='center-main'>
                <div className="container main-container d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-9 col-md-9 col-12 password-wrapper bg-white p-0">
                            <div className="p-5">
                                <div className="heading-1 ">
                                    <p className="p-tag">
                                        Lost your password? Please enter your username or email address.
                                        You will receive a link to create a new password via email.
                                    </p>
                                </div>
                                <div className="pass-content my-2">
                                    <label htmlFor="email">Username or email</label>
                                    <input
                                        type="email"
                                        className="form-control w-75"
                                        id="inputEmail4"
                                        placeholder="Username or email"
                                        aria-label="Email"
                                    />
                                </div>
                                <div className=" my-3 justify-content-center ">
                                    <button type="button" className="btn primary-btn text-white py-2"
                                        onClick={() => navigate("/EmailSent")}>
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Reset
