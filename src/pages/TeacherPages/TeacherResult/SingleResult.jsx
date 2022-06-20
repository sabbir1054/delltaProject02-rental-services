import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/FirebaseInit";
import styles from "./table.module.css";
const SingleResult = ({ student, slNo }) => {
  const params = useParams();
  const selectedCourse = params.courseId;
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [studentResult, setStudentResult] = useState({});
  const [grade, setGrade] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [newData, setNewData] = useState({});
  const newResult = {};

  //post data to database
  const handleUpdate = () => {
    console.log(newResult);
    //   fetch(`https://stormy-forest-12943.herokuapp.com/users/${userData.email}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(newResult),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  };


  const onSubmit = () => {
    const quiz1 = document.getElementById('quiz1').value;
    const quiz2 = document.getElementById('quiz2').value;
    const quiz3 = document.getElementById('quiz3').value;
    const assignment1 = document.getElementById('assignment1').value;
    const presentation = document.getElementById('presentation').value;
    const mid = document.getElementById('mid').value;
    const final = document.getElementById('final').value;
    
    //set in the object
    newResult.quiz1 = quiz1;
    newResult.quiz2 = quiz2;
    newResult.quiz3 = quiz3;
    newResult.assignment = assignment1;
    newResult.presentation = presentation;
    newResult.mid = mid;
    newResult.final = final;
    newResult.grade = grade;

    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 500);
    handleUpdate();
    saveProfile();
  };

  const updateProfile = () => {
    setIsEditable(true);
  };
  const saveProfile = () => {
    setIsEditable(false);
  };

  //get user information
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${student}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  //get user result
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
  // make student grade
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
      setGrade("F");
    }
  };
  setTimeout(() => {
    makeResult();
  }, 1000);

  return (
    <>
      {user ? (
        <tr>
          <td>{slNo + 1}</td>
          <td>{data.id}</td>

          <td className={`${styles.width}`}>
            <input
              id="quiz1"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz1}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              id="quiz2"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz2}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              id="quiz3"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz3}
              type="number"
            />
          </td>

          <td className={`${styles.width}`}>
            <input
              id="assignment1"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.assignment1}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              id="presentation"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.presentation}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              id="mid"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.mid}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              id="final"
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.final}
              type="number"
            />
          </td>
          <td>{grade}</td>
          <td>
            <button
              className={`btn btn-primary ${isEditable ? "" : "d-none"}`}
              onClick={onSubmit}
            >
              Save
            </button>
            <button
              className={`btn btn-warning ${isEditable ? "d-none" : ""}`}
              onClick={updateProfile}
            >
              Update
            </button>
          </td>
        </tr>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleResult;
