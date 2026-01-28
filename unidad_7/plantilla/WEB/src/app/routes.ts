import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";

const routerConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "Home",
  },
];
export default routerConfig;
