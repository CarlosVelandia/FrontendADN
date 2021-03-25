import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';

@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.component.html',
  styleUrls: ['./crear-parque.component.css']
})

export class CrearParqueComponent implements OnInit {

  parque:Parque=new Parque();
  constructor(private router:Router, private service:ParqueService) { }

  ngOnInit() {
  }
  // guardarParque(){
  //   this.service.createParque(this.parque)
  //   .subscribe(()=>{
  //     alert("Se Creo con Exito...!!!");
  //     this.router.navigate(["parques"]);
  //   })
  // }
  guardarParque(){
    this.service.createParque(this.parque).subscribe(()=>{
    this.router.navigate(["parques"]);
  })
  }

}
