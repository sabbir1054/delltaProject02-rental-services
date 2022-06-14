import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const SubjectCard = ({course}) => {
      const [data, setData] = useState([]);
      //get all courses
      useEffect(() => {
        fetch(`https://stormy-forest-12943.herokuapp.com/courses/${course}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return (
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={`${data.courseImg}`}
          />
          <Card.Body>
            <Card.Text>
                        <h4 className="text-center">{data.courseTitle }</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default SubjectCard;