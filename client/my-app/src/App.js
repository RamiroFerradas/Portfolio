import { Route, Routes } from "react-router";
import Error404 from "./Components/error404/error404";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
