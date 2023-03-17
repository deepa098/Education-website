import React, { useState } from 'react'
import { Tabs, Tab, Accordion, ProgressBar } from 'react-bootstrap';
import Footer from './Footer';
import mainCourse from './AllCourseData';
import MainCourseCard from './MainCourseCard';
import Navbar from './Navbar'

const Course1 = () => {
    const [key, setKey] = useState('overview');

    const [courselist, setList] = useState([
        {
            id: 1,
            img: "/images/arrow.svg",
            text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting"
        },
        {
            id: 2,
            img: "/images/arrow.svg",
            text: "How It is Work? Lorem Ipsum is simply dummy text of the printing and typesetting"
        }
    ]);

    const [review, setReview] = useState([
        {
            id: 1,
            authorimg: "/images/author.jpg",
            authorName: "Tim Burton",
            reviewTitle: "Awesome Course!!",
            reviewContent: "Excellent course! Educators are knowledgeable and thoroughly enjoy the topic creating a fun laid-back learning atmosphere. Will take more courses. Thank you"
        },
        {
            id: 2,
            authorimg: "/images/user-1.avif",
            authorName: "Kim Burton",
            reviewTitle: "Awesome Course!!",
            reviewContent: "Excellent course! Educators are knowledgeable and thoroughly enjoy the topic creating a fun laid-back learning atmosphere. Will take more courses. Thank you"
        }
    ]);

    const [coursetopic, setCoursetopic] = useState([
        {
            id: 1,
            playicon: "fas fa-play-circle me-2",
            topicname: "basic construction of an extended"

        },
        {
            id: 2,
            playicon: "fas fa-play-circle me-2",
            topicname: "basic construction of an extended 12-fold rosette",
            lockicon: "fas fa-unlock-alt"
        },
        {
            id: 3,
            playicon: "fas fa-play-circle me-2",
            topicname: "Bear Awareness Online Safety Training Course",
            lockicon: "fas fa-unlock-alt"
        }
        , {
            id: 4,
            playicon: "fas fa-play-circle me-2",
            topicname: "basic construction of an extended 12-fold rosette",
            lockicon: "fas fa-unlock-alt"
        },
        {
            id: 5,
            playicon: "fas fa-question-circle me-2",
            topicname: "quiz",
            lockicon: "fas fa-unlock-alt"
        }
    ]);


    const [blogpost, setBlogpost] = useState([
        {

            id: 1,
            playicon: "fas fa-play-circle me-2",
            topicname: "The First Blogpost",
            lockicon: "fas fa-unlock-alt"
        },
        {

            id: 2,
            playicon: "fas fa-play-circle me-2",
            topicname: "basic construction of an extended 12-fold rosette",
            lockicon: "fas fa-unlock-alt"
        },
        {

            id: 3,
            playicon: "fas fa-play-circle me-2",
            topicname: "Bear Awareness Online Safety Training Course",
            lockicon: "fas fa-unlock-alt"
        },
        {

            id: 4,
            playicon: "fas fa-play-circle me-2",
            topicname: "British Pronunciation Secrets",
            lockicon: "fas fa-unlock-alt"
        },

    ]);


    return (
        <>
            <Navbar />
            <style>{"body { background-color: #fff; }"}</style>
            <div className="sec-breadcrumbs d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='cousre_content'>
                                <p className='rating'><i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <span className='total-ranking'>(5.0)</span>
                                </p>
                                <h1 className="course-heading mb-3">Web Design Training with Elementor</h1>
                                <p className='course-desc'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs</p>

                                <div className="d-flex align-items-center owner-detail">
                                    <div className="d-flex flex-row align-items-center ">
                                        <div className='user-images me-3'>
                                            <img src="/images/user-4.avif" alt="user" className="img-fluid" />
                                        </div>
                                        <div className="home-details">
                                            <p className='mb-0 fw-600 owner-name'>Devon Koss</p>
                                        </div>
                                    </div>
                                    <p className='mb-0 ms-5 course-update position-relative'>Last Updated : <span className='text-primary'>
                                        February 14, 2022
                                    </span> </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='mb-5' style={{ marginBottom: "40px" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7 course-nav">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="overview" className='course-nav-link' title="Overview">
                                    <div className='tab-desc'>
                                        <p className='p-tag mb-2'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

                                        <p className='p-tag'> You’ll be exposed to principles and strategies, but, more importantly, you’ll learn how to actually apply these abstract concepts by coding three different websites for three very different audiences. Lorem ipsum is dummy text used in laying out print, graphic or web designs Lorem ipsum</p>

                                        <div className="learn-course-description">
                                            <h2 className='mb-4'>What you will learn?</h2>
                                            <ul className='list-unstyled'>
                                                {
                                                    courselist && courselist.map((data) => {
                                                        return (
                                                            <li className='d-flex justify-content-start align-items-center mb-3' key={data.id}>
                                                                <div style={{ maxWidth: "30px", marginRight: " 10px" }}>
                                                                    <img src={data.img} alt="arrow" style={{ width: "20px" }} />
                                                                </div>
                                                                <p className='mb-0'>{data.text}</p>
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="curriculum" className='course-nav-link' title="Curriculum">
                                    <div className='tab-desc'>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Introduction</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul className='list-unstyled course-curriculum'>

                                                        {
                                                            coursetopic && coursetopic.map((topicdata) => {
                                                                console.log(topicdata.topicname === "basic construction of an extended")
                                                                return (
                                                                    <li className='d-flex justify-content-between align-items-center' key={topicdata.id}>
                                                                        <div>
                                                                            <i className={topicdata.playicon}></i>
                                                                            <span>{topicdata.topicname} </span>
                                                                        </div>
                                                                        <div>

                                                                            {topicdata.topicname == "basic construction of an extended" ? <button className='btn btn-small btn-primary py-1 px-2' style={{ fontSize: "12px" }}>Preview</button> : topicdata.topicname == "quiz" ? <> <button className='btn btn-small btn-primary py-1 px-2 mx-2' style={{ fontSize: "12px" }}>2 Question</button><button className='btn btn-small btn-primary py-1 px-2 mx-2' style={{ fontSize: "12px" }}>2 Question</button><i className="fas fa-unlock-alt"></i></> :
                                                                                <i className="fas fa-unlock-alt"></i>
                                                                            }

                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>The Blog Page</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul className='list-unstyled course-curriculum'>
                                                        {
                                                            blogpost && blogpost.map((blogdata) => {
                                                                return (
                                                                    <li className='d-flex justify-content-between align-items-center' key={blogdata.id}>
                                                                        <div>
                                                                            <i className={blogdata.playicon}></i>
                                                                            <span>{blogdata.topicname}</span>
                                                                        </div>
                                                                        <div>
                                                                            <i className={blogdata.lockicon}></i>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </Tab>
                                <Tab eventKey="instructor" className='course-nav-link' title="Instructor" >
                                    <div className='tab-desc'>
                                        <div className="row">
                                            <div className="col-lg-3 col-12">
                                                <div className="author-image">
                                                    <img src="/images/author.jpg" alt="" />
                                                </div>
                                                <ul className='list-unstyled d-flex my-3'>
                                                    <li className='author-si'><i className=' mx-1 fab fa-facebook'></i></li>
                                                    <li className='author-si'><i className=' mx-1 fab fa-twitter'></i></li>
                                                    <li className='author-si' ><i className=' mx-1 fab fa-linkedin'></i></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-9 col-12">
                                                <h3 className='author-title'>Devon Koss</h3>
                                                <p className='author-desc'>Quinn Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="reviews" className='course-nav-link' title="Reviews" >
                                    <div className='tab-desc'>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-12 mb-2">
                                                <div className="card rating-card">
                                                    <div className="rating_title">5.0</div>
                                                    <p className='rating'><i className='fas fa-star'></i>
                                                        <i className='fas fa-star'></i>
                                                        <i className='fas fa-star'></i>
                                                        <i className='fas fa-star'></i>
                                                        <i className='fas fa-star'></i>
                                                    </p>
                                                    <p className='mb-0'>2 Total</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-12 mb-2">
                                                <ul className='list-unstyled'>
                                                    <li className='reviews-tab mb-2'>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <span>5</span>
                                                                <i className='fas fa-star ms-3'></i>
                                                            </div>
                                                            <div className='w-75 mx-3'>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <p className='mb-0 px-2'>3</p>
                                                        </div>
                                                    </li>
                                                    <li className='reviews-tab mb-2'>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <span>4</span>
                                                                <i className='fas fa-star ms-3'></i>
                                                            </div>
                                                            <div className='w-75 mx-3'>
                                                                <ProgressBar now={50} />
                                                            </div>
                                                            <p className='mb-0 px-2'>2</p>
                                                        </div>
                                                    </li>
                                                    <li className='reviews-tab mb-2'>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <span>3</span>
                                                                <i className='fas fa-star ms-3'></i>
                                                            </div>
                                                            <div className='w-75 mx-3'>
                                                                <ProgressBar now={14} />
                                                            </div>
                                                            <p className='mb-0 px-2'>1</p>
                                                        </div>
                                                    </li>
                                                    <li className='reviews-tab mb-2'>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <span>2</span>
                                                                <i className='fas fa-star ms-3'></i>
                                                            </div>
                                                            <div className='w-75 mx-3'>
                                                                <ProgressBar now={28} />
                                                            </div>
                                                            <p className='mb-0 px-2'>4</p>
                                                        </div>
                                                    </li>
                                                    <li className='reviews-tab mb-2'>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <span>1</span>
                                                                <i className='fas fa-star ms-3'></i>
                                                            </div>
                                                            <div className='w-75 mx-3'>
                                                                <ProgressBar now={10} />
                                                            </div>
                                                            <p className='mb-0 px-2'>2</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h2 className='my-5'>Reviews</h2>
                                        <ul className='review-comments list-unstyled'>
                                            {
                                                review && review.map((reviewData) => {
                                                    return (
                                                        <li className='mb-3' key={reviewData.id}>
                                                            <div className="row my-3">
                                                                <div className="col-lg-3 col-md-3 col-12">
                                                                    <div className="author-image">
                                                                        <img src={reviewData.authorimg} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-9 col-md-9 col-12">
                                                                    <div className='d-flex justify-content-between align-items-center'>
                                                                        <h3 className='review-user-name'>{reviewData.authorName}</h3>
                                                                        <p className='rating'><i className='fas fa-star'></i>
                                                                            <i className='fas fa-star'></i>
                                                                            <i className='fas fa-star'></i>
                                                                            <i className='fas fa-star'></i>
                                                                            <i className='fas fa-star'></i>
                                                                        </p>
                                                                    </div>
                                                                    <p className="review-title ">
                                                                        {reviewData.reviewTitle}
                                                                    </p>
                                                                    <div className="review-text">
                                                                        <p className="review-content">
                                                                            {reviewData.reviewContent}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-end" style={{ marginBottom: "50px" }}>

                {
                    mainCourse.map((val) => {
                        return (
                            <MainCourseCard
                                key={val.id}
                                coursevideo={val.coursevideo}
                                courseprise={val.courseprise}
                            />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Course1
