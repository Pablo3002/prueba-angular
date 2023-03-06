import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( public http:HttpClient ) { }

  url:string = "https://dummyjson.com/users";
  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  postUsuarios(usuario:any): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  putUsuarios(usuario:any, id:Number): Observable<any>{
    return this.http.put(this.url+id, usuario);
  }

  deleteUsuarios(usuario:any, id:Number): Observable<any>{
    return this.http.delete(this.url+id, usuario);
  }
}
