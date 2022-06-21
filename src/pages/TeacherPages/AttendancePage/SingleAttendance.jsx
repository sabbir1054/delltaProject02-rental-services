import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import TeacherNav from "../../../Components/NavBars/TeacherNav/TeacherNav";
import auth from "../../../Firebase/FirebaseInit";
import SingleAttenStudent from "./SingleAttenStudent";

const SingleAttendance = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const [singleAttendance, setSingleAttendance] = useState({});

  useEffect(() => {
    fetch(
      `https://stormy-forest-12943.herokuapp.com/attendance/${params.courseId}/${params.date}`
    )
      .then((res) => res.json())
      .then((data) => setSingleAttendance(data[0]));
  }, []);
  console.log(singleAttendance);
  return (
    <>
      {user ? (
        <div>
          <TeacherNav />
          <Container>
            <h4 className="text-center py-3">Attendance List </h4>
            <div>
              <h5>Course ID: {params.courseId}</h5>
              <h5>Date : {params.date}</h5>
            </div>
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>Student Id</th>
                  {/* <th>Student Name</th>
                  <th>Student Mail</th> */}
                </tr>
              </thead>
              <tbody>
                {user&&singleAttendance.stuList ? (
                  singleAttendance.stuList.map((stu) => (
                    <SingleAttenStudent
                      student={stu}
                    />
                  ))
                ) : (
                  <Loader />
                )}
              </tbody>
            </Table>
          </Container>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleAttendance;
