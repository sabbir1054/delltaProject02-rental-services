import { useEffect, useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResultSubCard = ({ course }) => {
  const [data, setData] = useState([]);
  //get  courses
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/courses/${course}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Text>
              <h5>Course ID: {data.courseId}</h5>
              <p className="">Course Title: {data.courseTitle}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/courseResult/${data.courseId}`}>
              {" "}
              <Badge variant="primary" className={`p-2 `}>
                Make Result
              </Badge>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ResultSubCard;
