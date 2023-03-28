import { Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import Lesson from "./components/Lesson";
import Sidebar from "./components/Sidebar";
import Guidebook from "./components/Guidebook";
import Tip from "./components/Tip";
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
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Path />} />
        {unitOneLessons}
        {unitTwoLessons}
        <Route
          path="guidebook1"
          element={
            <Guidebook>
              <Tip />
            </Guidebook>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
