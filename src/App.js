import { Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import Lesson from "./components/Lesson";
// import Sidebar from "./components/Sidebar";
import "./styles/app.css";
const App = () => {
  const unitOneLessons = [];
  const unitTwoLessons = [];
  for (let i = 1; i < 6; i++) {
    unitOneLessons.push(
      <Route path={`u1l${i}`} element={<Lesson lesson={`u1l${i}`} key={i} />} />
    );
    unitTwoLessons.push(
      <Route path={`u2${i}`} element={<Lesson lesson={`u2l${i}`} key={i} />} />
    );
  }
  return (
    <div id="app">
      {/* <Path /> */}
      <Routes>
        {/* <Sidebar /> */}
        <Route exact path="/" element={<Path />} />
        {unitOneLessons}
        {unitTwoLessons}
      </Routes>
    </div>
  );
};

export default App;
