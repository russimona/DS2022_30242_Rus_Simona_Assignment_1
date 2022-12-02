import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import ErrorPage from "./commons/error-page";
import Login from "./login/login";
import AdminHome from "./admin/admin-home";
import AddUser from "./admin/user/add/add-user";
import AddDevice from "./admin/device/add/add-device";
import DeviceTable from "./admin/device/table_device/device-table";
//others

import UsersTable from "./admin/user/show/user-table";
import UpdateUser from "./admin/user/update/updateUser";
import UpdateDevice from "./admin/device/update/updateDevice";
import UserHome from "./user/user-home";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/admin" render={() => <AdminHome />} />
            <Route exact path="/admin/add-user" render={() => <AddUser />} />
            <Route
              exact
              path="/admin/add-device"
              render={() => <AddDevice />}
            />
            <Route
              exact
              path="/admin/show-device"
              render={() => <DeviceTable />}
            />
            <Route
              exact
              path="/admin/users-table"
              render={() => <UsersTable />}
            />
            <Route
              exact
              path="/admin/update-users"
              render={() => <UpdateUser />}
            />

            <Route
              exact
              path="/admin/update-devices"
              render={() => <UpdateDevice />}
            />

            <Route 
            exact
            path='/user'
            render={()=><UserHome/>}/>

            <Route exact path="/consumption" render={() => <AdminHome />} />
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
