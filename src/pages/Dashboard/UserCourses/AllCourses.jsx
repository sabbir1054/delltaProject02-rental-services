import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/FirebaseInit";
import SingleCourse from "./SingleCourse";

const AllCourses = () => {
  const [user] = useAuthState(auth);

  const [data, setData] = useState([]);
  //get all courses
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/courses/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {user ? (
        <Row xs={1} md={3} className="g-4">
          {data.length > 0 ? (
            data.map((course) => <SingleCourse course={course}></SingleCourse>)
          ) : (
            <Loader></Loader>
          )}
        </Row>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default AllCourses;
