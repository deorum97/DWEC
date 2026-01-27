"use strict";

import { HISTORIC_USER } from "./constants.js";

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});

function logout() {
  sessionStorage.removeItem(HISTORIC_USER);
  window.location.href = "index.html";
}
