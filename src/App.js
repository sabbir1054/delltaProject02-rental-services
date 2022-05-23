import { Route, Routes } from "react-router-dom";
import StudentRegister from "./Components/RegisterFrom/StudentRegister";
import TeacherRegistration from "./Components/RegisterFrom/TeacherRegistration";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/HomePage/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/studentRegister" element={<StudentRegister />} />
        <Route path="/teacherRegister" element={<TeacherRegistration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
