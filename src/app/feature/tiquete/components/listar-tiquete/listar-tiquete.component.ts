import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { Tiquete } from 'src/app/feature/tiquete/shared/model/Tiquete';
import { TiqueteService } from '../../shared/service/tiquete.service';




@Component({
  selector: 'app-listar-tiquete',
  templateUrl: './listar-tiquete.component.html',
  styleUrls: ['./listar-tiquete.component.css']
})
export class ListarTiqueteComponent implements OnInit {

  public tiquetes:Observable<Tiquete[]>;

  constructor(private service: TiqueteService, private router: Router, protected swalService: SwalService) { }

  ngOnInit() {
    this.tiquetes = this.service.getTiquetes();
  }

  nuevoTiquete(){
    this.router.navigate(["tiquetes/crear"]);
  }

  editarTiquete(tiquete:Tiquete){
    this.service.tiquete = tiquete;
    this.router.navigate(["tiquetes/editar"]);
  }

  deleteTiquete(tiquete:Tiquete){
    this.service.deleteTiquete(tiquete).subscribe(()=>{
    this.swalService.danger("Tiquete eliminado correctamente");
    this.tiquetes = this.service.getTiquetes();
   })
  }

}
