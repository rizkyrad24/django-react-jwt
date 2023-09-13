import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import EmailVerification from "./Pages/EmailVerification";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordConfirm from "./Pages/ResetPasswordConfirm";
import Signup from "./Pages/Signup";
import Layout from "./High Order Function/Layout";
import "./css/main.css";
import { Provider } from "react-redux";
import Store from "./Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route path="login/" Component={Login}></Route>
            <Route path="signup/" Component={Signup}></Route>
            <Route path="change/password/" Component={ChangePassword}></Route>
            <Route path="reset/password/" Component={ResetPassword}></Route>
            <Route path="dj-rest-auth/registration/account-confirm-email/:key/" Component={EmailVerification}></Route>
            <Route path="reset/password/confirm/:uid/:token" Component={ResetPasswordConfirm}></Route>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App