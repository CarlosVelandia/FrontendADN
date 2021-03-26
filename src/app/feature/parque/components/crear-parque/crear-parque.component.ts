import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '@core/services/swal.service';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';

@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.component.html',
  styleUrls: ['./crear-parque.component.css']
})

export class CrearParqueComponent implements OnInit {

  parque:Parque=new Parque();
  constructor(
    private router:Router,
    private service:ParqueService,
    protected swalService: SwalService
    ) { }

  ngOnInit() {
  }

  guardarParque(){
    this.service.createParque(this.parque).subscribe(()=>{
      this.swalService.succes("Parque creado correctamente");
      this.router.navigate(["parques"]);
  },
  (error) => {
    this.swalService.danger(error.error.mensaje);
  })
  }

}
