import { HOST } from "./hosts";
import RestApiClient from "../../commons/api/rest-client";

const endpoint = {
  users: "/users",
};

function getUsers(callback) {
  let request = new Request(HOST.backend_api + endpoint.users, {
    method: "GET",
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function getUsersById(params, callback) {
  let request = new Request(HOST.backend_api + endpoint.users + "/" + params, {
    method: "GET",
  });

  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function postUser(user, callback) {
  let request = new Request(HOST.backend_api + endpoint.users, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

function loginUser(email, password, callback) {
  let request = new Request(
    HOST.backend_api + endpoint.users + "/userByEmailPass",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }
  );
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

function deleteUser(uid, callback) {
  let request = new Request(
    HOST.backend_api + endpoint.users + "/delete/" + uid,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    }
  );
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

function editUser(user, callback) {
  let request = new Request(HOST.backend_api + endpoint.users + "/update", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

export { getUsers, getUsersById, postUser, loginUser, deleteUser, editUser };
