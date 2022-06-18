import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';
import auth from '../../../Firebase/FirebaseInit';
import StudentCourse from '../../StudentPages/StudentCourse';
import TeacherCourses from '../../TeacherPages/TeacherCourses';

const UserCourses = () => {
    const [user] = useAuthState(auth);
    const params = useParams();
    const [userData, setUserData] = useState([]);
    useEffect(() => {
      fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
        .then((rs) => rs.json())
        .then((data) => setUserData(data));
    }, []);
console.log(userData);
    return (
        <div>
            {
                user ? userData.role === "student" ? <StudentCourse userData={userData} /> : <TeacherCourses userData={userData } />:<Loader></Loader>
            }
        </div>
    );
};

export default UserCourses;