import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';
import StudentNav from '../../../Components/NavBars/StudentsNav/StudentNav';
import TeacherNav from '../../../Components/NavBars/TeacherNav/TeacherNav';
import auth from '../../../Firebase/FirebaseInit';
import StudentsResult from '../../StudentPages/StudentsResult';
import TeacherResult from '../../TeacherPages/TeacherResult/TeacherResult';
 
const UserResult = () => {
      const [user] = useAuthState(auth);
      const params = useParams();
    const [userData, setUserData] = useState([]);

      useEffect(() => {
        fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
          .then((rs) => rs.json())
          .then((data) => setUserData(data));
      }, []);
    return (
      <div>
        {user ? (
          <div>
            {userData.role === "student" ? (
              <>
                <StudentNav />
                <StudentsResult userData={userData} />
              </>
            ) : (
              <>
                <TeacherNav />
                <TeacherResult userData={userData} />
              </>
            )}
          </div>
        ) : (
          <Loader></Loader>
        )}
      </div>
    );
};

export default UserResult;