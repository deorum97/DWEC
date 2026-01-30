import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { Movie } from "src/app/interfaces/movie";
import { MovieService } from "src/app/services/movie-service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-movie-list-component",
  imports: [RouterLink],
  templateUrl: "./movie-list-component.html",
  styleUrl: "./movie-list-component.scss",
})
export class MovieListComponent {
  movieService = inject(MovieService);
  movieList: Movie[] = [];
  movieListFiltered: Movie[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.movieService.getAllMovies().then((movies: Movie[]) => {
      this.movieList = movies;
      this.movieListFiltered = movies;
      this.changeDetector.markForCheck();
    });
    this.movieListFiltered = this.movieList;
  }

  getEstrellas(movieRating: number): number[] {
    const arrayEstrellas = Array(movieRating);
    return arrayEstrellas;
  }

  async deleteMovie(movieId: string | undefined) {
    await this.movieService.deleteMovie(movieId!);
    this.movieList = await this.movieService.getAllMovies();
    this.movieListFiltered = this.movieList;
    this.changeDetector.detectChanges();
  }

  filterMovies(text: string) {
    if (!text) {
      this.movieListFiltered = this.movieList;
    }
    this.movieListFiltered = this.movieList.filter((movie) =>
      movie?.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );
  }

  filterByGenre(genre: string) {
    if (!genre) {
      this.movieListFiltered = this.movieList;
    }
    this.movieListFiltered = this.movieList.filter((movie) =>
      movie?.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase()),
    );
  }
}
