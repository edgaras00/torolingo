import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { unlockRoute } from "./utils";
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
import NotFound from "./components/NotFound";

import "./styles/app.css";
const App = () => {
  const { user } = useContext(AuthContext);
  const lessons = [];

  for (let unit = 1; unit < 6; unit++) {
    for (let lesson = 1; lesson < 7; lesson++) {
      const allowAccess = user ? unlockRoute(user, unit, lesson) : false;

      lessons.push(
        <Route
          path={`/u${unit}l${lesson}`}
          key={unit + lesson}
          element={
            user ? (
              allowAccess ? (
                <>
                  <Sidebar />
                  <Lesson lesson={`u${unit}l${lesson}`} />
                </>
              ) : (
                <Navigate to="/path" replace />
              )
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
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <Home /> : <Navigate to="/path" replace />}
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
          element={
            user ? (
              <>
                <Sidebar />
                <Path />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {lessons}
        <Route
          path="/path/guidebook-1"
          element={
            user ? (
              <>
                <Sidebar />
                <Guidebook number={1}>
                  <UnitOnePhrases />
                  <UnitOneTips />
                </Guidebook>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-2"
          element={
            user ? (
              <>
                <Sidebar />
                <Guidebook number={2}>
                  <UnitTwoPhrases />
                  <UnitTwoTips />
                </Guidebook>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-3"
          element={
            user ? (
              <>
                <Sidebar />
                <Guidebook number={3}>
                  <UnitThreePhrases />
                  <UnitThreeTips />
                </Guidebook>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-4"
          element={
            user ? (
              <>
                <Sidebar />
                <Guidebook number={4}>
                  <UnitFourPhrases />
                  <UnitFourTips />
                </Guidebook>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/path/guidebook-5"
          element={
            user ? (
              <>
                <Sidebar />
                <Guidebook number={5}>
                  <UnitFivePhrases />
                  <UnitFiveTips />
                </Guidebook>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/vocabulary"
          element={
            user ? (
              <>
                <Sidebar />
                <Vocabulary />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/vocabulary/:vocabID"
          element={
            user ? (
              <>
                <Sidebar />
                <UnitVocabulary />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/practice"
          element={
            user ? (
              <>
                <Sidebar />
                <Practice />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            user ? (
              <>
                <Sidebar />
                <UserProfile />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/account"
          element={
            user ? (
              <>
                <Sidebar />
                <Account />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/practice/matching"
          element={
            user ? (
              <>
                <Sidebar />
                <Lesson matchingOnly={true} />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/practice/listening"
          element={
            user ? (
              <>
                <Sidebar />
                <Lesson listeningOnly={true} />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
