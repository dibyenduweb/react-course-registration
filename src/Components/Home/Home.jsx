/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import Buy from '../Buy/Buy';
const Home = () => {
const[allCourse, setAllCourse] = useState([]);
const[selectCourse, setSelectCourse] = useState([]);

    useEffect(() => {
            fetch("./coursedata.json")
            .then((res) => res.json())
            .then((data)=>setAllCourse(data));
    },[]);

  const handleSelectCourse = (course) => {
    const isSelected = selectCourse.find((item) => item.id ==course.id);
   if(isSelected){
    alert('You have already added in course');
   }else{
    setSelectCourse([...selectCourse, course]);
   }
        
  };



//console.log(allCourse);
    return (
<div className='flex'>
<div className='grid grid-cols-3 gap-4 ml-14'>
    {/* This card style */}
    
          {
            allCourse.map((course) =>(
                <div className='rounded-md w-[280px]  bg-white mt-14 ml-14 '>
           <img src={course.img} alt="" />
           <h2 className='text-lg font-semibold text-center'>{course.title}</h2>
           <p className='ml-4'>{course.paragraph}</p>
            <div className='flex ml-4 gap-4 mt-4'>
            <i className='mt-1'><FiDollarSign></FiDollarSign></i>
            <p> Price:{course.price} </p>
            <i className='mt-1'><BsBook></BsBook></i>
            <p>Credit:{course.credit}hr</p>
            </div>
           <button onClick={()=>handleSelectCourse(course)} className='text-white rounded-md text-center bg-gradient-to-r from-sky-400 to-blue-500 w-[280px] h-[40px] mt-6 '>Select</button>
</div>
            ))
          }
          </div>
          <Buy selectCourse={selectCourse}></Buy>
</div>

    );
};

export default Home;