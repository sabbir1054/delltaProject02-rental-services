import { Route, Routes } from "react-router-dom";
import StudentRegister from "./Components/RegisterFrom/StudentRegister";
import TeacherRegistration from "./Components/RegisterFrom/TeacherRegistration";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserBalance from "./pages/Dashboard/UserBalance/UserBalance";
import UserCourses from "./pages/Dashboard/UserCourses/UserCourses";
import UserProfile from "./pages/Dashboard/UserProfile/UserProfile";
import UserResult from "./pages/Dashboard/UserResult/UserResult";
import Home from "./pages/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EnrolledStudent from "./pages/TeacherPages/EnrolledStudent";
import CourseResult from "./pages/TeacherPages/TeacherResult/CourseResult";
import TeacherResult from "./pages/TeacherPages/TeacherResult/TeacherResult";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/studentRegister" element={<StudentRegister />} />
        <Route path="/teacherRegister" element={<TeacherRegistration />} />
        <Route path="/dashboard/:email" element={<Dashboard />} />
        <Route path="/profile/:email" element={<UserProfile />} />
        <Route path="/results/:email" element={<UserResult />} />
        <Route path="/courseResult/:courseId" element={<CourseResult />} />
        <Route path="/balance/:email" element={<UserBalance />} />
        <Route path="/courses/:email" element={<UserCourses />} />
        <Route path="/enrolledList/:courseId" element={<EnrolledStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
