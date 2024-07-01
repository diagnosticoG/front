import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../compartido/modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'https://localhost:7096/api/Persona'
  constructor(private http:HttpClient) {
   }

  cargarPersonas():Observable<any> {
    return this.http.get(this.url)
  }

  cargarPersona(id:string):Observable<any> {
    return this.http.get(this.url+"/"+id)
  }

  crearPersona(entidad:Persona):Observable<any>{
    return this.http.post(this.url,entidad)
  }

  actualizarPersona(id:string, entidad:Persona):Observable<any>{
    return this.http.put(this.url+'/'+id,entidad)
  }

  eliminarPersona(id:string):Observable<any> {
    return this.http.delete(this.url+'/'+id)
  }
}
