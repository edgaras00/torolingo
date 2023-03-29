import { Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import Lesson from "./components/Lesson";
import Sidebar from "./components/Sidebar";
import Guidebook from "./components/Guidebook";
import UnitOneTips from "./components/UnitOneTips";
import UnitOnePhrases from "./components/UnitOnePhrases";
import UnitTwoTips from "./components/UnitTwoTips";
import UnitTwoPhrases from "./components/UnitTwoPhrases";
import UnitThreePhrases from "./components/UnitThreePhrases";
import UnitThreeTips from "./components/UnitThreeTips";
import UnitFourPhrases from "./components/UnitFourPhrases";
import UnitFourTips from "./components/UnitFourTips";
import UnitFivePhrases from "./components/UnitFivePhrases";
import UnitFiveTips from "./components/UnitFiveTips";
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
              <UnitOnePhrases />
              <UnitOneTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook2"
          element={
            <Guidebook>
              <UnitTwoPhrases />
              <UnitTwoTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook3"
          element={
            <Guidebook>
              <UnitThreePhrases />
              <UnitThreeTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook4"
          element={
            <Guidebook>
              <UnitFourPhrases />
              <UnitFourTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook5"
          element={
            <Guidebook>
              <UnitFivePhrases />
              <UnitFiveTips />
            </Guidebook>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
