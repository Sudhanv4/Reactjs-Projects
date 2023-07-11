import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <div className="my-[100px] flex flex-col items-center ">
        <Blogs/>
        <Pagination/>
        </div>
        
    </div>
  )
}

export default Home