import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('./contacto/contacto.module').then((m) => m.ContactoModule),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];

/* loadChildren: () =>
      import('./home/home.module').then((m) => m.FeatureModule), */
