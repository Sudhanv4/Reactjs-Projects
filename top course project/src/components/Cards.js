import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = ({courses, category}) => {
  const [likedCourses, setLikedCourses]=useState([])
    
    const getCourses=()=>{
      if(category=='All'){
      let allCourses=[];
        console.log("printing")
        console.log(courses)
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>allCourses.push(course))
        })
        return allCourses;
    }
    else{
      return courses[category]
    }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        getCourses().map((course ) => {
           return <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        })
    }
    </div>
  )
}
export default Cards
