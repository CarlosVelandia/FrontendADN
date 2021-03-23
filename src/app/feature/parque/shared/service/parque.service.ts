import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parque } from '../model/Parque';


@Injectable()
export class ParqueService {

  parque: Parque;

  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/tiquetes-parque-diversiones';


  getParques(){
    return this.http.get<Parque[]>(this.Url+"/parques");
  }
  createParque(parque:Parque){
    return this.http.post<Parque>(this.Url+"/parques",parque);
  }
  updateParque(parque:Parque){
    return this.http.put<Parque>(this.Url+"/parques/"+parque.id,parque);
  }
  deleteParque(parque:Parque){
    return this.http.delete<Parque>(this.Url+"/parques/"+parque.id);
  }
}
