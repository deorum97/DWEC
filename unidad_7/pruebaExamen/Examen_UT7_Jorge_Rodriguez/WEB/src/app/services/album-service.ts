import { Injectable } from "@angular/core";
import { Album } from "../interfaces/album";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  url = "http://localhost:3000/api/albums";

  async getAllAlbums(): Promise<Album[] | []> {
    const data = fetch(this.url);
    const responseData = (await data).json();
    return responseData ?? [];
  }

  async getAlbumById(id: string): Promise<Album | undefined> {
    const data = await fetch(this.url + `/${id}`);
    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async createAlbum(album: Album) {
    const data = await fetch(this.url + "/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album),
    });

    const responseData = await data.json();

    if (data.status === 409) {
      return { error: true, status: 409, message: responseData.message };
    }
    return responseData ?? undefined;
  }

  async updateAlbum(id: string, album: Album) {
    const data = await fetch(this.url + `/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(album),
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }

  async deleteAlbum(id: string) {
    const data = await fetch(this.url + `/${id}`, {
      method: "DELETE",
    });

    const responseData = await data.json();
    return responseData ?? undefined;
  }
}
