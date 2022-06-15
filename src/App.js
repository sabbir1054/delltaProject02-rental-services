import { Route, Routes } from "react-router-dom";
import StudentRegister from "./Components/RegisterFrom/StudentRegister";
import TeacherRegistration from "./Components/RegisterFrom/TeacherRegistration";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserBalance from "./pages/Dashboard/UserBalance/UserBalance";
import UserProfile from "./pages/Dashboard/UserProfile/UserProfile";
import UserResult from "./pages/Dashboard/UserResult/UserResult";
import Home from "./pages/HomePage/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path ="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/studentRegister" element={<StudentRegister />} />
        <Route path="/teacherRegister" element={<TeacherRegistration />} />
        <Route path="/dashboard/:email" element={<Dashboard />} />
        <Route path="/profile/:email" element={<UserProfile/> } />
        <Route path="/result/:email" element={<UserResult/> } />
        <Route path="/balance/:email" element={<UserBalance/> } />
        <Route path="/courses/:email" element={<UserBalance/> } />
      </Routes>
    </>
  );
}

export default App;
