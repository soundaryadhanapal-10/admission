// const course = "HTML"


// function Components (){
//     return (
//         <>
//         <nav>
//             <h2>Code Io</h2>
//             <button>login</button>
//             <h3>{course}</h3>
//         </nav>
//         <h3>functional components</h3>
//         </>
//     );
// }

// export default Components;

// import React from 'react';
// // import { useEffect } from 'react';
// import { useState } from 'react';

// const About = () => {
//     const [first,Setfirst]= useState(1);
//     const [second,Setsecond]=useState(5); 
   
//     // const getdata = ()=>{
//     //     console.log("Data received");
//     // };
//     // useEffect(() => {
//     //     getData(); 
//     //   }, []);
//   return (
//     <div>
//         <h1>Book</h1>
//     <h1>department:{first}</h1>
//     <h1>course:{second}</h1>
//     <button onClick={()=>Setfirst((curr)=>curr+1)}>Add first</button>
//     <button onClick={()=>Setsecond((curr)=>curr+1)}>Add second</button>
//     </div>
   
//   )
// }
 
// export default About;


import React, { useEffect, useState } from 'react';

const Context = () => {
  const [isVisible, setIsVisible] = useState(false); // Toggle visibility
  const [authorData, setAuthorData] = useState(null); // Store author data

  // Toggle visibility function
  function toggleVisibility() {
    setIsVisible(prevState => !prevState);
  }

  // Fetch data on component mount
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setAuthorData(data); // Set the author data
      })
      .catch((error) => console.error('Error fetching author data:', error));
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <>
    <div className='book'>
      <h2>Art Of Happiness</h2>
      <h1>Context</h1>
      <p>Happiness is reached by keeping peace with others and one's self, which can be reached through meditation and community service.</p>
    </div>
    <div>
      <button className="btn" onClick={toggleVisibility}>Context of the book</button>

      {/* Show the data when the "mine" div is visible */}
      {isVisible && authorData && (
        <div id="mine">
          <h2>Author: {authorData[0].Author}</h2>
          {authorData[0].Books.map((book, index) => (
            <div key={index}>
              <h3>Book: {book.Name}</h3>
              <p>Title: {book.Title}</p>
              <div>
                <h4>Part 1:</h4>
                <ul>
                  {Object.values(book.part1[0]).map((chapter, chapterIndex) => (
                    <li key={chapterIndex}>{chapter}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Part 2:</h4>
                <ul>
                  {Object.values(book.part2[0]).map((chapter, chapterIndex) => (
                    <li key={chapterIndex}>{chapter}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Context;
