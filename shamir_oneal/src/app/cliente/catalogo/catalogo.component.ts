import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface AccountData {
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String, 
  celular: String, 
  cp: String, 
  direccion: String
}

const data: AccountData[] = [
  {nombre:'David', apellidoPaterno:'Lazaro', apellidoMaterno:'Fernandez', direccion:'Juan Escutia', celular:'921-102-8027', cp:'66450'},
  {nombre:'David', apellidoPaterno:'Lazaro', apellidoMaterno:'Fernandez', direccion:'Juan Escutia', celular:'921-102-8027', cp:'66450'},
  {nombre:'David', apellidoPaterno:'Lazaro', apellidoMaterno:'Fernandez', direccion:'Juan Escutia', celular:'921-102-8027', cp:'66450'},
]
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})


export class CatalogoComponent{
  displayedColumns: string[] = ["nombre", "apellidoPaterno", "apellidoMaterno", "celular", "cp", "direccion"];
  dataSource = data
}
