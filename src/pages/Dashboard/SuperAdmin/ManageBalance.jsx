import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/FirebaseInit";
import styles from "../Dashboard.module.css";
import SingleUserBalance from "./SingleUserBalance";
const ManageBalance = () => {
  const [user] = useAuthState(auth);
    const [userData, setUserData] = useState();
    //load user data
  useEffect(() => {
    fetch("https://stormy-forest-12943.herokuapp.com/users").then((res) =>
      res.json().then((data) => setUserData(data))
    );
  }, []);

  return (
    <div className={`pt-5 ${styles.addCourse}`}>
      <h1 className="text-center mt-5">Manage User Balance</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Balance</th>
              <th>Update Balance</th>
            </tr>
          </thead>
          <tbody>
            {user && userData ? (
              userData.map((user) => (
                  <SingleUserBalance user={user} />
              ))
            ) : (
              <Loader />
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageBalance;
