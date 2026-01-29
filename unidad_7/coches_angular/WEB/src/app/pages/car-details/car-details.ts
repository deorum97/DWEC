import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { CarService } from "src/app/services/car.service";
import { ActivatedRoute } from "@angular/router";
import { Car } from "src/app/interfaces/car";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-car-details",
  imports: [ReactiveFormsModule],
  templateUrl: "./car-details.html",
  styleUrl: "./car-details.scss",
})
export class CarDetails {
  carService = inject(CarService);
  route = inject(ActivatedRoute);
  car: Car | undefined;

  applyForm = new FormGroup({
    marca: new FormControl(""),
    modelo: new FormControl(""),
    year: new FormControl(""),
    precio: new FormControl(""),
    imagen: new FormControl(""),
  });

  carId = "";

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.carId = String(this.route.snapshot.params["id"]);
    this.carService.getCarById(this.carId).then((car) => {
      this.car = car;
      this.changeDetectorRef.detectChanges();
    });
  }

  submitApplication() {}
}
