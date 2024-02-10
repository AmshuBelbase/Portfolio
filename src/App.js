import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({
    username: "",
    register: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <HomePage setLoginUser={setLoginUser} />
              ) : (
                <LoginForm setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginForm setLoginUser={setLoginUser} />}
          />
          <Route path="/create" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
