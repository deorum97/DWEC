import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Album } from "src/app/interfaces/album";
import { Song } from "src/app/interfaces/song";
import { AlbumService } from "src/app/services/album-service";
import { SongService } from "src/app/services/song-service";
@Component({
  selector: "app-song-form-component",
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: "./song-form-component.html",
  styleUrl: "./song-form-component.scss",
})
export class SongFormComponent {
  router = inject(Router);
  albumService = inject(AlbumService);
  songService = inject(SongService);
  route = inject(ActivatedRoute);
  albumID = "";
  album: Album | undefined;
  song: Song | undefined;

  songForm = new FormGroup({
    title: new FormControl(""),
    duration: new FormControl(""),
    rating: new FormControl(""),
  });

  constructor(private changeDetector: ChangeDetectorRef) {
    this.albumID = this.route.snapshot.params["id"];
    this.albumService.getAlbumById(this.albumID).then((album) => {
      this.album = album;
      this.changeDetector.markForCheck();
    });
  }

  async saveSong() {
    const songCreated: Song = {
      title: this.songForm.value.title ?? "",
      duration: Number(this.songForm.value.duration) ?? 0,
      rating: Number(this.songForm.value.rating) ?? 0,
      listened: false,
      albumId: this.albumID ?? "",
    };

    try {
      const albumData = await this.songService.createSong(songCreated);
    } catch (error) {
      console.error("Album creation error:", error);
      return;
    }
    this.router.navigate(["/songs/" + this.albumID]);
  }
}
