import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [studentData, setStudentData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(''); 

  useEffect(() => {
    fetch('/studentdata.json') 
      .then((response) => response.json())
      .then((data) => {
        setStudentData(data); 
      })
      .catch((error) => console.error('Error fetching student data:', error));
  }, []);

  const DepartmentClick = (departmentName) => {
    setSelectedDepartment(departmentName); 
  };

  const filterStudents= (departmentName) => {
    return studentData.filter((department) => department.department === departmentName);
  };
  const filteredStudents = selectedDepartment
    ? filterStudents(selectedDepartment)
    : studentData;

  if (!studentData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>Student Profiles</h1>
      <div className="profile_department">
        <button onClick={() => DepartmentClick('Computer Science')}>Computer Science</button>
        <button onClick={() => DepartmentClick('Electrical Engineering')}>Electrical Engineering</button>
        <button onClick={() => DepartmentClick('MCA')}>MCA</button>
        <button onClick={() => DepartmentClick('BCA')}>BCA</button>
      </div>

      <div className="students">
        {filteredStudents.length === 0 ? (
          <div>No students found for this department.</div>
        ) : (
          filteredStudents.map((department, index) => (
            <div className="student" key={index}>
              {department.students.map((student, studentIndex) => (
                <div key={studentIndex}>
                  <h3>{student.name}</h3>
                  <p>Class: {student.class}</p>
                  <p>Email: {student.email}</p>
                  <p>Phone number: {student.phone_number}</p>
                  <p>DOB: {student.date_of_birth}</p>
                  <p>Gender: {student.gender}</p>
                  <p>Street: {student.address.street}</p>
                  <p>City: {student.address.city}</p>
                  <p>State: {student.address.state}</p>
                  <p>Pin code: {student.address.pin_code}</p>
                  <h4>Internship Experience</h4>
                  {student.internships.map((internship, idx) => (
                    <div key={idx}>
                      <p>Title: {internship.title}</p>
                      <p>Company: {internship.company}</p>
                      <p>Role: {internship.role}</p>
                      <p>Duration: {internship.duration}</p>
                      <p>Project Description: {internship.project_description}</p>
                    </div>
                  ))}
                  <h4>Academic Goals:</h4>
                  <ul>
                    {student.academic_goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                  <h4>Skills</h4>
                  <ul>
                    {student.skills.technical_skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                  <h4>Languages Spoken</h4>
                  <ul>
                    {student.skills.languages_spoken.map((language, idx) => (
                      <li key={idx}>{language}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
