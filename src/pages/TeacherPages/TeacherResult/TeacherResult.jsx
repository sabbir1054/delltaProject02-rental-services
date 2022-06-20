import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import CourseResult from "./CourseResult";
import ResultSubCard from "./ResultSubCard";

const TeacherResult = ({ userData }) => {
    const params = useParams();
  return (
    <div className="top-section">
      <h4 className="text-center py-3 pt-5">Select Course for Result</h4>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {userData.courses ? (
            userData.courses.map((course) => <ResultSubCard course={course} />)
          ) : (
            <Loader></Loader>
          )}
              </Row>
          </Container>
    </div>
  );
};

export default TeacherResult;
