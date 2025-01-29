import React from "react";

const Cards = ({courses}) => {
    let allCourses = [];
    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
        })
    })
    return allCourses;
    }

    
    return(
        <div>
            {
                getCourses().map((course)=>{
                    return <card  key={course.id} courses={courses}></card>
                })
            }
        </div>
    )
};
export default Cards;