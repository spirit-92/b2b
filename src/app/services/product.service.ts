import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.host}/nyVladikGetProducts`)
  }
  getCategories():Observable<any>{
    return this.http.get<any>(`${environment.host}/nyVladikGetCategories`)
  }
  getProductByCategory(id):Observable<any>{
    return this.http.get<any>(`${environment.host}/nyVladikGetProductByCategories?id=${id}`)
  }

}
