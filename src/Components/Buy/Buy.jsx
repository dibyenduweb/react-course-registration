/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Buy = ({ selectCourse, remaining,totalHour, totalPrice}) => {
console.log(selectCourse);
    return (
        <div className='text-xl mt-14 ml-12 bg-[ #FFF] w-[312px] h-[355px] '>
            <h2 className='text-xl text-white font-semibold  p-2 rounded-sm  bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>Credit Hour Remaining <span className='text-yellow-500'>{remaining}</span> hr</h2>
            <hr /><br />
            <h1 className='text-2xl font-bold'>Course Name</h1>
            <hr />
            {
                selectCourse.map((course) =>(
                    <li key={course.id} id='li' className='text-slate-500 lg:text-base'>{course.title}</li>
                ))
            }
            <br />
            <p className='mb-4'><span className='font-bold'> Total Credit Hour:</span> <span className='text-red-700 font-semibold'>{totalHour}</span></p>
            <hr />
            <p className='mt-4'><span className='font-bold '> Total Price:</span> <span className='text-blue-900 font-semibold'>{totalPrice}</span>  USD</p>
          </div>
    );
};

export default Buy;