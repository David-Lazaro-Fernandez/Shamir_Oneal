import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cColonia } from '../catalogos/cColonia';
import { cTCaso } from '../catalogos/cTCaso';
import { cMunicipio } from '../catalogos/cMunicipio';
import { cJuzgado } from '../catalogos/cJuzgado';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getColonias(){
    return this.httpClient.get<cColonia[]>(environment.serverAddress+"/catalogo/colonias")
  }
  getMunicipios(){
    return this.httpClient.get<cMunicipio[]>(environment.serverAddress+"/catalogo/municipios")
  }
  getTCasos(){
    return this.httpClient.get<cTCaso[]>(environment.serverAddress+"/catalogo/tipoCasos")
  }
  getJuzgados(){
    return this.httpClient.get<cJuzgado[]>(environment.serverAddress+"/catalogo/juzgados")
  }


}
