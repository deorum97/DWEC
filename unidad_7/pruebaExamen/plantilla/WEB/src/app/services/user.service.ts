import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url = "http://localhost:3000/users";

  isLogged$ = new BehaviorSubject<boolean>(!!localStorage.getItem("user"));

  async loginUser(user: User) {
    const data = await fetch(this.url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return (await data.json()) ?? [];
  }

  setLoggedIn(isLogged: boolean) {
    this.isLogged$.next(isLogged);
  }

  async registerUser(user: User, admin: boolean) {
    const data = await fetch(this.url + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, admin }),
    });
    
    const responseData = await data.json();
    
    if (data.status === 409) {
      return { error: true, status: 409, message: responseData.message };
    }
    
    return responseData ?? [];
  }
}
