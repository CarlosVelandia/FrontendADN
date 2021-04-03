import { Injectable } from '@angular/core';
import { Parque } from '../model/Parque';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';



@Injectable()
export class ParqueService {

  parque: Parque;
  endpointParques: "/parques";

  constructor(protected http:HttpService) { }

  getParques(){
    return this.http.doGet<Parque[]>(`${environment.endpoint}/parques`);
  }
  createParque(parque:Parque){
    return this.http.doPost<Parque, boolean>(`${environment.endpoint}/parques`,parque);
  }
  updateParque(parque:Parque){
    return this.http.doPut<Parque, boolean>(`${environment.endpoint}/parques/${parque.id}`,parque);
  }
  deleteParque(parque:Parque){
    return this.http.doDelete<Parque>(`${environment.endpoint}/parques/${parque.id}`);
  }
}
