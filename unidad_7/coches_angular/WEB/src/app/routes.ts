import { Routes } from "@angular/router";
import { Contacto } from "./pages/contacto/contacto";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Cars } from "./pages/cars/cars";

const routerConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "Inicio",
  },
  {
    path: "contacto",
    component: Contacto,
    title: "Contacto",
  },
  {
    path: "login",
    component: Login,
    title: "Login",
  },
  {
    path: "register",
    component: Register,
    title: "Register",
  },
  {
    path: "cars",
    component: Cars,
    title: "coches",
  },
];
export default routerConfig;
