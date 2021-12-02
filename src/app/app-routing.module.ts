import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './components/erreur/erreur.component';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-layout/admin-layout.module').then((m) => m.AdminLayoutModule),
  },
  { path: "", redirectTo: "/user/accueil", pathMatch: "full" },
  { path: "**", component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
