import { ChangeDetectorRef, Component, inject, output } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Song } from "src/app/interfaces/song";
import { SongService } from "src/app/services/song-service";

@Component({
  selector: "app-song-table-component",
  imports: [RouterLink],
  templateUrl: "./song-table-component.html",
  styleUrl: "./song-table-component.scss",
})
export class SongTableComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  songService = inject(SongService);
  songList: Song[] = [];
  songListFiltered: Song[] = [];
  albumId = "";
  estado = false;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.albumId = this.route.snapshot.params["id"];
    this.songService.getAllSongs().then((songs: Song[]) => {
      this.songList = songs.filter((s) => s?.albumId === this.albumId);
      this.songListFiltered = songs.filter((s) => s?.albumId === this.albumId);
      this.changeDetector.markForCheck();
    });
    this.songListFiltered = this.songList;
  }

  async deleteSong(songId: string | undefined) {
    await this.songService.deleteSong(songId!);
    this.songList = await this.songService.getAllSongs();
    this.songListFiltered = this.songList;
    this.changeDetector.detectChanges();
  }

  getEstrellas(songRating: number): number[] {
    const arrayEstrellas = Array(songRating);
    return arrayEstrellas;
  }

  async changeListened(songId: string) {
    const song = await this.songService.getSongById(songId);
    if (song?.listened) {
      this.estado = false;
    } else {
      this.estado = true;
    }
    const newSong: Song = {
      title: song?.title ?? "",
      duration: song?.duration ?? 0,
      rating: song?.rating ?? 0,
      albumId: song?.albumId ?? "",
      listened: this.estado ?? false,
    };
    await this.songService.updateSong(songId, newSong);
  }
}
