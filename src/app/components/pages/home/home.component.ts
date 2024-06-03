import {Component, OnInit} from '@angular/core';
import {PictureService} from "../../../services/picture.service";
import Picture from "../../../models/picture";
import {NgOptimizedImage} from "@angular/common";
import {TileComponent} from "../../tile/tile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  protected pictures: Picture[] | undefined;
  protected loading = true;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.pictureService.pictures.subscribe({
      next: (result: Picture[]) => this.pictures = result,
      error: (error: any) => console.error,
      complete: () => this.loading = false
    });
  }
}
