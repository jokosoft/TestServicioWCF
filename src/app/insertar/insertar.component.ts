import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonasService} from '../personas.service';
import { Persona } from '../clases/persona';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

public dni: string;
public _persona: Persona;
private dtoPersona: Persona;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
    private _personaService: PersonasService
  ) {
    //this.dtoPersona = new Persona('','','');
    //this._persona = new Persona('','','');
}

  ngOnInit() {
    //this.getProducto();

  }

  getPersona(){
  		this._route.params.forEach((params: Params) => {
  			this.dni = params['dni'];

        if(this.dni){



          // this._personaService.getPersona(persona).subscribe(
    			// 	response => {
    			// 		if(response){
    			// 			this._persona = response;
          //       console.log(response);
          //       console.log(this._persona);
    			// 		}else{
    			// 			this._router.navigate(['/listado']);
    			// 		}
    			// 	},
    			// 	error => {
    			// 		console.log(<any>error);
    			// 	}
    			// );
        }

  		});
  	}

}
