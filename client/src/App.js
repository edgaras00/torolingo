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
import Vocabulary from "./components/Vocabulary";
import UnitVocabulary from "./components/UnitVocabulary";
import Practice from "./components/Practice";
import UserProfile from "./components/UserProfile";
import Account from "./components/Account";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import "./styles/app.css";
const App = () => {
  const unitOneLessons = [];
  const unitTwoLessons = [];
  const unitThreeLessons = [];
  const unitFourLessons = [];
  const unitFiveLessons = [];
  for (let i = 1; i < 7; i++) {
    unitOneLessons.push(
      <Route path={`u1l${i}`} element={<Lesson lesson={`u1l${i}`} key={i} />} />
    );
    unitTwoLessons.push(
      <Route path={`u2l${i}`} element={<Lesson lesson={`u2l${i}`} key={i} />} />
    );

    unitThreeLessons.push(
      <Route path={`u3l${i}`} element={<Lesson lesson={`u3l${i}`} key={i} />} />
    );
    unitFourLessons.push(
      <Route path={`u4l${i}`} element={<Lesson lesson={`u4l${i}`} key={i} />} />
    );
    unitFiveLessons.push(
      <Route path={`u5l${i}`} element={<Lesson lesson={`u5l${i}`} key={i} />} />
    );
  }
  return (
    <div id="app">
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/path" element={<Path />} />
        {unitOneLessons}
        {unitTwoLessons}
        {unitThreeLessons}
        {unitFourLessons}
        {unitFiveLessons}
        <Route
          path="guidebook-1"
          element={
            <Guidebook>
              <UnitOnePhrases />
              <UnitOneTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook-2"
          element={
            <Guidebook>
              <UnitTwoPhrases />
              <UnitTwoTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook-3"
          element={
            <Guidebook>
              <UnitThreePhrases />
              <UnitThreeTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook-4"
          element={
            <Guidebook>
              <UnitFourPhrases />
              <UnitFourTips />
            </Guidebook>
          }
        />
        <Route
          path="guidebook-5"
          element={
            <Guidebook>
              <UnitFivePhrases />
              <UnitFiveTips />
            </Guidebook>
          }
        />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/vocabulary/:vocabID" element={<UnitVocabulary />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/practice/matching"
          element={<Lesson matchingOnly={true} />}
        />
        <Route
          path="/practice/listening"
          element={<Lesson listeningOnly={true} />}
        />
      </Routes>
    </div>
  );
};

export default App;
