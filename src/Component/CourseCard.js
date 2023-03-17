import React from 'react'

import { useNavigate } from "react-router-dom";



const CourseCard = (props) => {

    const navigate = useNavigate();
    
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3">
                <div className="card course-card">
                    <div className="course-image">
                        <img src={props.courseimage} alt="course" />
                    </div>
                    <div className="course-details px-2">
                        <div className="d-flex justify-content-between mt-3 mb-2">
                            <p className="small-heading primary-text course-type">{props.courseType}</p>
                            <div className="prise">{props.coursePrise}</div>
                        </div>
                        <h3 className='course-name'>
                            {props.courseName}
                        </h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='total-lecture'>
                                <i className='fas fa-edit me-2'></i>
                                {props.totalLec} Lectures
                            </p>
                            <p className='total-student'>
                                <i className='fas fa-users me-2'></i>
                                {props.totalstudent} student
                            </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='rating'>{props.rating} <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <span className='total-ranking'>{props.ranking}</span>
                            </p>
                            <button className='btn primary-btn btn-small py-1' onClick={() => navigate("/Course1")}>
                            Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard;
