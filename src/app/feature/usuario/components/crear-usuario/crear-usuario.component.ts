import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/feature/usuario/shared/model/Usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-add',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario:Usuario=new Usuario();
  constructor(private router:Router, private service:UsuarioService) { }

  ngOnInit() {
  }

  // Guardar(){
  //   this.service.createUsuario(this.usuario)
  //   .subscribe(()=>{
  //     alert("El usuario ha sido creado");
  //     this.router.navigate(["usuarios"]);
  //   })
  // }
  Guardar(){
    this.service.createUsuario(this.usuario).subscribe(()=>{
    this.router.navigate(["usuarios"]);
  })
  }
}
