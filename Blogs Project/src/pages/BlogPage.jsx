import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
  const newBaseUrl="https://codehelp-apis.vercel.app/api/"
  const [blog,setBlog]=useState(null);
  const[relatedblogs,setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigate=useNavigate();
  const {setLoading,loading}=useContext(AppContext)
  const blogId=location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs(){
    setLoading(true);
    let url= `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res=await fetch(url);
      const data=await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error in Id call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname]);

  return (
    <div>
      <Header/>
      <div className='my-[100px] flex flex-col items-center justify-center '>
      <div className='w-11/12 max-w-[670px]'>
        <button className='rounded-md border-2 px-4  py-1 mb-3' onClick={()=>navigate(-1)}>
          Back
        </button>
        {
          loading? (<div className='w-11/12 flex flex-col justify-center items-center '><p className="text-center font-bold text-3xl">Loading</p></div>):blog?(
            <div className='flex flex-col items-center'>
              <BlogDetails post={blog}/>
              <h2>Related Blogs</h2>
              {
                relatedblogs.map((post)=>(
                  <div key={post.id}>
                    <BlogDetails post={post}/>
                  </div>
                ))
              }
              </div>
          ):(<div>No Blog Found</div>)
        }
      </div>
      </div>
    </div>
  )
}

export default BlogPage