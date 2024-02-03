import { Routes } from '@angular/router';
import { HomePageComponent } from '../core/pages/home-page/home-page.component';
import { MedicamentosPageComponent } from '../core/pages/medicamentos-page/medicamentos-page.component';
import { CitasPageComponent } from '../core/pages/citas-page/citas-page.component';
import { PerfilPageComponent } from '../core/pages/perfil-page/perfil-page.component';

export const MEDIC_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'medicamentos',
    component: MedicamentosPageComponent,
  },
  {
    path: 'citas',
    component: CitasPageComponent,
  },
  {
    path: 'perfil',
    component: PerfilPageComponent,
  },
];
