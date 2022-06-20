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

  //post data to database
  // const handleUpdate = (data) => {
  //   fetch(`https://stormy-forest-12943.herokuapp.com/users/${userData.email}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // handleUpdate(data);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
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
      setGrade("Fail");
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
          {/* <td>{studentResult.quiz1}</td> */}
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz1}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz2}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.quiz3}
              type="number"
            />
          </td>

          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.assignment1}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.presentation}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.mid}
              type="number"
            />
          </td>
          <td className={`${styles.width}`}>
            <input
              className={`${styles.width}`}
              disabled={isEditable ? false : true}
              defaultValue={studentResult.final}
              type="number"
            />
          </td>
          <td>{grade}</td>
          <td>
            <button className={`btn btn-primary ${isEditable ? "" : "d-none"}`}>
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
