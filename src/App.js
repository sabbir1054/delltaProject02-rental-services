import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route  exact path='/' element={<Home></Home>}/>
        <Route   path='/home' element={<Home></Home>}/>
        <Route   path='/register' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
