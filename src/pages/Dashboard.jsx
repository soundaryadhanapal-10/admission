import React, { useState, useEffect } from 'react';

const board = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('/data.json') 
      .then(response => response.json())
      .then(fetchedData => {
        setData(fetchedData[0]); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="dashboard">
      <h1>{data.college}</h1>

      {data.departments.map((department, index) => (
        <div key={index} className="department">
          <h2>{department.name}</h2>
          <div className="students">
            {department.students.map((student, idx) => (
              <div key={idx} className="student">
                <h3>{student.name}</h3>
                <p>Class: {student.class}</p>
                <p>CGPA: {student.cgpa}</p>
                <p>10th Percentage: {student["10th_percentage"]}%</p>
                <p>12th Percentage: {student["12th_percentage"]}%</p>
                <p>Interested Field: {student.interested_work_field}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default board;
