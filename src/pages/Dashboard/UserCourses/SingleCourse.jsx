import React from 'react';
import { Card, Col } from "react-bootstrap";
const SingleCourse = ({course}) => {
    console.log(course);
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={`${course.courseImg}`} />
            <Card.Body>
              <Card.Text>
                <h4 className="text-center">{course.courseTitle}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default SingleCourse;