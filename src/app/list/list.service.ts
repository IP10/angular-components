import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable()
export class ListService {

  constructor(private http:HttpClient) { }

  getPictures(){
    return this.http.get('https://picsum.photos/v2/list');
  }
}