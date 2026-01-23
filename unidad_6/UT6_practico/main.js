"use strict";

import { HISTORIC_USER, API_URL } from "./constants.js";

const stringUsuario = sessionStorage.getItem(HISTORIC_USER);

if (stringUsuario) {
  window.location.href = "productos.html";
}

const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  login(inputName.value, inputPassword.value);
});

async function login(name, password) {
  let myHeaders = new Headers({
    "Content-Type": "application/json",
  });
  const requestUser = new Request(`${API_URL}users/login`, {
    method: "POST",
    body: JSON.stringify({ name: name, password: password }),
    headers: myHeaders,
  });
  const requestLoginUser = await fetch(requestUser);
  const dataUser = await requestLoginUser.json();
  sessionStorage.setItem(HISTORIC_USER, JSON.stringify(dataUser));
  window.location.href = "productos.html";
}
