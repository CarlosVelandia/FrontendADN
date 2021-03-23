import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tiquete } from '../model/Tiquete';


@Injectable()
export class TiqueteService {

  tiquete: Tiquete;

  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/tiquetes-parque-diversiones';


  getTiquetes(){
    return this.http.get<Tiquete[]>(this.Url+"/tiquetes");
  }
  createTiquete(tiquete:Tiquete){
    return this.http.post<Tiquete>(this.Url+"/tiquetes",tiquete);
  }
  updateTiquete(tiquete:Tiquete){
    return this.http.put<Tiquete>(this.Url+"/tiquetes/"+tiquete.id,tiquete);
  }
  deleteTiquete(tiquete:Tiquete){
    return this.http.delete<Tiquete>(this.Url+"/tiquetes/"+tiquete.id);
  }
}
