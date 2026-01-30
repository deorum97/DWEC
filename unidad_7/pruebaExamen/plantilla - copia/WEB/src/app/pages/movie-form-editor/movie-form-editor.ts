import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Movie } from "src/app/interfaces/movie";
import { MovieService } from "src/app/services/movie-service";

@Component({
  selector: "app-movie-form-editor",
  imports: [ReactiveFormsModule],
  templateUrl: "./movie-form-editor.html",
  styleUrl: "./movie-form-editor.scss",
})
export class MovieFormEditor {
  activeRouter: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  movieService = inject(MovieService);
  changeDetectorRef: ChangeDetectorRef;
  errorMessage = "";

  movieId = "";
  movie: Movie | undefined;

  movieForm = new FormGroup({
    title: new FormControl(""),
    year: new FormControl(""),
    genre: new FormControl(""),
    rating: new FormControl(""),
    platform: new FormControl(""),
    imageUrl: new FormControl(""),
  });

  constructor(private ref: ChangeDetectorRef) {
    this.movieId = this.activeRouter.snapshot.params["id"];
    this.movieService.getMovieById(this.movieId).then((movie) => {
      this.movie = movie;
      this.movieForm.patchValue({
        title: movie?.title,
        year: movie?.year.toString(),
        genre: movie?.genre,
        rating: movie?.rating.toString(),
        platform: movie?.platform,
        imageUrl: movie?.imageUrl,
      });
      this.ref.detectChanges();
    });
    this.changeDetectorRef = ref;
  }

  async updateMovie() {
    const movieCreated: Movie = {
      title: this.movieForm.value.title ?? "",
      year: Number(this.movieForm.value.year) ?? 0,
      genre: this.movieForm.value.genre ?? "",
      rating: Number(this.movieForm.value.rating) ?? 0,
      platform: this.movieForm.value.platform ?? "",
      imageUrl: this.movieForm.value.imageUrl ?? "",
    };

    try {
      const movieData = await this.movieService.updateMovie(
        this.movieId,
        movieCreated,
      );

      if (movieData.error && movieData.status === 409) {
        this.errorMessage = "La película " + movieCreated.title + " ya existe";
      } else {
        this.router.navigate(["/movies"]);
      }
    } catch (error) {
      console.error("Movie creation error:", error);
    }
  }
}
