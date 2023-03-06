import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  constructor( public service : UsuariosService){}

  nombre = "";
  nombreNuevo = "";
  apellidoNuevo = "";
  edadNuevo :Number = 0;
  imagenNuevo = "";
  usuario?:Usuario;


  actualizarUsuario(){
    /*this.service.getUsuarios().subscribe((data:Usuario[]) => {
      for(let x in data){
        if(data[x].nombre == this.nombre){
          this.usuario = data[x];
          console.log(data[x].nombre+" - "+this.nombre+" - "+this.usuario.id);

          let usuarioNuevo:Usuario = {
            id : this.usuario.id,
            nombre: this.nombreNuevo,
            apellido: this.apellidoNuevo,
            edad: this.edadNuevo,
            imagen: this.imagenNuevo
          };
          
          this.service.putUsuarios(usuarioNuevo, this.usuario.id).subscribe((response)=>{
            console.log(response);
          } ); 
        }
      }
    });*/
  }

}
