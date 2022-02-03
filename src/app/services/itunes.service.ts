import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applitcation/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  itunesUrl:string = 'https://itunes.apple.com/'

  constructor(private Http:HttpClient) { }

  searchSong(text:string, criteria:string){
    return this.Http.get(`${this.itunesUrl}search?term=${text}&entity=${criteria}`)
  }
}
