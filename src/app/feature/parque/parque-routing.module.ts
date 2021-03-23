import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearParqueComponent } from './components/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './components/editar-parque/editar-parque.component';
import { ListarParqueComponent } from './components/listar-parque/listar-parque.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarParqueComponent
      },
      {
        path: 'crear',
        component: CrearParqueComponent
      },
      {
        path: 'editar',
        component: EditarParqueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueRoutingModule { }
