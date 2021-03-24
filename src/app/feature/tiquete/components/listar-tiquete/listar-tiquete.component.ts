import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tiquete } from 'src/app/feature/tiquete/shared/model/Tiquete';
import { TiqueteService } from '../../shared/service/tiquete.service';




@Component({
  selector: 'app-listar-tiquete',
  templateUrl: './listar-tiquete.component.html',
  styleUrls: ['./listar-tiquete.component.css']
})
export class ListarTiqueteComponent implements OnInit {

  tiquetes:Tiquete[];
  constructor(private service: TiqueteService, private router: Router) { }

  ngOnInit() {
    this.service.getTiquetes()
    .subscribe(data => {
      this.tiquetes = data;
    });
  }

  nuevoTiquete(){
    this.router.navigate(["tiquetes/crear"]);
  }

  editarTiquete(tiquete:Tiquete){
    //localStorage.setItem("id",tiquete.id.toString());
    this.service.tiquete = tiquete;
    this.router.navigate(["tiquetes/editar"]);
  }

  deleteTiquete(tiquete:Tiquete){
    this.service.deleteTiquete(tiquete)
    .subscribe(()=>{
      this.tiquetes=this.tiquetes.filter(p=>p!==tiquete);
      alert("Tiquete eliminado...");
    })
  }

}
