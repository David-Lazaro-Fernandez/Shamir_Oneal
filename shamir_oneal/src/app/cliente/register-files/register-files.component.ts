import { Component } from '@angular/core';
import { cColonia } from 'src/app/catalogos/cColonia';
import { cJuzgado } from 'src/app/catalogos/cJuzgado';
import { cMunicipio } from 'src/app/catalogos/cMunicipio';
import { cTCaso } from 'src/app/catalogos/cTCaso';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register-files',
  templateUrl: './register-files.component.html',
  styleUrls: ['./register-files.component.css']
})
export class RegisterFilesComponent {

  colonias? : cColonia[]
  municipios?: cMunicipio[]
  tcasos?: cTCaso[]
  juzgados?: cJuzgado[]
  constructor(private common : CommonService){
    this.common.getColonias().subscribe(res=>{this.colonias = res})
    this.common.getMunicipios().subscribe(res=>{this.municipios = res})
    this.common.getTCasos().subscribe(res=>{this.tcasos = res; })
    this.common.getJuzgados().subscribe(res=>{this.juzgados = res;})
  }

}
