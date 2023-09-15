/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import Buy from '../Buy/Buy';
const Home = () => {
const[allCourse, setAllCourse] = useState([]);
const[selectCourse, setSelectCourse] = useState([]);
const[remaining, setRemaining] =useState(20);
const[totalHour, setTotalHour] = useState(0);
const[totalPrice, setTotalPrice] =useState(0);



    useEffect(() => {
            fetch("./coursedata.json")
            .then((res) => res.json())
            .then((data)=>setAllCourse(data));
    },[]);

  const handleSelectCourse = (course) => {
    const isSelected = selectCourse.find((item) => item.id ==course.id);
    let count = course.credit;
    let addPrice = course.price;

   if(isSelected){
    alert('You have already added in course');
   }else{
        selectCourse.forEach((item) => {
          count =count + item.credit;
          addPrice = addPrice + item.price;
        });
        const totalRemaining =20 - count;
        if(totalRemaining  <0){
          alert('baag bokachoda taka nai aar')
        }else{
          setTotalPrice(addPrice);
        setTotalHour(count);
        setRemaining(totalRemaining);
        setSelectCourse([...selectCourse, course]);
        }

        
   }

  };



//console.log(allCourse);
    return (
<div className='flex'>
<div className='grid grid-cols-3 gap-4 ml-14 p-4'>
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
          <Buy selectCourse={selectCourse} remaining = {remaining} totalHour={totalHour} totalPrice={totalPrice}></Buy>
</div>

    );
};

export default Home;