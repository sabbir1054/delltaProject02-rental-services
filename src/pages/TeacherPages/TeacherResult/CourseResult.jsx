import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import TeacherNav from "../../../Components/NavBars/TeacherNav/TeacherNav";
import auth from "../../../Firebase/FirebaseInit";
import SingleResult from "./SingleResult";

const CourseResult = () => {
  const [user] = useAuthState(auth);
    const params = useParams();
   const [students, setStudents] = useState([]);
  const [data, setData] = useState([]);
  
   useEffect(() => {
     fetch(
       `https://stormy-forest-12943.herokuapp.com/courses/${params.courseId}`
     )
       .then((res) => res.json())
       .then((data) => {
         setData(data);
         setStudents(data.studentList);
       });
   }, []);

  return (
    <div>
      {user ? <TeacherNav /> : <Loader />}
      <Container>
        <h6 className="text-center py-3 pt-5 display-6 ">
          Selected Course: <span className="fw-bold">{params.courseId}</span>
        </h6>
        <div className="result-table">
          <Table striped bordered hover className="pb-5">
            <thead>
              <tr>
                <th>SL no</th>
                <th>Student ID</th>
                {/* <th>Student Email</th> */}
                <th>Quiz 01</th>
                <th>Quiz 02</th>
                <th>Quiz 03</th>
                <th>Assignment</th>
                <th>Presentation</th>
                <th>Mid Term</th>
                <th>Final</th>
                <th>SGPA</th>
                <th>Update/Save</th>
              </tr>
            </thead>
            <tbody>
              {user ? (
                students.map((student) => (
                  <SingleResult
                    student={student}
                    slNo={data.studentList.indexOf(student)}
                  />
                ))
              ) : (
                <Loader />
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default CourseResult;
