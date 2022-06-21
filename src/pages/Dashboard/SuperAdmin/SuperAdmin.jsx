import React from 'react';
import {Col, Container, Nav, Row} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import TeacherNav from '../../../Components/NavBars/TeacherNav/TeacherNav';
import auth from '../../../Firebase/FirebaseInit';
import styles from '../Dashboard.module.css'
import AddCourse from './AddCourse';
import AssignCourse from './AssignCourse';
import ManageBalance from './ManageBalance';
const SuperAdmin = ({ person }) => {
  const [user] = useAuthState(auth);
  console.log(person);
    return (
      <div className="bg-light">
        {user&&<TeacherNav/>}
        <Container className="py-5">
          <Row className={` rounded ${styles.teacher_heading} text-center mb-5`}>
            <Col className="pt-4 ps-4 text-white">
              <h3 className="display-5 ">Admin Name: {person.name}</h3>
              <p className="fs-4">Manage Your Universe</p>
            </Col>
          </Row>
          <AddCourse />
          <ManageBalance />
        </Container>
      </div>
    );
};

export default SuperAdmin;