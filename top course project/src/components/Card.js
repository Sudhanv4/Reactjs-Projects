import React, { useState } from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc'
import {toast} from "react-toastify" 

const Card = ({course ,likedCourses,setLikedCourses}) => {

    const [readMore,setReadMore]=useState(false);

    function descHandler(){
        setReadMore(!readMore);
    }

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)))
            toast.warning('like removed')
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }else{
                setLikedCourses((prev)=>[...prev, course.id])
            }
            toast.success("Liked successfully")
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative '>
            <img src={course.image.url}></img>
        
            <div>
                <button onClick={clickHandler} className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    {
                        likedCourses.includes(course.id)? <FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>
                    }
                    
                </button>
            </div>
            </div>
        
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>{ readMore? course.description : course.description.substr(0,100)+'...'}
            </p>
            <button>
                <p className='text-[#6495ED]' onClick={descHandler}>{readMore? "Show Less": "Read More"}</p>
            </button>
        </div>
    </div>
  )
}
export default Card
