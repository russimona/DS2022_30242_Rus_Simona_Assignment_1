import { HOST } from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";

const endpoint = {
    users: '/users'
};

function getUsers(callback) {
    let request = new Request(HOST.backend_api + endpoint.users, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}



function getUsersById(params, callback) {
    let request = new Request(HOST.backend_api + endpoint.users + params.id, {
        method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postUser(user, callback) {
    let request = new Request(HOST.backend_api + endpoint.users, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}

function loginUser(email, password, callback) {
    let request = new Request(HOST.backend_api + endpoint.users +'/userByEmailPass', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password})
    });
    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}



export {
    getUsers,
    getUsersById,
    postUser,
    loginUser
};
