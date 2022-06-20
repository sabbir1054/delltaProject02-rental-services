import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/FirebaseInit";

const SingleResult = ({ student, slNo }) => {
  const params = useParams();
  const selectedCourse = params.courseId;
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [studentResult, setStudentResult] = useState({});
  const [grade, setGrade] = useState('');
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${student}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/results/${student}`)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((res) => {
          if (res.courseId === selectedCourse) {
            setStudentResult(res);
          }
        });
      });
  }, []);

  const makeResult = () => {
    const marks =
      parseInt(studentResult.quiz1) +
      parseInt(studentResult.quiz2) +
      parseInt(studentResult.quiz3) +
      parseInt(studentResult.assignment1) +
      parseInt(studentResult.presentation) +
      parseInt(studentResult.mid) +
      parseInt(studentResult.final);
 
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
      setGrade("Fail");
    }

    
  }
  setTimeout(() => {
    makeResult();
  }, 1000);

  return (
    <>
      {user ? (
        <tr>
          <td>{slNo + 1}</td>
          <td>{data.id}</td>
          <td>{studentResult.quiz1}</td>
          <td>{studentResult.quiz2}</td>
          <td>{studentResult.quiz3}</td>
          <td>{studentResult.assignment1}</td>
          <td>{studentResult.presentation}</td>
          <td>{studentResult.mid}</td>
          <td>{studentResult.final}</td>
          <td>{grade}</td>
          
        </tr>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleResult;
