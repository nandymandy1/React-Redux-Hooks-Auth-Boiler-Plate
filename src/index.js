import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import * as serviceWorker from "./serviceWorker";

import "popper.js";
import "bootstrap";
import jquery from "jquery";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  timer: 3000,
  position: "top-end",
  timerProgressBar: false,
  showConfirmButton: false,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

window.$ = global.$ = jquery;
window.Swal = global.Swal = Swal;
window.Toast = global.Toast = Toast;

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
