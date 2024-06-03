import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import Picture from "../models/picture";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  constructor(private http: HttpClient) {}

  private apiKey = ""; // FIXME: REPLACE ME

  get pictures(): Observable<Picture[]> {
    const url = `https://pixabay.com/api/?key=${this.apiKey}&q=flowers`;
    return this.http.get<{ hits: any[] }>(url).pipe(
      map(response => response.hits.map(hit => {
        return {
          id: hit.id,
          url: hit.largeImageURL,
          title: hit.tags
        };
      }))
    );
  }
}
