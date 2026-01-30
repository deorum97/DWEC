import { ChangeDetectorRef, Component, Inject, inject } from "@angular/core";
import { FormGroup, ReactiveFormsModule, FormControl } from "@angular/forms";
import { Route, Router, RouterLink } from "@angular/router";
import { Album } from "src/app/interfaces/album";
import { AlbumService } from "src/app/services/album-service";

@Component({
  selector: "app-album-form-component",
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./album-form-component.html",
  styleUrl: "./album-form-component.scss",
})
export class AlbumFormComponent {
  router = inject(Router);
  albumService = inject(AlbumService);

  changeDetectorRef: ChangeDetectorRef;
  errorMessage = "";

  albumForm = new FormGroup({
    title: new FormControl(""),
    artist: new FormControl(""),
    year: new FormControl(""),
    genre: new FormControl(""),
    coverUrl: new FormControl(""),
  });

  constructor(private ref: ChangeDetectorRef) {
    this.changeDetectorRef = ref;
  }

  async onSubmit() {
    const albumCreated: Album = {
      title: this.albumForm.value.title ?? "",
      artist: this.albumForm.value.artist ?? "",
      year: Number(this.albumForm.value.year) ?? 0,
      genre: this.albumForm.value.genre ?? "",
      coverUrl: this.albumForm.value.coverUrl ?? "",
    };

    try {
      const albumData = await this.albumService.createAlbum(albumCreated);

      if (albumData.error && albumData.status === 409) {
        this.errorMessage = "La pelicula " + albumCreated.title + " ya existe";
      } else {
        this.router.navigate(["/albums"]);
      }
    } catch (error) {
      console.error("Album creation error:", error);
    }
  }
}
