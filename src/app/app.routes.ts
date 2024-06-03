import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {PictureComponent} from "./components/pages/picture/picture.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: "Page d'accueil"},
  {path: 'picture/:id', component: PictureComponent, title: "Photo"},
];
