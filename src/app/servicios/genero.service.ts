import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../compartido/modelos/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  url = 'https://localhost:7096/api/Generos'
  constructor(private http:HttpClient) {
   }

  cargarGeneros():Observable<any> {
    return this.http.get(this.url)
  }

  cargarGenero(id:string):Observable<any> {
    return this.http.get(this.url+"/"+id)
  }

  crearGenero(entidad:Genero):Observable<any>{
    return this.http.post(this.url,entidad)
  }

  actualizarGenero(id:string, entidad:Genero):Observable<any>{
    return this.http.put(this.url+'/'+id,entidad)
  }

  eliminarGenero(id:string):Observable<any> {
    return this.http.delete(this.url+'/'+id)
  }
}
