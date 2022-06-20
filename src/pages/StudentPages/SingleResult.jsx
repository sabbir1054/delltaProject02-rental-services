import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/FirebaseInit";
const SingleResult = ({ result }) => {
  const [user] = useAuthState(auth);
  const [grade, setGrade] = useState("");
    const makeResult = () => {
      const marks =
        parseInt(result.quiz1) +
        parseInt(result.quiz2) +
        parseInt(result.quiz3) +
        parseInt(result.assignment1) +
        parseInt(result.presentation) +
        parseInt(result.mid) +
        parseInt(result.final);

      if (80 <= marks && marks <= 100) {
        setGrade("A+");
      } else if (70 <= marks && marks <= 79) {
        setGrade("A");
      } else if (60 <= marks && marks <= 69) {
        setGrade("A-");
      } else if (50 <= marks && marks <= 59) {
        setGrade("B");
      } else if (40 <= marks && marks <= 49) {
        setGrade("C");
      } else if (0 <= marks && marks <= 39) {
        setGrade("F");
      }
  };
  useEffect(() => {
    makeResult();
  },[])
  return (
    <div>
      {user && result && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Quiz 01</th>
              <th>Quiz 02</th>
              <th>Quiz 03</th>
              <th>Assignment</th>
              <th>Presentation</th>
              <th>Mid Term</th>
              <th>Final</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{result.quiz1}</td>
              <td>{result.quiz2}</td>
              <td>{result.quiz3}</td>
              <td>{result.assignment1}</td>
              <td>{result.presentation}</td>
              <td>{result.mid}</td>
              <td>{result.final}</td>
              <td>{grade}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default SingleResult;
