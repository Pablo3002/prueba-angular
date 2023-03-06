import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent{

  listUsuario?:Usuario[];
  usuarioEncontrado:Usuario[] = [];
  nombreUsuario="";

  constructor(public service: UsuariosService){}

  buscarUsuario(){
    this.service.getUsuarios().subscribe((data) => {
      this.usuarioEncontrado = [];
      let listaUsuarios:Usuario[] = data.users;
      for(let x in listaUsuarios){
        if(listaUsuarios[x].firstName == this.nombreUsuario){
          console.log(listaUsuarios[x]);
          this.usuarioEncontrado.push(listaUsuarios[x]);
        }
      }
    })
  }
}
