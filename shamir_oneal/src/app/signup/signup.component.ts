import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  email:string = ""
  password:string = ""
  aMaterno:string = ""
  aPaterno:string = ""
  celular:string = ""
  nombre:string = ""

  constructor( private cliente:ClienteService){}

  registro(){
    this.cliente.register(this.email, this.password, this.nombre, this.aMaterno, this.aPaterno, this.celular).subscribe(res=>{
      console.log(res)
    })
  }
}
