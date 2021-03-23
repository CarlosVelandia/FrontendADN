import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearParqueComponent } from './components/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './components/editar-parque/editar-parque.component';
import { ListarParqueComponent } from './components/listar-parque/listar-parque.component';
import { ParqueRoutingModule } from './parque-routing.module';
import { ParqueService } from './shared/service/parque.service';

@NgModule({
  declarations: [
    CrearParqueComponent,
    EditarParqueComponent,
    ListarParqueComponent
  ],
  imports: [
    ParqueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [ParqueService]
})
export class ParqueModule { }
