import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  arreglo: any = [
    {
      nombre: 'julio',
      apellido: 'Ellies'
    },
    {
      nombre: 'Patricio',
      apellido: 'Flores'
    },
    {
      nombre: 'Pepito',
      apellido: 'Perez'
    },
  ]

  constructor(
    private storage: Storage
  ) {
    this.inicio();
   }

  async inicio(){
    await this.storage.create();
    
    await this.storage.set('personas', this.arreglo);
  }

  mostrar(){
    this.storage.get('personas').then(
      (valor) => {
        console.log(valor);  
      }
    )
  }

  async agregarPersona(data: any){
  
    let personas = await this.storage.get('personas');
    
    personas.push(data)
    

    await this.storage.set('personas', personas)
  }

}
