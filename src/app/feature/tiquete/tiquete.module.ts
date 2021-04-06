import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParqueService } from '@parque/shared/service/parque.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-tiquete.component';
import { ListarTiqueteComponent } from './components/listar-tiquete/listar-tiquete.component';
import { TiqueteService } from './shared/service/tiquete.service';
import { TiqueteRoutingModule } from './tiquete-routing.module';

@NgModule({
  declarations: [
    CrearTiqueteComponent,
    ListarTiqueteComponent
  ],

  imports: [
    TiqueteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [
    TiqueteService,
    ParqueService,
    UsuarioService
  ]
})
export class TiqueteModule { }
