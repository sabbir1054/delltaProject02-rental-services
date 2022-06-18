import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from '../../Components/Loader/Loader';
import TeacherNav from '../../Components/NavBars/TeacherNav/TeacherNav';
import TeacherSubjectCard from '../Dashboard/TeacherDashboard/TeacherSubjectCard';
import AllCourses from '../Dashboard/UserCourses/AllCourses';

const TeacherCourses = ({userData}) => {
    return (
        <div>
            <TeacherNav />
            <div className={`course-cards`}>
          <h4 className="text-center py-3">Your Courses</h4>
          <Container>
            <Row xs={1} md={3} className="g-4">
              {userData.courses ? (
                userData.courses.map((course) => (
                  <TeacherSubjectCard course={course} />
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

export default TeacherCourses;