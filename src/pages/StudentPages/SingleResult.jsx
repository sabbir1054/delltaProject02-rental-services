import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/FirebaseInit";
const SingleResult = ({ result }) => {
    const [user] = useAuthState(auth);
  
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
              <td>{result.grade}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default SingleResult;
