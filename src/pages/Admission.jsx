// import { response } from 'express'
import React, { useState }  from 'react'

export const Admission = () => {
  const[values, setValues]=useState ({
    firstname:"",
    lastname:"",
    email:" ",
    Contact:" ",
    gender:" ",
    subject:" ",
    Marksheet:" ",
    about:" "
  })
  const handlechanges= (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
  }
  const handlesubmit= (e)=>{
    e.preventDefault()
    alert('Applied successfully')
    console.log(values)
  }


//  const pdf_file_url="http://http://localhost:5173/admission/SOUNDARYA Resume 3 (1).pdf"
// function pdf(){
// const downloadFileAtURL=(url)=> {
//    const filename= url.split('/').pop()
//    const aTag = document.createElement('a')
//    aTag.href=url
//    aTag.setAttribute('download',filename);
//    document.body.appendChild(aTag);
//    aTag.click();
//    aTag.remove();
//  }
// }
  
  return (
    <div className='Details'>
    <div className='admission'>
      {/* for submit create onsubmit in the form tag */}
      <form onSubmit={handlesubmit}>      
      <h1>Admission Form</h1> <br/>
        <div className='form-top'>
        <label htmlFor='firstname'>First Name</label>
          <input type='text' placeholder='Enter Firstname' name='firstname' onChange={ (e)=> handlechanges (e)}required/>
        <label htmlFor='lastname'>last Name</label>
          <input type='text' placeholder='Enter Lastname' name='lastname'onChange={ (e)=>handlechanges (e)} required/>
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter Email' onChange={ (e)=>handlechanges (e)} required/>

        <label htmlFor='Contact'>Contact</label>
        <input type='number' placeholder='Enter Contact' onChange={ (e)=>handlechanges (e)} required/>

        <label htmlFor='gender'>Gender</label>
        <select name='gender' id='gender'onChange={ (e)=>handlechanges (e)} required >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <label htmlFor='subject'>Subject</label>
        <select name='subject' id='subject' onChange={ (e)=>handlechanges (e)} required>
          <option value="math">Math</option>
          <option value="physics">physics</option>
          <option value="English">English</option><br/>
        </select>
        <label htmlFor='Marksheet'>Marksheet</label>
        <input type='file'placeholder='select Marksheet'name="Marksheet" onChange={ (e)=>handlechanges (e)} required/>
      </div>

      <div className='form-bottom'>
        <label htmlFor='about'>About</label>
        <textarea name='about' id='about' cols="15" rows="15"
        onChange={ (e)=>handlechanges (e)} placeholder='Enter Description'></textarea>
        
        <button type="submit">Apply Now</button>
      </div>
      </form>
      <div className='download'>
        <a className=" "href="/SOUNDARYA RESUME.pdf (1).pdf" download>Download Marksheet</a>
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
