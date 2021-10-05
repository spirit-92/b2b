import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class AuthService {
  constructor(
    private http: HttpClient
  ) {}
  get token():string{
    return ''
  }
  login(user):Observable<any>{
  return this.http.post('',user)
  }
  registration(user){
    this.http.post('',user)
  }
  logout(){

  }
  isAuthenticated(): boolean{
    return !!this.token
  }
  private setToken(){

  }
}
