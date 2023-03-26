import { Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import Lesson from "./components/Lesson";
import Sidebar from "./components/Sidebar";
import "./styles/app.css";
const App = () => {
  return (
    <div id="app">
      {/* <Path /> */}
      <Routes>
        {/* <Sidebar /> */}
        <Route exact path="/" element={<Path />} />
        <Route path="/u1l1" element={<Lesson />} />
      </Routes>
    </div>
  );
};

export default App;
