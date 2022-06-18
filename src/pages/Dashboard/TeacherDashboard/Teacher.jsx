import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "../../../Components/Loader/Loader";
import TeacherNav from "../../../Components/NavBars/TeacherNav/TeacherNav";
import styles from "../Dashboard.module.css";
import SubjectCard from "../StudentDashboard/SubjectCard";
import TeacherSubjectCard from "./TeacherSubjectCard";
const Teacher = ({ user }) => {
  // const [user] = useAuthState(auth);
  return (
    <>
      <TeacherNav />
      <Container className="bg-light py-5">
        <div className={``}>
          <Container className="">
            <Row className={` rounded ${styles.teacher_heading}`}>
              <Col md={8} className="pt-4 ps-4 text-white">
                <h3 className="display-5 text-uppercase">
                  WELCOME BACK! {user.name}{" "}
                </h3>
                <p className="fs-4">Explore Your Galaxy</p>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/XS7R7Dh/teacher.png"
                  alt=""
                  className="img-fluid"
                  width={250}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className=" py-5 balances d-flex justify-content-center">
          <Row className="w-75">
            <Col md={6}>
              <Card className="py-5 text-center">
                <h4>Total Paid</h4>
                <h2 className="">1458.12</h2>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="py-5 text-center">
                <h4>Your Balance</h4>
                <h2 className="">{user.balance}</h2>
              </Card>
            </Col>
          </Row>
        </div>
        <div className={`course-cards`}>
          <h4 className="text-center py-3">Your Courses</h4>
          <Row xs={1} md={3} className="g-4">
            {user.courses ? (
              user.courses.map((course) => (
                <TeacherSubjectCard course={course}></TeacherSubjectCard>
              ))
            ) : (
              <Loader></Loader>
            )}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Teacher;
