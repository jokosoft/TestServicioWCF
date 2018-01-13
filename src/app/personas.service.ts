import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Persona } from './clases/Persona';
import { Comun } from './clases/comun';

@Injectable()
export class PersonasService {

  public url_sw: string;

  constructor(
    public _http: Http
  ){
    this.url_sw = Comun.ulr_SW;
  }

  getPersonas(){
    let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url_sw + 'ListadoPersonas', '',{headers: headers})
		 					 .map(res => res.json());
  }

  eliminarPersona(persona: Persona){
      let headers = new Headers({'Content-Type':'application/json'});
      let json: string = JSON.stringify(persona);
		  let body = '{"valor":"' + json.replace(/"/g, "'") + '"}';
      console.log(body);
  		return this._http.post(this.url_sw + 'DeletePersona', body,{headers: headers})
  		 					 .map(res => res.json());
  }


    getPersona(persona: Persona){
        let headers = new Headers({'Content-Type':'application/json'});
        let json: string = JSON.stringify(persona);
  		  let body = '{"valor":"' + json.replace(/"/g, "'") + '"}';
        console.log(body);
    		return this._http.post(this.url_sw + 'GetPersona', body,{headers: headers})
    		 					 .map(res => res.json());
    }

}
