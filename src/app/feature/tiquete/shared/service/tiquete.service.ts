import { Injectable } from '@angular/core';
import { Tiquete } from '../model/Tiquete';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class TiqueteService {

  tiquete: Tiquete;
  endpointTiquetes: "/tiquetes";

  constructor(protected http:HttpService) { }

  getTiquetes(){
    return this.http.doGet<Tiquete[]>(`${environment.endpoint}/tiquetes`);
  }

  createTiquete(tiquete:Tiquete){
    return this.http.doPost<Tiquete, boolean>(`${environment.endpoint}/tiquetes`,tiquete);
  }

  deleteTiquete(tiquete:Tiquete){
    return this.http.doDelete<Tiquete>(`${environment.endpoint}/tiquetes/${tiquete.id}`);
  }
}
