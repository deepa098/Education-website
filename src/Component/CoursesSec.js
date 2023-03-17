
import React from 'react'
import CourseCard from './CourseCard';
import CourseData from './CourseData'

const CoursesSec = () => {
    return (
        <>
            <section className='py-4' id='course'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <span className='small-heading primary-text'>Trending Courses</span>
                            <h2 className='heading2 f-30 pt-2 fw-500'>Popular Online Courses <br /> Around You</h2>
                            <p className='p-tag pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolores</p>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className="row">
                            {
                                CourseData.map((val) => {
                                return (
                                    <CourseCard
                                        key = {val.id}
                                        courseimage = {val.courseimage}
                                        courseType = {val.courseType}
                                        coursePrise = {val.coursePrise} 
                                        courseName = {val.courseName} 
                                        totalLec = {val.totalLec}
                                        totalstudent = {val.totalstudent}
                                        rating = {val.rating}
                                        ranking = {val.ranking}
                                    />
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CoursesSec
