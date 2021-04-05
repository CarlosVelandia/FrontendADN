import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';

@Component({
  selector: 'app-listar-parque',
  templateUrl: './listar-parque.component.html',
  styleUrls: ['./listar-parque.component.css']
})
export class ListarParqueComponent implements OnInit {

  public parques:Observable<Parque[]>;

  constructor(private service: ParqueService, private router: Router,protected swalService: SwalService) { }

  ngOnInit() {
    this.parques = this.service.getParques();

  }

  nuevoParque(){
    this.router.navigate(["parques/crear"]);
  }

  editarParque(parque:Parque){
    this.service.parque = parque;
    this.router.navigate(["parques/editar"]);
  }

  deleteParque(parque:Parque){
    this.service.deleteParque(parque).subscribe(()=>{
    this.swalService.danger("Parque eliminado correctamente");
    this.parques = this.service.getParques();
  })
  }



}
