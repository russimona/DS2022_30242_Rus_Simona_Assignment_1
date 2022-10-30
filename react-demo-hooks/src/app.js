import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Home from "./home/home";
import PersonContainer from "./person/person-container";
import ErrorPage from "./commons/errorhandling/error-page";
import Login from "./login/login";
import AdminHome from "./admin/admin-home";
import AddUser from "./admin/user/add/add-user";
import AddDevice from "./admin/device/add/add-device";

//others
import styles from "./commons/styles/project-style.css";



function App() {
  return (
    <div className={styles.back}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" render={() => <Login />} />

            <Route exact path="/admin" render={() => <AdminHome />} />

            <Route exact path="/" render={() => <Home />} />

            <Route exact path="/person" render={() => <PersonContainer />} />

            <Route exact path="/admin/add-user" render={() => <AddUser />} />

            <Route exact path="/admin/add-device" render={() => <AddDevice />} />

            {/*Error*/}
            <Route exact path="/error" render={() => <ErrorPage />} />

            <Route render={() => <ErrorPage />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
