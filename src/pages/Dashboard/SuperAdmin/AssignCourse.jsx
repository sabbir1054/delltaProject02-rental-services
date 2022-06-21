import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/FirebaseInit";
const AssignCourse = () => {

    // const fetchData = () => {
    //     fetch()
    // }

//     const handleUpdate = (data,email) => {
        
//    fetch(`http://localhost:5000/users/${email}`, {
//      method: "PUT",
//      headers: {
//        "content-type": "application/json",
//      },
//      body: JSON.stringify(data),
//    })
//      .then((res) => res.json())
//      .then((data) => console.log(data));
//  };

 const onSubmit = () => {
    const courseId = document.getElementById("assign-courseId").value;
     const email = document.getElementById("assign-userEmail").value;
    const newData={courseId:courseId}
    //  handleUpdate(courseId,email);
}
    



  return (
    <Container className="d-flex align-items-center justify-content-center">
      <label htmlFor="" className="fw-bold">
        Course ID:{" "}
      </label>
      <input type="text" id="assign-courseId" className="py-2  mx-2" />
      <label htmlFor="" className="fw-bold">
        User Email:
      </label>
      <input type="text" id="assign-userEmail" className="py-2  mx-2" />
      <button className="btn btn-primary " onClick={onSubmit}>
        Add Course
      </button>
    </Container>
  );
};

export default AssignCourse;
