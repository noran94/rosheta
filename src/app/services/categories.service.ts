import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'category';

  constructor(private http: HttpClient) { }

  listSimpleCategories() {
    return this.http.get(this.url + '/simple-categories');
  }
}
