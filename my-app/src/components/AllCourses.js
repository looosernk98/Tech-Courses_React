import React, { useState } from "react";
import Course from "./course";


const AllCourses=()=>{

    const[courses,setCourses]=useState([
        {title:"java course", Description:"This is a java demo course"},
        {title:"django course",Description:"This is a django demo course"},
        {title:"Python course",Description:"This is a python demo course"},
        {title:"Reactjs course",Description:"This is a Reactjs demo course"}
    ])

    return (
        <div>
           <h1>All Courses</h1>
           <p>List of courses are as follows</p>
           {

              courses.length>0 ? courses.map((item)=>(
                  <Course course={item}/>
              )):"No course available"

           }
        </div>
    )
}
export default AllCourses;