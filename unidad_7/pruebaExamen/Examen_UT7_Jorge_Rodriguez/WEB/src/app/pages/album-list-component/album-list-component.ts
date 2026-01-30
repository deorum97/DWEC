import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Album } from "src/app/interfaces/album";
import { Song } from "src/app/interfaces/song";
import { AlbumService } from "src/app/services/album-service";
import { SongService } from "src/app/services/song-service";

@Component({
  selector: "app-album-list-component",
  imports: [RouterLink],
  templateUrl: "./album-list-component.html",
  styleUrl: "./album-list-component.scss",
})
export class AlbumListComponent {
  albumService = inject(AlbumService);
  songService = inject(SongService);
  albumList: Album[] = [];
  albumListFiltered: Album[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.albumService.getAllAlbums().then((albums: Album[]) => {
      this.albumList = albums;
      this.albumListFiltered = albums;
      this.changeDetector.markForCheck();
    });
    this.albumListFiltered = this.albumList;
  }

  async deleteAlbum(albumId: string | undefined) {
    await this.albumService.deleteAlbum(albumId!);
    this.albumList = await this.albumService.getAllAlbums();
    this.albumListFiltered = this.albumList;
    this.changeDetector.detectChanges();
  }

  filterAlbums(text: string) {
    if (!text) {
      this.albumListFiltered = this.albumList;
    }
    this.albumListFiltered = this.albumList.filter((album) =>
      album?.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );
  }

  filterByGenre(genre: string) {
    if (!genre) {
      this.albumListFiltered = this.albumList;
    }
    this.albumListFiltered = this.albumList.filter((album) =>
      album?.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase()),
    );
  }
}
