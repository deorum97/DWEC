import { Injectable } from "@angular/core";
import { Song } from "../interfaces/song";

@Injectable({
  providedIn: "root",
})
export class SongService {
  url = "http://localhost:3000/api/songs";

  async getAllSongs(): Promise<Song[] | []> {
    const data = fetch(this.url);
    const responseData = (await data).json();
    return responseData ?? [];
  }

  async getSongById(id: string): Promise<Song | undefined> {
    const data = await fetch(this.url + `/${id}`);
    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async createSong(song: Song) {
    const data = await fetch(this.url + "/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    });

    const responseData = await data.json();

    if (data.status === 409) {
      return { error: true, status: 409, message: responseData.message };
    }
    return responseData ?? undefined;
  }

  async updateSong(id: string, song: Song) {
    const data = await fetch(this.url + `/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(song),
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async deleteSong(id: string) {
    const data = await fetch(this.url + `/${id}`, {
      method: "DELETE",
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }
}
