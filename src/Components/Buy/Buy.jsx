/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Buy = ({ selectCourse, remaining,totalHour, totalPrice}) => {
console.log(selectCourse);
    return (
        <div className='text-xl mt-14 ml-12 bg-[ #FFF] w-[312px] h-[355px] '>
            <h2 className='text-xl text-white font-semibold  p-2 rounded-sm  bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'>Credit Hour Remaining <span className='text-yellow-500'>{remaining}</span> hr</h2>
            <hr /><br />
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {
                selectCourse.map((course) =>(
                    <li key={course.id} id='li' className='text-slate-500'>{course.title}</li>
                ))
            }
            <hr /><br /><br />
            <p><span className='font-bold'> Total Credit Hour:</span> <span className='text-red-700 font-semibold'>{totalHour}</span></p>
            <hr />
            <p><span className='font-bold'> Total Price:</span> <span className='text-blue-900 font-semibold'>{totalPrice}</span>  USD</p>
          </div>
    );
};

export default Buy;