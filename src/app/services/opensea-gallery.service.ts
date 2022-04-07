import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nft } from '../interfaces/nft';

@Injectable({
  providedIn: 'root'
})
export class OpenseaGalleryService {

  constructor(private http: HttpClient) { }

  getCollection(id: number): Observable<Nft> {
    return this.http.get<Nft>(`http://localhost:3000/${id}`);
  }
}
