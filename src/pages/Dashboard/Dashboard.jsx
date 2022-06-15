import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/FirebaseInit";
import Student from "./StudentDashboard/Student";
import Teacher from "./TeacherDashboard/Teacher";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
      .then((rs) => rs.json())
      .then((data) => setPerson(data));
  }, []);

  return (
    <>
      {
        
       
        user?(person.role==="teacher")?(<Teacher user={person}></Teacher>):(<Student user={person}></Student>):<Loader></Loader>
      }
    </>
  );
};

export default Dashboard;
