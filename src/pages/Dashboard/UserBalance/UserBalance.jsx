import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import StudentNav from "../../../Components/NavBars/StudentsNav/StudentNav";
import TeacherNav from "../../../Components/NavBars/TeacherNav/TeacherNav";
import auth from "../../../Firebase/FirebaseInit";
import styles from "../Dashboard.module.css";
const UserBalance = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
      .then((rs) => rs.json())
      .then((data) => setPerson(data));
  }, []);

  return (
    <>
      {user ? (
        <div>
          {
            person.role==="student"?<StudentNav />:<TeacherNav/>
          }
          <Container className="mt-5">
            <Row className={` rounded ${user.role==="student"?styles.stu_heading:styles.teacher_heading} mb-5`}>
              <Col md={8} className="pt-4 ps-4 text-white">
                <h3 className="display-5 text-uppercase">
                  Hi ! {user && person.name}{" "}
                </h3>
                <p className="fs-4">Explore Transaction History</p>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
                <div>
                  <h3 className="display-5 text-uppercase text-white pt-4">
                    {user && person.balance}{" "}
                  </h3>
                  <p className="fs-4 text-white text-center fw-bold">
                    Net Balance
                  </p>
                </div>
              </Col>
            </Row>
            <h3 className="text-center">Last Transaction History</h3>
            {user && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Payment Purpose</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tuition Fee</td>
                    <td>1200</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Container>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default UserBalance;
