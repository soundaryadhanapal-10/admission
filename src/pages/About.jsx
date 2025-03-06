'use client'
import React, { useState } from 'react'


const About=()=>{
         const[fullcontent,showfullcontent]=useState(false)
         const togglecontent=()=>{
            showfullcontent(!fullcontent);
         };
    
  return (
    
    <div className='banner'>
   <div className='about'>
   <h1 id='about'>About</h1>
    <p className='text' >It serves as a digital hub where students can view and update their personal details, track their admission status,and access key documents required for enrollment. The portal also includes resources for career development, including placement notifications, internship opportunities, and job openings.</p>
    {fullcontent &&(<p className='text'>By providing a comprehensive overview of students’ academic journeys and career paths, the portal ensures a seamless experience for both current and prospective students. It aims to support students throughout their academic and professional journeys, offering tools to enhance their learning and career growth.</p>)}
    
    <button className='btn' type='submit' onClick={togglecontent}>{fullcontent ? 'Read Less' : 'Read More'}</button>
       
    </div>
    </div>  

  )
};

export default About;

















