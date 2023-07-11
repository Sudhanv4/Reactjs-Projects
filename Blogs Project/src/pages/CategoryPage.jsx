import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'

const CategoryPage = () => {
  const location=useLocation()
  const navigate=useNavigate();
  const category =location.pathname.split('/').at(-1);
  return (
    <div>
      <Header/>
      <div  className='mt-[100px] flex flex-col items-center'>
        <div className='w-11/12 max-w-[670px]'>
        <button 
        className='rounded-md  border-2 px-4 py-1 mb-3'
        onClick={()=>navigate(-1)}>
          Back 
        </button>
        <h1 className='text-xl font-bold '>Blogs on <span>{category}</span></h1>
        </div>
      </div>
      <div className='mb-[100px] flex flex-col items-center '>
      <Blogs/>
        <Pagination/>
        </div>
    </div>
  )
}

export default CategoryPage