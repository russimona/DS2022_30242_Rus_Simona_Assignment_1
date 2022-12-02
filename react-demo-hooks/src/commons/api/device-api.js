import { HOST } from "./hosts";
import RestApiClient from "../../commons/api/rest-client";

const endpoint = {
  device: "/device",
};

function getDevices(callback) {
  let request = new Request(HOST.backend_api + endpoint.device, {
    method: "GET",
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function getDevicesById(params, callback) {
  let request = new Request(HOST.backend_api + endpoint.device + "/" + params, {
    method: "GET",
  });

  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}

function postDevice(device, callback) {
  let request = new Request(HOST.backend_api + endpoint.device, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

function deleteDevice(uid, callback) {
  let request = new Request(
    HOST.backend_api + endpoint.device + "/delete/" + uid,
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

function editDevice(device, callback) {
  let request = new Request(HOST.backend_api + endpoint.device + "/update", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });
  console.log("URL: " + request.url);
  RestApiClient.performRequest(request, callback);
}

export { getDevices, getDevicesById, postDevice, deleteDevice, editDevice };
