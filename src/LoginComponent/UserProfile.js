import { Tab } from 'bootstrap'
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'

const UserProfile = () => {

    const [key, setKey] = useState('all');
    return (
        <>

            <Navbar />
            <style>{"body { background-color: #fff; }"}</style>
            <div className="sec-breadcrumbs d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 position-relative user-image-sec alignment">
                            <div className="userprofile-card position-absolute">
                                <div className="profile-card">
                                    <div className="userProfile-image">
                                        <img src="/images/user-4.avif" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 alignment">
                            <div className="name">
                                <h1 className='profile-owner-name'>swara bhatt</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='my-5 pb-5 user-sec'>
                <div className="container pb-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-12">
                            <div className="userprofile-card ">
                                <div className="profile-list">
                                    <ul className='list-unstyled'>
                                        <li className='profile-item active d-flex align-items-center'>
                                            <div>
                                                <img src="/images/course icon.png" alt="Courses" />
                                            </div>
                                            <span>Courses</span>
                                        </li>
                                        <li className='profile-item d-flex align-items-center'>
                                            <div>
                                                <img src="/images/puzzle icon.png" alt="puzzle" />
                                            </div>
                                            <span>Quizzes</span>
                                        </li>
                                        <li className='profile-item d-flex align-items-center'>
                                            <div>
                                                <img src="/images/cart icon.png" alt="cart" />
                                            </div>
                                            <span>Orders</span>
                                        </li>
                                        <li className='profile-item d-flex align-items-center'>
                                            <div>
                                                <img src="/images/cart icon.png" alt="cart" />
                                            </div>
                                            <span>Orders Woocommerce</span>
                                        </li>
                                        <li className='profile-item d-flex align-items-center'>
                                            <div>
                                                <img src="/images/setting icon.png " alt="setting" />
                                            </div>
                                            <span>Quizzes</span>
                                        </li>
                                        <li className='profile-item d-flex align-items-center'>
                                            <div>
                                                <img src="/images/logout icon.png " alt="logout" />
                                            </div>
                                            <span> Quizzes</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 ">
                            <div className="row user_courses_deatils">
                                <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-start course_Details">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 box col-md-4 col-sm-3 col-3 d-flex justify-content-center align-items-center flex-column text-center p-2 me-3">
                                            <p className='mb-0'>
                                                Enrolled Courses
                                            </p>
                                            <p className='mb-0'>
                                                0
                                            </p>
                                        </div>
                                        <div className="col-lg-4 box col-md-4 col-sm-3 col-3 d-flex justify-content-center align-items-center flex-column text-center p-2 mx-3">
                                            <p className='mb-0'>
                                                Active Courses
                                            </p>
                                            <p className='mb-0'>
                                                0
                                            </p>
                                        </div>
                                        <div className="col-lg-4 box col-md-4 col-sm-3 col-3 d-flex justify-content-center align-items-center flex-column text-center p-2 mx-3">
                                            <p className='mb-0'>
                                                Completed Courses
                                            </p>
                                            <p className='mb-0'>
                                                0
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 mt-5 user-tabs">
                                    <Tabs id="controlled-tab-example"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3 my-tab">
                                        <Tab eventKey="all" title="All">
                                            <div className='blankBlock'>
                                                <p className='mb-0 p-tag'> No Course available!</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="inprogress" title="In Progress">
                                            <div className='blankBlock'>
                                                <p className='mb-0 p-tag'> No Course Selected!</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="finished" title="Finished">
                                            <div className='blankBlock'>
                                                <p className='mb-0 p-tag'> No Course Selected!</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="passed" title="Passed">
                                            <div className='blankBlock'>
                                                <p className='mb-0 p-tag'> No Course Selected!</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="failed" title="Failed">
                                            <div className='blankBlock'>
                                                <p className='mb-0 p-tag'> No Course Selected!</p>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default UserProfile
