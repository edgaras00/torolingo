import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { unlockRoute } from "./utils";

import Sidebar from "./components/Sidebar";

import Path from "./components/path/Path";

// Lesson component
import Lesson from "./components/lessons/Lesson";
import Practice from "./components/lessons/Practice";

// Guidebook components
import Guidebook from "./components/guidebooks/Guidebook";
import UnitOneTips from "./components/guidebooks/tips/UnitOneTips";
import UnitOnePhrases from "./components/guidebooks/phrases/UnitOnePhrases";
import UnitTwoTips from "./components/guidebooks/tips/UnitTwoTips";
import UnitTwoPhrases from "./components/guidebooks/phrases/UnitTwoPhrases";
import UnitThreePhrases from "./components/guidebooks/phrases/UnitThreePhrases";
import UnitThreeTips from "./components/guidebooks/tips/UnitThreeTips";
import UnitFourPhrases from "./components/guidebooks/phrases/UnitFourPhrases";
import UnitFourTips from "./components/guidebooks/tips/UnitFourTips";
import UnitFivePhrases from "./components/guidebooks/phrases/UnitFivePhrases";
import UnitFiveTips from "./components/guidebooks/tips/UnitFiveTips";

// Vocab components
import Vocabulary from "./components/vocab/Vocabulary";
import UnitVocabulary from "./components/vocab/UnitVocabulary";

// Profile components
import UserProfile from "./components/profile/UserProfile";
import Account from "./components/profile/Account";

// Home components
import Home from "./components/home/Home";
import Register from "./components/home/Register";
import Login from "./components/home/Login";

// Error component
import NotFound from "./components/errors/NotFound";

import "./styles/app.css";
const App = () => {
  const { user, token } = useContext(AuthContext);
  const lessons = [];

  for (let unit = 1; unit < 6; unit++) {
    for (let lesson = 1; lesson < 7; lesson++) {
      console.log(user);
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
          element={
            user && token ? <Navigate to="/path" replace /> : <Register />
          }
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
