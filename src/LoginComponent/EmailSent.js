import React from 'react'

const EmailSent = () => {
    return (
        <>
            <main className='center-main'>
                <div className="container main-container email-sent d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-9 col-md-9 col-12 email-wrapper bg-white p-0 d-flex">
                            <div className="row w-100 g-0 justify-content-start align-items-center">
                                <div className="col-lg-1 col-md-1 col-2 text-center">
                                    <div className="done-img my-3">
                                        <img src="/images/done.png" alt="" className='img-fluid' width={"50%"} />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-10">
                                    <h4 className='email-sent'>
                                        Password reset email has been sent.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-12 email-content p-0 mt-4 ">
                            <p className='p-tag' style={{ fontSize: "12px" }}>A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EmailSent
