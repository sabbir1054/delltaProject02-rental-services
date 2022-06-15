import { Col, Container, Row } from "react-bootstrap";

import StudentNav from "../../Components/NavBars/StudentsNav/StudentNav";
import StudentInfo from "./StudentInfo";

const StudentProfile = ({ userData }) => {
  console.log(userData);
 
  return (
    <>
      <StudentNav></StudentNav>
      <Container className="my-5 py-5">
        <Row>
          <Col md={3}>
            <h1 className="display-5 pb-3 ">Your Profile</h1>
            <img
              src="https://i.ibb.co/6HtKxCN/e1f77a2c16cc54a43eb984f00fa27d14.png"
              alt=""
              className="img-fluid pt-3"
              width={100}
            />
            <p className="fs-3 text-uppercase">{userData?userData.name:``}</p>
          </Col>
          <Col md={9}>
                      {
                          userData?<StudentInfo userData={userData} />:''
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StudentProfile;
