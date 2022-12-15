import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroment/enviroment';

export class LoginResponse{
  token?: string
  timeMs?: number
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }



  login(email : string, password : string) {
    return this.httpClient.post<LoginResponse>(
      environment.serverAddress + "/cliente/login",
      {email : email, password : password}
    )
  }

  register(email:string, password: string, nombre:string, aPaterno:string, aMaterno:string, celular:string)
  {
    return this.httpClient.post(
      environment.serverAddress +"/cliente/nuevo",
      {correo:email, password:password, nombre:nombre, aPaterno:aPaterno, aMaterno:aMaterno, celular:celular}
    )
  }
}
