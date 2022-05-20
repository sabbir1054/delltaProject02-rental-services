import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "../../pages/RegisterPage/RegisterPage.module.css";
import TeacherForm from "./TeacherForm";
const TeacherRegistration = () => {
  const [match, setMatch] = useState(true);
  // date and time
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      setMatch(false);
    } else {
    }
  };

  return (
    <div className={styles.teacher_wrapper}>
      <Container className="pt-5">
        <Row className={`${styles.teacher_container_bg} `}>
          <Col md={6} className={`${styles.teacher_left} d-flex justify-content-center`}>
            <img
              src="https://i.ibb.co/vQ3LXPm/teacher.png"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col md={6} className={`${styles.teacher_right} bg-light py-4 px-4`}>
          <TeacherForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherRegistration;
