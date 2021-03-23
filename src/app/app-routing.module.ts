import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'parques', loadChildren: () => import('@parque/parque.module').then(mod => mod.ParqueModule) },
  { path: 'tiquetes', loadChildren: () => import('@tiquete/tiquete.module').then(mod => mod.TiqueteModule) },
  { path: 'usuarios', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
