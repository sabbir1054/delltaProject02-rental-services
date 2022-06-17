import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/FirebaseInit';
import { Card, Col, Container, Row } from "react-bootstrap";
import SubjectCard from '../Dashboard/StudentDashboard/SubjectCard';
import Loader from '../../Components/Loader/Loader';
import StudentNav from '../../Components/NavBars/StudentsNav/StudentNav';
import Slider from 'react-slick';
import AllCourses from '../Dashboard/UserCourses/AllCourses';
const StudentCourse = ({ userData }) => {
    const [user] = useAuthState(auth);
    return (
      <div>
        <StudentNav></StudentNav>
        <div className={`course-cards`}>
          <h4 className="text-center py-3">Your Courses</h4>
          <Container>
            <Row xs={1} md={3} className="g-4">
              {userData.courses ? (
                userData.courses.map((course) => (
                  <SubjectCard course={course}></SubjectCard>
                ))
              ) : (
                <Loader></Loader>
              )}
            </Row>
            <h4 className="text-center py-3">All Courses Courses</h4>
            <AllCourses/>
          </Container>
        </div>
      </div>
    );
};

export default StudentCourse;