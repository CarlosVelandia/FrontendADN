import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Parque } from '@parque/shared/model/Parque';
import { ParqueService } from '@parque/shared/service/parque.service';
import { Tiquete } from 'src/app/feature/tiquete/shared/model/Tiquete';
import { Usuario } from 'src/app/feature/usuario/shared/model/Usuario';
import { UsuarioService } from 'src/app/feature/usuario/shared/service/usuario.service';

import { TiqueteService } from '../../shared/service/tiquete.service';

@Component({
  selector: 'app-crear-tiquete',
  templateUrl: './crear-tiquete.component.html',
  styleUrls: ['./crear-tiquete.component.css']
})
export class CrearTiqueteComponent implements OnInit {


  tiquete:Tiquete=new Tiquete();
  parques:Parque[];
  usuarios:Usuario[];

  constructor(
    private router:Router,
    private service:TiqueteService,
    private serviceParque:ParqueService,
    private serviceUsuario:UsuarioService,
    protected swalService: SwalService,
    ) { }

  ngOnInit() {

    this.serviceParque.getParques()
    .subscribe(data => {
      this.parques = data;
    });
    this.serviceUsuario.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      });
  }
  // guardarTiquete(){
  //   this.service.createTiquete(this.tiquete)
  //   .subscribe(()=>{
  //     alert("Se Creo con Exito...!!!");
  //     this.router.navigate(["tiquetes"]);
  //   })
  // }
  guardarTiquete(){
    this.service.createTiquete(this.tiquete).subscribe(()=>{
    this.swalService.succes("Tiquete creado correctamente");
    this.router.navigate(["tiquetes"]);
  })
  }

}
