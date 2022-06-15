import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserCourses = () => {
    const params = useParams();
    const [userData, setUserData] = useState({});
    useEffect(() => {
      fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
        .then((rs) => rs.json())
        .then((data) => setUserData(data));
    }, []);

    return (
        <div>
            User Courses
        </div>
    );
};

export default UserCourses;