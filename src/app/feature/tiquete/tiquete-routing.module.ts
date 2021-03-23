import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-tiquete.component';
import { ListarTiqueteComponent } from './components/listar-tiquete/listar-tiquete.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarTiqueteComponent
      },
      {
        path: 'crear',
        component: CrearTiqueteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiqueteRoutingModule { }
