import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleResult from "./SingleResult";

const CourseResult = () => {
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
      <Container>
        <h6 className="text-center py-3 display-6 ">
          Selected Course: <span className="fw-bold">{params.courseId}</span>
        </h6>
        <div className="result-table">
          <Table striped bordered hover className="pb-5">
            <thead>
              <tr>
                <th>SL no</th>
                <th>Student ID</th>
                <th>Quiz 01</th>
                <th>Quiz 02</th>
                <th>Quiz 03</th>
                <th>Student Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <SingleResult
                  student={student}
                  slNo={data.studentList.indexOf(student)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default CourseResult;
