import { useState } from "react";
import { useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/FirebaseInit";
import styles from "../Dashboard.module.css";

const AddCourse = () => {
  const [user] = useAuthState(auth);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/courses`)
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);
  //post a course
  const postData = (data) => {
    console.log(data);
    const url = "https://stormy-forest-12943.herokuapp.com/courses";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  console.log(courseData);

  const onSubmit = () => {
    const newCourse = {};
    const courseId = document.getElementById(`courseId`).value;
    const courseTitle = document.getElementById(`courseTitle`).value;
    const courseImg = document.getElementById(`courseImg`).value;

    newCourse.courseId = courseId;
    newCourse.courseTitle = courseTitle;
    newCourse.courseImg = courseImg;
    newCourse.studentList = [];

    postData(newCourse);
  };
  const handleDelete = (deleteId) => {
    console.log(deleteId);
      fetch(`https://stormy-forest-12943.herokuapp.com/courses/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Are you sure to delete order");
          const remainingCourses = courseData.filter(
            (course) => course._id !== deleteId
          );
          setCourseData(remainingCourses);
        });
  };

  return (
    <div className={styles.addCourse}>
      <h1 className="text-center">Manage Course</h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="add-course">
            <h4 className="text-center ">Add Courses</h4>
          </Accordion.Header>
          <Accordion.Body>
            <label htmlFor="" className="fw-bold">
              Course ID:{" "}
            </label>
            <input type="text" id="courseId" className="py-2 px-3 mx-2" />
            <label htmlFor="" className="fw-bold">
              Course Title:
            </label>
            <input type="text" id="courseTitle" className="py-2 px-3 mx-2" />
            <label htmlFor="" className="fw-bold">
              {" "}
              Course Image:{" "}
            </label>
            <input type="text" id="courseImg" className="py-2 px-3 mx-2" />{" "}
            <br />
            <br />
            <div className="d-flex justify-content-center">
              {" "}
              <button className="btn btn-primary " onClick={onSubmit}>
                Add Course
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="text-center text-decoration-underline">
              Delete Course
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Title</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {user && courseData ? (
                  courseData.map((course) => (
                    <>
                      <tr>
                        <td>{course.courseId}</td>
                        <td>{course.courseTitle}</td>
                        <td>
                          <div
                            className="btn btn-danger"
                            onClick={() => handleDelete(course._id)}
                          >
                            Delete
                          </div>
                        </td>
                      </tr>
                    </>
                  ))
                ) : (
                  <Loader />
                )}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AddCourse;
