import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ClienteRoutingModule } from './cliente-routing.module';
import { RegisterFilesComponent } from './register-files/register-files.component';
import { NgxMatFileInputComponent, NgxMatFileInputModule } from '@angular-material-components/file-input';
import { CommonModule } from '@angular/common';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RegisterFilesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgxMatFileInputModule,
    RouterModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
