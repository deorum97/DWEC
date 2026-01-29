import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "src/app/interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./register.html",
  styleUrl: "./register.scss",
})
export class Register {
  userService = inject(UserService);
  router = inject(Router);

  registerForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    passwordR: new FormControl(""),
    admin: new FormControl(false),
  });

  errorMessage = "";

  async register() {
    this.errorMessage = "";

    if (
      this.registerForm.value.password !== this.registerForm.value.passwordR
    ) {
      this.errorMessage = "Las contraseñas no coinciden";
      return;
    }

    try {
      const user: User = {
        name: this.registerForm.value.username ?? "usuario",
        password: this.registerForm.value.password ?? "contraseña",
      };
      const userdata = await this.userService.registerUser(
        user,
        this.registerForm.value.admin ?? false,
      );

      if (userdata.error && userdata.status === 409) {
        this.errorMessage = "El usuario " + user.name + " ya existe";
      } else {
        this.router.navigate(["/login"]);
      }
    } catch (error) {
      this.errorMessage = "Error al conectarse con el servidor";
      console.error("Register error:", error);
    }
  }
}
