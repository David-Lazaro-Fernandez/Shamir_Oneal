import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class LoginResponse{
  
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  

  login(email : string, password : string) {
    return this.httpClient.post<string>(
      "http://localhost:8080/api/cliente/login", 
      {email : email, password : password}
    )
  }

  register(email:string, password: string, nombre:string, aPaterno:string, aMaterno:string, celular:string)
  {
    return this.httpClient.post(
      "http://localhost:8080/api/cliente/nuevo", 
      {correo:email, password:password, nombre:nombre, aPaterno:aPaterno, aMaterno:aMaterno, celular:celular}
    )
  }
}
