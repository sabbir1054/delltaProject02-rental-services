import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Student from "./StudentDashboard/Student";
import Teacher from "./TeacherDashboard/Teacher";

const Dashboard = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${params.email}`)
      .then((rs) => rs.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      {
       
        (user.role==="teacher")?(<Teacher user={user}></Teacher>):(<Student user={user}></Student>)
      }
    </>
  );
};

export default Dashboard;
