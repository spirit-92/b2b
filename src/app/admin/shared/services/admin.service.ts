import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";


@Injectable({providedIn: 'root'})
export class AdminService {
  constructor(
    private http: HttpClient
  ) {
  }

  getShops(): Observable<any> {
    return this.http.get<any>(`${environment.host}/nyVladikGetShops`)
  }

  saveProduct(product: any): Observable<any> {
    return this.http.post<any>(`${environment.host}/nyVladikSaveProduct`, product)
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.host}/nyVladikGetProducts`)
  }
  getProductById(id):Observable<any>{
    return this.http.post<any>(`${environment.host}/nyVladikGetProductById`, {
      'id': id
    },)
  }

  deleteProduct(id): Observable<any> {
    return this.http.post<any>(`${environment.host}/nyVladikDeleteProduct`, {
      'id': id
    },)
  }
  editProduct(product):Observable<any>{
    return this.http.post<any>(`${environment.host}/nyVladikEditProduct`, product,)
  }
}
