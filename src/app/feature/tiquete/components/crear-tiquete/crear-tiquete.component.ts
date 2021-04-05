import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Parque } from '@parque/shared/model/Parque';
import { ParqueService } from '@parque/shared/service/parque.service';
import { Observable } from 'rxjs';
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
  public parques:Observable<Parque[]>;
  public usuarios:Observable<Usuario[]>;

  constructor(
    private router:Router,
    private service:TiqueteService,
    private serviceParque:ParqueService,
    private serviceUsuario:UsuarioService,
    protected swalService: SwalService,
    ) { }

  ngOnInit() {

    this.parques = this.serviceParque.getParques();
    this.usuarios = this.serviceUsuario.getUsuarios();
  }

  guardarTiquete(){
    this.service.createTiquete(this.tiquete).subscribe(
      () => {
        this.swalService.succes("Tiquete creado correctamente");
        this.router.navigate(["tiquetes"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
   }

}
