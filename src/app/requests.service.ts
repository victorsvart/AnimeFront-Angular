import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Anime } from './model/anime.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  url: string = "https://localhost:7027/GetAll";
  urlAdd: string = "https://localhost:7027/AddAnime"
 
  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  public GetAnime() {
      
    return this.http.get<Anime>(this.url);
  
  }

  public AddAnime(data: FormData){

    
    return this.http.post<Anime>(this.urlAdd, data, this.httpOptions);
  }
}
