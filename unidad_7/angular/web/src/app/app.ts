import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { Home } from "./pages/home/home";

@Component({
  selector: "app-root",
  imports: [Home, RouterOutlet, RouterLink],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  title = "home";
}
