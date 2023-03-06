import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor( public service : UsuariosService){}

  nombre = "";
  usuario?:Usuario;

  eliminarUsuario(){
    /*this.service.getUsuarios().subscribe((data:Usuario[]) => {
      for(let x in data){
        if(data[x].nombre == this.nombre){
          this.usuario = data[x];
          console.log(this.usuario);
          this.service.deleteUsuarios(this.usuario, this.usuario.id).subscribe((response) => {})
        }
      }
    });*/
  }

}
