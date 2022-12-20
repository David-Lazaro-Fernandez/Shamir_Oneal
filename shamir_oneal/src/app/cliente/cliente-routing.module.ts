import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFilesComponent } from './register-files/register-files.component';
import { SignupComponent } from './signup/signup.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'cotizacion',
    component : RegisterFilesComponent
  },
  // {
  //   path : '**',
  //   redirectTo : 'login',
  //   pathMatch : 'full'
  // },
  {
    path: 'catalogo',
    component : CatalogoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
