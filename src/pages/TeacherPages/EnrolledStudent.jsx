import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import TeacherNav from "../../Components/NavBars/TeacherNav/TeacherNav";
import auth from "../../Firebase/FirebaseInit";
import SingleEnrolled from "./SingleEnrolled";

const EnrolledStudent = () => {
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
    <div className="bg-light">
      <TeacherNav></TeacherNav>
      <Container className="">
        <h4 className=" pt-5">Course ID : {params.courseId}</h4>
        <h4 className=" pb-5">Course Title : {data.courseTitle}</h4>
        <h4 className="text-center pb-3">Enrolled Student List</h4>
        <Table striped bordered hover className="pb-5">
          <thead>
            <tr>
              <th>SL no</th>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Student Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
               
              <SingleEnrolled student={student} slNo = {data.studentList.indexOf(student)} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EnrolledStudent;
