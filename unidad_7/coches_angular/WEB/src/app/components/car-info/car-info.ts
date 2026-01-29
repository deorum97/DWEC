import { Component, input } from "@angular/core";
import { Car } from "src/app/interfaces/car";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-car-info",
  imports: [RouterLink],
  templateUrl: "./car-info.html",
  styleUrl: "./car-info.scss",
})
export class CarInfo {
  carInfo = input.required<Car>();
}
