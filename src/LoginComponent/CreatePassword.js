import React from 'react'

const CreatePassword = () => {
    return (
        <>

            <main className='center-main'>
                <div className="container main-container d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-9 col-md-9 col-12 newpass-wrapper p-4">
                            <div className="newpass-heading mb-2">
                                <p className='p-tag '>Enter a new password below.</p>
                            </div>
                            <div className="row w-100 g-0 ">
                                <div className="col-lg-6 col-md-12 col-12  newpass-content ">
                                    <div className="mx-2 mt-2 pe-5">
                                        <label htmlFor="password">New password *</label>
                                        <div className="eyeicon position-relative d-flex justify-content-end ">
                                            <img
                                                src="/images/eye.png"
                                                alt="eye"
                                                className="position-absolute"
                                                id=" togglePassword "
                                            />
                                            <input
                                                type="password"
                                                className="form-control position-relative"
                                                id="id_password"
                                                placeholder="Password"
                                                aria-label="Password"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 newpass-content ">
                                    <div className="mx-2 mt-2 pe-5">
                                        <label htmlFor="password ">Re-enter new password *</label>
                                        <div className="eyeicon position-relative d-flex justify-content-end ">
                                            <img
                                                src="/images/eye.png"
                                                alt="eye"
                                                className="position-absolute"
                                                id=" togglePassword "
                                            />
                                            <input
                                                type="password"
                                                className="form-control position-relative"
                                                id="id_password1"
                                                placeholder="Password"
                                                aria-label="Password"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-4 mx-2">
                                <button type="button" className="btn primary-btn text-white py-2" >
                                    Save
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

export default CreatePassword
