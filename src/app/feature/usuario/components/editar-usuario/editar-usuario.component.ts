import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/feature/usuario/shared/model/Usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario :Usuario=new Usuario();
  constructor(private router:Router,private service:UsuarioService) {

    this.usuario=this.service.usuario;
   }

  ngOnInit() {

  }

  actualizarUsuario(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["usuarios"]);
    })
  }

}
