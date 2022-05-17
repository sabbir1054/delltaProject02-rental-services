import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route  exact path='/' element={<Home></Home>}/>
        <Route   path='/home' element={<Home></Home>}/>
      </Routes>
    </>
  );
}

export default App;
