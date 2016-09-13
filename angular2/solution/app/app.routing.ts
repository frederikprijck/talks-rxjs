// Imports
import { PersonRoutes } from './person/person.route';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
  ...PersonRoutes
];

export const Routing = RouterModule.forRoot(appRoutes);