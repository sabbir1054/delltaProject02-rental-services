import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import TeacherNav from "../../../Components/NavBars/TeacherNav/TeacherNav";
import auth from "../../../Firebase/FirebaseInit";

const Attendance = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(
      `https://stormy-forest-12943.herokuapp.com/attendance/${params.courseId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data);
      });
  }, []);


  //   const newData = {
  //     courseId: "152",
  //     date: "21/06/2022",
  //     stuList: ["114782", "114785", "36985"],
  //   };

  //   //post result data function

  //   const postResultData = () => {
  //     const url = "https://stormy-forest-12943.herokuapp.com/attendance";

  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newData),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   };

  return (
    <>
      {user ? (
        <div>
          <TeacherNav />
          <Container className="py-5">
            Attendance of :<h4> Course ID: {params.courseId}</h4>
            {attendance?attendance.map((atten) => (
              <Link to={`/attendance/${params.courseId}/${atten.date}`}>
                <button className="btn btn-primary mx-2">
                  Date: {atten.date}
                </button>
              </Link>
            )):<Loader/>}
          </Container>
        </div>
      ):<Loader/>}
    </>
  );
};

export default Attendance;
