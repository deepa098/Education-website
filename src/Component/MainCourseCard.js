import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const MainCourseCard = (props) => {
    
    const navigate = useNavigate();

    const [coursedetails, setcourseDetails] = useState([
        {
            id: 1,
            iconimg: "/images/duration.png",
            listTitle: "Duration",
            listtag: "25 hours"
        },
        {
            id: 2,
            iconimg: "/images/lesson.png",
            listTitle: "Lesson",
            listtag: "12 Lesson"
        },
        {
            id: 3,
            iconimg: "/images/enroll.png",
            listTitle: "Enrolled",
            listtag: "5 students"
        },

        {
            id: 4,
            iconimg: "/images/user.png",
            listTitle: "Instructor",
            listtag: "Devon Koss"
        },
        {
            id: 5,
            iconimg: "/images/level.png",
            listTitle: "Level",
            listtag: "Beginner"
        }

    ]);

    return (
        <>
        
            <div className="course-section position-absolute">
                <div className='courseVideo'>
                    <img src={props.coursevideo} alt="course" className='img-fluid' />
                </div>
                <div className="course-detail">
                    <div className="coursePrise">
                    {props.courseprise}
                    </div>
                    <button className='primary-btn btn w-100'  onClick={() => navigate("/Login")}>Login</button>
                </div>
                <div className="courseDesc">
                    <ul className='list-unstyled'>

                        {
                            coursedetails && coursedetails.map((list) => {
                                return (
                                    <li className='d-flex justify-content-between align-items-center my-1' key={list.id}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className="list_image">
                                                <img src={list.iconimg} alt="duration" className='img-fluid' />
                                            </div>
                                            <span className="list_title">{list.listTitle}</span>
                                        </div>
                                        <div className='list_data'>
                                            <p className='mb-0 p-tag'>{list.listtag}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='btn primary-outline-btn w-100 my-3'><i className='fa fa-share-alt me-2'></i> Share This Course</button>
                </div>
            </div>
        </>
    )
}

export default MainCourseCard
