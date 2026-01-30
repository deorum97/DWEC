import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [RouterLink],
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"],
})
export class Navbar {}
