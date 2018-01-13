import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonasService} from '../personas.service';
import { Persona } from '../clases/persona';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

public listadoPersonas: Persona[];

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
    private _personaService: PersonasService
  ) { }

  ngOnInit() {
    this.getListadoPersonas();
  }

getListadoPersonas(){
  this._personaService.getPersonas().subscribe(
    response => {
      this.listadoPersonas = response;
    },
    error => {
      console.log('*****error*****');
      console.log(<any>error);
    }
  );
}

eliminarPersona(persona: Persona){

  if(confirm('El registro será eliminado ¿Está seguro?')){
    console.log('Confirmada eliminacion');
    this._personaService.eliminarPersona(persona).subscribe(
      response =>{
        console.log(response);
        if(response){
          // se recarga el listado
          this.getListadoPersonas();
        }else{
          alert('No se ha eliminado el registro');
        }
      },
      error => {
        console.log('*****error*****');
        console.log(<any>error);
      }
    );
  }else{
    console.log('Confirmada la NO eliminacion');
  }

}

editarPersona(persona: Persona){
  this._router.navigate(['/insertar', persona.dni]);
}

}
