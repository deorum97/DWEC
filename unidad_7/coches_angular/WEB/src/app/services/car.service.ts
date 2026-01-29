import { Injectable } from "@angular/core";
import { Car } from "../interfaces/car";

@Injectable({
  providedIn: "root",
})
export class CarService {
  url = "http://localhost:3000/coches";

  async getAllCars(): Promise<Car[] | []> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getCarById(id: string): Promise<Car | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? null;
  }
}
