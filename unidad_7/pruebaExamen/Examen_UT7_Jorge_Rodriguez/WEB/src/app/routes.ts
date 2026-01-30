import { Routes } from "@angular/router";
import { AlbumListComponent } from "./pages/album-list-component/album-list-component";
import { AlbumFormComponent } from "./pages/album-form-component/album-form-component";
import { SongTableComponent } from "./pages/song-table-component/song-table-component";
import { SongFormComponent } from "./pages/song-form-component/song-form-component";

const routerConfig: Routes = [
  {
    path: "",
    component: AlbumListComponent,
    title: "Albums",
  },
  {
    path: "albums",
    component: AlbumListComponent,
    title: "Albums",
  },
  {
    path: "albums/new",
    component: AlbumFormComponent,
    title: "New Album",
  },
  {
    path: "songs/new/:id",
    component: SongFormComponent,
    title: "new song",
  },
  {
    path: "songs/:id",
    component: SongTableComponent,
    title: "Album songs",
  },
];
export default routerConfig;
