import { Route, BrowserRouter, Routes } from "react-router-dom";
import Section from "./NavBar/Section";
import "./app.scss";
import Login from "./AuthPage/Login";
import Registr from "./AuthPage/Registr";
import RequireAuth from "./context/RequireAuth";
import Home from "./Home/Home";
import MyPosts from "./Home/MyPosts/MyPosts";
import RequireRecordedAuth from "./context/RequireRecordedAuth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RequireRecordedAuth>
                <Section></Section>
              </RequireRecordedAuth>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RequireRecordedAuth>
                <Login></Login>
              </RequireRecordedAuth>
            }
          ></Route>
          <Route
            path="/registr"
            element={
              <RequireRecordedAuth>
                <Registr></Registr>
              </RequireRecordedAuth>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myposts"
            element={
              <RequireAuth>
                <MyPosts></MyPosts>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
