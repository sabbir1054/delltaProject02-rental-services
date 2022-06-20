import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/FirebaseInit";

const SingleEnrolled = ({ student, slNo }) => {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/users/${student}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <tr>
      <td>{slNo + 1}</td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </tr>
  );
};

export default SingleEnrolled;
