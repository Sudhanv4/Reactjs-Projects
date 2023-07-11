import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const TagPage = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='mt-[100px] flex flex-col items-center'>
            <div className='w-11/12 max-w-[670px]'>
            <button 
            className='rounded-md  border-2 px-4 py-1 mb-3'
            onClick={()=>navigate(-1)}>
                Back
            </button>
            <h2 className='text-xl font-bold '>
                Blogs Tagged <span >{tag}</span>
            </h2>
            </div>
        </div>
        <div className='mb-[100px] flex flex-col items-center '>
       
        <Blogs/>
        <Pagination/>
        </div>
    </div>
  )
}

export default TagPage