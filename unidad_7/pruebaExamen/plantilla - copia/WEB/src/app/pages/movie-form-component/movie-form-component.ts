import { Component, ChangeDetectorRef, inject } from "@angular/core";
import { FormGroup, ReactiveFormsModule, FormControl } from "@angular/forms";
import { MovieService } from "../../services/movie-service";
import { Movie } from "src/app/interfaces/movie";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-form-component",
  imports: [ReactiveFormsModule],
  templateUrl: "./movie-form-component.html",
  styleUrl: "./movie-form-component.scss",
})
export class MovieFormComponent {
  router = inject(Router);
  movieService = inject(MovieService);
  changeDetectorRef: ChangeDetectorRef;
  errorMessage = "";

  movieForm = new FormGroup({
    title: new FormControl(""),
    year: new FormControl(""),
    genre: new FormControl(""),
    rating: new FormControl(""),
    platform: new FormControl(""),
    imageUrl: new FormControl(""),
  });

  constructor(private ref: ChangeDetectorRef) {
    this.changeDetectorRef = ref;
  }

  async onSubmit() {
    const movieCreated: Movie = {
      title: this.movieForm.value.title ?? "",
      year: Number(this.movieForm.value.year) ?? 0,
      genre: this.movieForm.value.genre ?? "",
      rating: Number(this.movieForm.value.rating) ?? 0,
      platform: this.movieForm.value.platform ?? "",
      imageUrl: this.movieForm.value.imageUrl ?? "",
    };

    try {
      const movieData = await this.movieService.createMovie(movieCreated);

      if (movieData.error && movieData.status === 409) {
        this.errorMessage = "La pelicula " + movieCreated.title + " ya existe";
      } else {
        this.router.navigate(["/movies"]);
      }
    } catch (error) {
      console.error("Movie creation error:", error);
    }
  }
}
