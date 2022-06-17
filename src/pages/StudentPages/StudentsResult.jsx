import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/FirebaseInit";
import SingleResult from "./SingleResult";

const StudentsResult = ({ userData }) => {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const params = useParams();
  //get all courses
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/results/${params.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  if (user && data && data.results) {
    console.log(data.results);
  }
  return (
    <div>
      <h1 className="py-5 text-center">See Your All Subjects Results</h1>
      {user && data ? (
        <Container>
          <Accordion defaultActiveKey="0">
            {data.results ? (
              data.results.map((res) => (
                <Accordion.Item eventKey={`${res.courseId}`}>
                  <Accordion.Header>{res.courseId}</Accordion.Header>
                  <Accordion.Body>
                  <SingleResult result={res} />
                  </Accordion.Body>
                </Accordion.Item>
              ))
            ) : (
              <Loader />
            )}
          </Accordion>
        </Container>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default StudentsResult;
