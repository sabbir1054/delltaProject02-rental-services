import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import StudentNav from "../../../Components/NavBars/StudentsNav/StudentNav";
import auth from "../../../Firebase/FirebaseInit";
import StudentProfile from "../../StudentPages/StudentProfile";

const UserProfile = () => {
    const [user] = useAuthState(auth);
  const params = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
      .then((rs) => rs.json())
      .then((data) => setUserData(data));
  }, []);
    console.log(userData);
  return (
      <div className="bg-light">
          
    {/*   {user.role === "teacher" ? (
        <Teacher user={user}></Teacher>
      ) : (
        <Student user={user}></Student>
      )} */}
         {user? <StudentProfile userData={userData}></StudentProfile>:<Loader></Loader>}
    </div>
  );
};

export default UserProfile;
