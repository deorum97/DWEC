import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HousingLocationInfo } from "src/app/interfaces/housing-location";

@Component({
  selector: "app-housing-location",
  imports: [RouterLink],
  templateUrl: `./housing-location.html`,
  styleUrls: ["./housing-location.css"],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
