import {Component, Input} from '@angular/core';
import Picture from "../../models/picture";

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {

  @Input() picture!: Picture;

  protected openPicture() {

  }
}
