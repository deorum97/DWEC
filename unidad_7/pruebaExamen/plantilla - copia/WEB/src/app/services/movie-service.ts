import { Injectable } from "@angular/core";
import { Movie } from "../interfaces/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  url = "http://localhost:3000/api/movies";

  async getAllMovies(): Promise<Movie[] | []> {
    const data = fetch(this.url);
    const responseData = (await data).json();
    return responseData ?? [];
  }

  async getMovieById(id: string): Promise<Movie | undefined> {
    const data = await fetch(this.url + `/${id}`);
    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async createMovie(movie: Movie) {
    const data = await fetch(this.url + "/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const responseData = await data.json();

    if (data.status === 409) {
      return { error: true, status: 409, message: responseData.message };
    }
    return responseData ?? undefined;
  }

  async updateMovie(id: string, movie: Movie) {
    const data = await fetch(this.url + `/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async deleteMovie(id: string) {
    const data = await fetch(this.url + `/${id}`, {
      method: "DELETE",
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }
}
