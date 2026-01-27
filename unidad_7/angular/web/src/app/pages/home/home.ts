import { Component, inject } from "@angular/core";
import { HousingLocation } from "src/app/components/housing-location/housing-location";
import { HousingLocationInfo } from "src/app/interfaces/housing-location";
import { Housing } from "src/app/services/housing";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: `./home.html`,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(Housing);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
