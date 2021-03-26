import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Usuario } from 'src/app/feature/usuario/shared/model/Usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private service: UsuarioService, private router: Router, protected swalService: SwalService) { }

  ngOnInit() {
    this.service.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      });
  }

  crearUsuario(){
    this.router.navigate(["usuarios/crear"]);
  }
  editarUsuario(usuario:Usuario){
    this.service.usuario = usuario;
    this.router.navigate(["usuarios/editar"]);
  }

  deleteUsuario(usuario:Usuario){
    this.service.deleteUsuario(usuario).subscribe(()=>{
    this.swalService.danger("Se ha eliminado el Usuario");
    this.usuarios=this.usuarios.filter(p=>p!==usuario);
    })
  }

 // deleteUsuario(usuario: Usuario) {
    //   this.swalService.confirm(
    //     "¿Esta seguro?",
    //     "Esta a punto de eliminar el usuario",
    //     "warning",
    //     "Si",
    //     "No",
    //     {
    //       clickConfirm: () => {
    //         this.service.deleteUsuario(usuario).subscribe(
    //           () => {
    //             this.swalService.succes("Listolis");
    //             this.usuarios = this.usuarios.filter((p) => p !== usuario);
    //           },
    //           (error) => {
    //             this.swalService.danger(error.error.mensaje);
    //           }
    //         );
    //       },
    //     }
    //   );
    // }

}
