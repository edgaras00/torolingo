import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
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
  const { user } = useContext(AuthContext);
  // const unitOneLessons = [];
  // const unitTwoLessons = [];
  // const unitThreeLessons = [];
  // const unitFourLessons = [];
  // const unitFiveLessons = [];
  // for (let i = 1; i < 7; i++) {
  //   unitOneLessons.push(
  //     <Route path={`u1l${i}`} element={<Lesson lesson={`u1l${i}`} key={i} />} />
  //   );
  //   unitTwoLessons.push(
  //     <Route path={`u2l${i}`} element={<Lesson lesson={`u2l${i}`} key={i} />} />
  //   );

  //   unitThreeLessons.push(
  //     <Route path={`u3l${i}`} element={<Lesson lesson={`u3l${i}`} key={i} />} />
  //   );
  //   unitFourLessons.push(
  //     <Route path={`u4l${i}`} element={<Lesson lesson={`u4l${i}`} key={i} />} />
  //   );
  //   unitFiveLessons.push(
  //     <Route path={`u5l${i}`} element={<Lesson lesson={`u5l${i}`} key={i} />} />
  //   );
  // }
  const lessons = [];
  for (let unit = 1; unit < 6; unit++) {
    for (let lesson = 1; lesson < 7; lesson++) {
      lessons.push(
        <Route
          path={`/u${unit}l${lesson}`}
          element={
            user ? (
              <Lesson lesson={`u${unit}l${lesson}`} key={unit + lesson} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      );
    }
  }
  return (
    <div id="app">
      {/* <Sidebar /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/path" replace />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/path" replace /> : <Register />}
        />
        <Route
          path="login"
          element={user ? <Navigate to="/path" replace /> : <Login />}
        />
        <Route
          path="/path"
          element={user ? <Path /> : <Navigate to="/login" replace />}
        />
        {lessons}
        {/* {unitOneLessons}
        {unitTwoLessons}
        {unitThreeLessons}
        {unitFourLessons}
        {unitFiveLessons} */}
        <Route
          path="/path/guidebook-1"
          element={
            user ? (
              <Guidebook>
                <UnitOnePhrases />
                <UnitOneTips />
              </Guidebook>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-2"
          element={
            user ? (
              <Guidebook>
                <UnitTwoPhrases />
                <UnitTwoTips />
              </Guidebook>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-3"
          element={
            user ? (
              <Guidebook>
                <UnitThreePhrases />
                <UnitThreeTips />
              </Guidebook>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-4"
          element={
            user ? (
              <Guidebook>
                <UnitFourPhrases />
                <UnitFourTips />
              </Guidebook>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-5"
          element={
            user ? (
              <Guidebook>
                <UnitFivePhrases />
                <UnitFiveTips />
              </Guidebook>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/vocabulary"
          element={user ? <Vocabulary /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/vocabulary/:vocabID"
          element={user ? <UnitVocabulary /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/practice"
          element={user ? <Practice /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={user ? <UserProfile /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/account"
          element={user ? <Account /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/practice/matching"
          element={
            user ? (
              <Lesson matchingOnly={true} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/practice/listening"
          element={
            user ? (
              <Lesson listeningOnly={true} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
