/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Buy = ({ selectCourse }) => {
console.log(selectCourse);
    return (
        <div className='text-xl mt-14 ml-24 bg-[ #FFF] w-[312px] h-[355px] '>
            <h2 className='text-xl text-blue-600 font-semibold'>Credit Hour Remaining {selectCourse.lenght} hr</h2>
            <hr /><br />
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {
                selectCourse.map((course) =>(
                    <li key={course.id} id='li'>{course.title}</li>
                ))
            }
            <hr /><br /><br />
            <p>Total Credit Hour:</p>
            <hr />
            <p>Total Price:0000 USD</p>
          </div>
    );
};

export default Buy;