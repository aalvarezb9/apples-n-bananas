import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
