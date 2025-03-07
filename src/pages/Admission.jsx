// import { response } from 'express'
import React, { useState }  from 'react'

export const Admission = () => {
  const[values, setValues]=useState ({
    firstname:"",
    lastname:"",
    email:" ",
    Contact:"",
    gender:" ",
    subject:" ",
    Marksheet:" ",
    about:" "
  })
  const handlechanges= (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
  }
  const handlechange=(e) =>{
    setValues({...values, [e.target.name]:[e.target.value]})
  }
  const handlesubmit= (e)=>{
    e.preventDefault()
    alert('Applied successfully')
    console.log(values)
  }
return (
    <div className='Details'>
    <div className='admission'>
      <form onSubmit={handlesubmit}>      
      <h1>Admission Form</h1> <br/> 
        <div className='form-top'>
        <label for='firstname'>First Name</label>
          <input type='text' placeholder='Enter Firstname' name='firstname' onChange={ (e)=> handlechanges (e)}required/>
        <label for='lastname'>last Name</label>
          <input type='text' placeholder='Enter Lastname' name='lastname'onChange={ (e)=>handlechanges (e)} required/>
        <label for='email'>Email</label>
        <input type='email' placeholder='Enter Email' name='email' onChange={ (e)=>handlechanges (e)} required/>

        <label for='Contact'>Contact</label>
         <input type='number' placeholder='Enter Contact' name='contact' onChange={ (e)=>handlechanges (e)} required/>

        <label for='gender'>Gender</label>
        <select id='gender' name='gender' placeholder="gender" onChange={ (e)=>handlechanges (e)}  required >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <label for='subject'>Department</label>
        <select  id='subject'name='subject'placeholder="department" onChange={ (e)=>handlechanges (e)}  required>
          <option value="CSE">CSE</option>
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
        </select>
        <label for='Marksheet'>Marksheet</label>
        <input type='file' name="Marksheet" onChange={ (e)=>handlechange (e)} required/>
      </div>

      <div className='form-bottom'>
        <label for='about'>About</label>
        <textarea id='about' name='about' cols="15" rows="15"
        onChange={ (e)=>handlechanges (e)} placeholder='Enter Description'></textarea>
        
        <button type="submit">Apply Now</button>
      </div>
      </form>
      <div className='download'>
        <a className=" " download>Download Marksheet</a>
        </div>

      <div className='paragraph'>
        <p>ABC is one of the top-ranking universities in India, offering a wide range of undergraduate, postgraduate, and doctoral programs across six faculties: Engineering & Technology, Management, Medicine & Health Sciences, Science & Humanities, Law and Agricultural Sciences. Foreign faculty, a flexible and dynamic curriculum, exciting research opportunities and global connections are features that set ABC apart from other institutions.</p>

        <h2>B.Tech/M.Tech (Integrated) - SRMJEEE Application 2025</h2>
      
        <button type='submit'>Steps To Follow</button>

      </div>
       
        <div className='steps'>
          <div className='steps-card'>
            <img src='profile.jpg'></img>
            <p>Register Yourself</p>

          </div>
          <div className='steps-card'>
            <img src='email.png'></img>
            <p>Verify via Email</p>

          </div>
          <div className='steps-card'>
            <img src='application.jpeg'></img>
            <p>Fill the application from Online</p>

          </div>
          <div className='steps-card'>
            <img src='upload file.jpg'></img>
            <p>Upload Required documents</p>

          </div>
          <div className='steps-card'>
            <img src='fee.png'></img>
            <p>pay Application fees</p>

          </div>
        </div>
      </div>
     
      </div>  
  )
}
