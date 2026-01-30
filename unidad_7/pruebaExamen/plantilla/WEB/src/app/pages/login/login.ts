import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  userService = inject(UserService);
  router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  errorMessage = "";

  async login() {
    this.errorMessage = "";

    try {
      const user: User = {
        name: this.loginForm.value.username ?? "",
        password: this.loginForm.value.password ?? "",
      };

      const userdata = await this.userService.loginUser(user);

      if (userdata && userdata.token) {
        localStorage.setItem("user", JSON.stringify(userdata));
        this.userService.setLoggedIn(true);

        this.router.navigate([""]);
      } else {
        this.errorMessage = "Usuario o contraseña incorrectos";
      }
    } catch (error) {
      this.errorMessage = "Error al conectarse con el servidor";
      console.error("Login error:", error);
    }
  }
}
