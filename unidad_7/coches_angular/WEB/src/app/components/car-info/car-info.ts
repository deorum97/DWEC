import { Component, input } from "@angular/core";
import { Car } from "src/app/interfaces/car";

@Component({
  selector: "app-car-info",
  imports: [],
  templateUrl: "./car-info.html",
  styleUrl: "./car-info.scss",
})
export class CarInfo {
  carInfo = input.required<Car>();
}
