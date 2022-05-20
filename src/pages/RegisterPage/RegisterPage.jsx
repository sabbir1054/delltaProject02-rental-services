import {React ,useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css'
const RegisterPage = () => {

  return (
    <>
      <div className={`w-100 ${styles.register_wrapper}`}>
        <Row className="w-100 gx-0">
          <Col md={6} className={`${styles.col_left} `}>
            <div className={`${styles.teacher_heading} pt-5`}>
              <h3 className="text-center text-white fw-bold">
                Hi, I'm Here For Teaching
              </h3>
            </div>
            <div className="teacher-img d-flex justify-content-center">
              <img
                src="https://i.ibb.co/vQ3LXPm/teacher.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="teacher_bottom text-center">
              <div>
                <Link
                  to="/teacherRegister"
                  className={`${styles.sign_up_teacher} bg-white d-inline-block rounded text-decoration-none`}
                >
                  {" "}
                  Sign up As a Teacher
                </Link>
              </div>
              <p className="fs-5 text-white py-4">
                Already have an account?
                <span className="d-block">
                  <Link to="/" className="text-white">
                    {" "}
                    Login
                  </Link>{" "}
                </span>
              </p>
            </div>
          </Col>
          <Col md={6} className={`${styles.col_right}`}>
            <div className={`${styles.teacher_heading} pt-5`}>
              <h3 className="text-center text-white fw-bold">
                Hi, I'm Here For Learning
              </h3>
            </div>
            <div className="student-img d-flex justify-content-center">
              <img
                src="https://i.ibb.co/NjR78yf/student-Pick.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="teacher_bottom text-center">
              <div>
                <Link
                  to="/studentRegister"
                  className={`${styles.sign_up_student} bg-white d-inline-block rounded text-decoration-none`}
                >
                  Sign up As a Student
                </Link>
              </div>
              <p className="fs-5 text-white py-4">
                Already have an account?
                <span className="d-block">
                  <Link to="/" className="text-white">
                    {" "}
                    Login
                  </Link>{" "}
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegisterPage;