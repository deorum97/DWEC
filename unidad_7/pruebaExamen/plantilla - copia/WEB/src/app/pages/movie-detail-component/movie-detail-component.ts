import { ChangeDetectorRef, Component, inject, input } from "@angular/core";
import { Movie } from "src/app/interfaces/movie";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MovieService } from "src/app/services/movie-service";

@Component({
  selector: "app-movie-detail-component",
  imports: [RouterLink],
  templateUrl: "./movie-detail-component.html",
  styleUrl: "./movie-detail-component.scss",
})
export class MovieDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);
  movieId = "";
  movie: Movie | undefined;

  constructor(ref: ChangeDetectorRef) {
    this.movieService
      .getMovieById(this.route.snapshot.params["id"])
      .then((movie) => {
        this.movie = movie;
        ref.detectChanges();
      });
  }
}
