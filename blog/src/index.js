import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Auth_TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/XML";

let requestInterceptor = axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log("Interceptor request", error);
  }
);
// axios.interceptors.request.eject(requestInterceptor);

let responseInterceptor = axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log("Interceptor response", error);
  }
);

// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
