import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  constructor(public service: UsuariosService, public http:HttpClient){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }


  listaUsuarios:any;

  cargarUsuarios(){
    this.service.getUsuarios().subscribe(data => {
      console.log(data.users);
      this.listaUsuarios = data.users;
    })
    console.log(this.listaUsuarios);
  }

}
