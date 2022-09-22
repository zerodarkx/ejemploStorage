import { Component } from '@angular/core';

import { CrudService } from "../servicios/crud.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personas: any;

  data: any = {
    nombre: 'prueba',
    apellido: 'apellido',
    hobby: '',
    telefono: '',
    nacionalidad: '',
    edad: ''
  }

  constructor(
    private crud: CrudService
  ) {
    this.crud.mostrar();
  }

  agregar(){
    this.crud.agregarPersona(this.data);
  }

  

}
