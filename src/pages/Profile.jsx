import React, { useState, useEffect } from 'react';

//with usestate we will set the students data and set the selected  dept ,selected students and their names to be displayed 

const Profile = () => {
  const [studentData, setStudentData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const [showStudentNames, setShowStudentNames] = useState(false);

  //fetching the data of the students 
  useEffect(() => {
    fetch('/studentdata.json') // Fetching data
      .then((response) => response.json())
      .then((data) => {
        setStudentData(data);
      })
      .catch((error) => console.error('Error fetching student data:', error));
  });

  //events: click department will return the department name and if department name set selected department and shows the studentnames 
  const DepartmentClick = (departmentName) => {
    if (selectedDepartment === departmentName) {
      setSelectedDepartment(''); 
      setShowStudentNames(false);  //hide the list of names 
      // setSelectedStudent(null);  //clear the seleced student data
    } else {
      setSelectedDepartment(departmentName); 
      setShowStudentNames(true); 
    }
  }
  //click th student will give the student details
  const StudentClick = (student) => {
    setSelectedStudent(student); 
  } 
  const filterStudents = (departmentName) => {
    return studentData.filter((department) => department.department === departmentName);
  }
//to select the filtered students if filtered students it will return selecteddepartment else it will return studentData
  const filteredStudents = selectedDepartment
    ? filterStudents(selectedDepartment)
    : studentData;

  if (!studentData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1 className="profile-heading">Student Profiles</h1>
      {!selectedDepartment && ! selectedStudent && (
        <div className="Course-department">
          <button className="department-btn" onClick={() => DepartmentClick('Computer Science')}>Computer Science</button>
          <button className="department-btn" onClick={() => DepartmentClick('Electrical Engineering')}>Electrical Engineering</button>
          <button className="department-btn" onClick={() => DepartmentClick('MCA')}>MCA</button>
          <button className="department-btn" onClick={() => DepartmentClick('BCA')}>BCA</button>
        </div>
      )}
      {showStudentNames && selectedDepartment && (
        <div className="student-names">
          <h2>{selectedDepartment} Students</h2>
          <ul>
            {filteredStudents.length > 0 &&
              filteredStudents[0].students.map((student, idx) => (
                <li key={idx} onClick={() => StudentClick(student)} >
                  {student.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      {selectedStudent && (
        <div className="student-details">
          <h3>{selectedStudent.name}</h3>
          <p><strong>Class:</strong> {selectedStudent.class}</p>
          <p><strong>Email:</strong> {selectedStudent.email}</p>
          <p><strong>Phone:</strong> {selectedStudent.phone_number}</p>
          <p><strong>DOB:</strong> {selectedStudent.date_of_birth}</p>
          <p>Gender: {selectedStudent.gender}</p>
          <h4>Internship Experience</h4>
          {selectedStudent.internships.map((internship, idx) => (
            <div key={idx}>
              <p><b>Title:</b> {internship.title}</p>
              <p><b>Company:</b> {internship.company}</p>
              <p><b>Role:</b> {internship.role}</p>
              <p><b>Duration:</b> {internship.duration}</p>
              <p><b>Project Description:</b> {internship.project_description}</p>
            </div>
          ))}
          <h4>Academic Goals</h4>
          <ul>
            {selectedStudent.academic_goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
          <h4>Skills</h4>
          <ul>
            {selectedStudent.skills.technical_skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <h4>Languages Spoken</h4>
          <ul>
            {selectedStudent.skills.languages_spoken.map((language, idx) => (
              <li key={idx}>{language}</li>
            ))}
          </ul>
        </div>
      )}

      {(selectedDepartment || selectedStudent) && (
        <div className='back'>
          <button  onClick={() => setSelectedDepartment('')} className='back-btn'>Back to Department List</button>
        </div>
        
      )}
    </div>
  );
};

export default Profile;