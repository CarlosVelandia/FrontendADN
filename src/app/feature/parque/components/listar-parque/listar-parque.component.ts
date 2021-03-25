import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';

@Component({
  selector: 'app-listar-parque',
  templateUrl: './listar-parque.component.html',
  styleUrls: ['./listar-parque.component.css']
})
export class ListarParqueComponent implements OnInit {

  parques:Parque[];
  constructor(private service: ParqueService, private router: Router) { }

  ngOnInit() {
    this.service.getParques()
      .subscribe(data => {
        this.parques = data;
      });
  }

  nuevoParque(){
    this.router.navigate(["parques/crear"]);
  }

  editarParque(parque:Parque){
    this.service.parque = parque;
    this.router.navigate(["parques/editar"]);
  }

  // deleteParque(parque:Parque){
  //   this.service.deleteParque(parque)
  //   .subscribe(()=>{
  //     this.parques=this.parques.filter(p=>p!==parque);
  //     alert("Parque eliminado...");
  //   })
  // }

  deleteParque(parque:Parque){
    this.service.deleteParque(parque).subscribe(()=>{
    this.parques=this.parques.filter(p=>p!==parque);
  })
  }



}
