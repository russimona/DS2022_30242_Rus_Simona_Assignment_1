import { HOST } from "./hosts";
import RestApiClient from "../../commons/api/rest-client";

const endpoint = {
  measurements: "/measurements",
};

function getMeasurements(callback) {
  let request = new Request(HOST.backend_api + endpoint.measurements, {
    method: "GET",
  });
  console.log(request.url);
  RestApiClient.performRequest(request, callback);
}


export { getMeasurements };
