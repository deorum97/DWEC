import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { CarInfo } from "src/app/components/car-info/car-info";
import { Car } from "src/app/interfaces/car";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-cars",
  imports: [CarInfo],
  templateUrl: "./cars.html",
  styleUrl: "./cars.scss",
})
export class Cars {
  carList: Car[] = [];

  carService: CarService = inject(CarService);

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.carService.getAllCars().then((carList: Car[]) => {
      this.carList = carList;
      this.changeDetectorRef.detectChanges();
    });
  }
}
