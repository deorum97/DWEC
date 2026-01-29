import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UserService } from "../../services/user.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-navbar",
  imports: [RouterLink, AsyncPipe],
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"],
})
export class Navbar implements OnInit {
  userService = inject(UserService);

  isLogged$ = this.userService.isLogged$;

  ngOnInit() {
    this.isLogged$ = this.userService.isLogged$;
  }

  desLog() {
    localStorage.removeItem("user");
    this.userService.setLoggedIn(false);
  }
}
