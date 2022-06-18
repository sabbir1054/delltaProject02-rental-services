import { useEffect, useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import styles from '../Dashboard.module.css'
const TeacherSubjectCard = ({ course }) => {
  const [data, setData] = useState([]);
  //get all courses
  useEffect(() => {
    fetch(`https://stormy-forest-12943.herokuapp.com/courses/${course}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={`${data.courseImg}`} />
          <Card.Body>
            <Card.Text>
              <h4 className="text-center">{data.courseTitle}</h4>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {" "}
            <Badge variant="primary" className={`p-2 ${styles.allStudent}`}>
              See All Enrolled Student
            </Badge>{" "}
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default TeacherSubjectCard;
