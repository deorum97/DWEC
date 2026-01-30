import { Routes } from "@angular/router";
import { Contacto } from "./pages/contacto/contacto";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { MovieListComponent } from "./pages/movie-list-component/movie-list-component";
import { MovieFormComponent } from "./pages/movie-form-component/movie-form-component";
import { MovieDetailComponent } from "./pages/movie-detail-component/movie-detail-component";
import { MovieFormEditor } from "./pages/movie-form-editor/movie-form-editor";

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
    path: "movies",
    component: MovieListComponent,
    title: "Movies",
  },
  {
    path: "movies/new",
    component: MovieFormComponent,
    title: "New Movie",
  },
  {
    path: "movies/:id",
    component: MovieDetailComponent,
    title: "Movie Detail",
  },
  {
    path: "movies/edit/:id",
    component: MovieFormEditor,
    title: "Edit Movie",
  },
];
export default routerConfig;
