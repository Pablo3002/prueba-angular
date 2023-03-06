import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre = "";
  apellido = "";
  edad :Number = 0;
  imagen = "";

  constructor( public service : UsuariosService){}

  registrarUsuario(){
    
    /*let indice = 0;
    this.service.getUsuarios().subscribe((data:Usuario[]) => {
      indice = data.length + 1;
    })

    let usuario:Usuario = {
      id : indice,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      imagen: this.imagen
    };

    this.service.postUsuarios(usuario).subscribe((response) =>{});*/
  }

}
