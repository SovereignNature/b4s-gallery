import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenseaGalleryService {

  constructor(private http: HttpClient) { }

  getBreath(collection: string, id: string): Observable<Breath> {    
    return this.http.get<Breath>(`${environment.apiUrl}${collection}/breath/${id}`);
  }

  getMetadata(collection: string, id: string): Observable<Metadata> {
    return this.http.get<Metadata>(`${environment.apiUrl}${collection}/metadata/${id}`);
  }
}
