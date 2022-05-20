import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "../../pages/RegisterPage/RegisterPage.module.css";
import StudentForm from './StudentForm';

const StudentRegister = () => {
    return (
      <div className={styles.student_wrapper}>
        <Container className="pt-5">
          <Row className={`${styles.student_container_bg} `}>
            <Col
              md={6}
              className={`${styles.student_left} d-flex justify-content-center`}
            >
              <img
                src="https://i.ibb.co/NjR78yf/student-Pick.png"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col
              md={6}
              className={`${styles.student_right} bg-light py-4 px-4`}
            >
              <StudentForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default StudentRegister;