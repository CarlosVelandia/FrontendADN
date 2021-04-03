import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Parque } from "../../shared/model/Parque";
import { ParqueService } from "../../shared/service/parque.service";

@Component({
  selector: "app-editar-parque",
  templateUrl: "./editar-parque.component.html",
  styleUrls: ["./editar-parque.component.css"],
})
export class EditarParqueComponent implements OnInit {
  parque: Parque;

  constructor(
    private router: Router,
    private service: ParqueService,
    protected swalService: SwalService
  ) {
    this.parque = this.service.parque;
  }

  ngOnInit() {}

  actualizarParque(parque: Parque) {
    this.service.updateParque(parque).subscribe(
      () => {
        this.swalService.succes("Parque actualizado correctamente");
        this.router.navigate(["parques"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
  }
}
