import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EliminarComponent } from './componentes/eliminar/eliminar.component'

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    MenuComponent,
    RegistroComponent,
    ListaComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MenuComponent},
      {path: 'buscador', component: BuscadorComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'lista', component: ListaComponent},
      {path: 'modificar', component: ModificarComponent},
      {path: 'eliminar', component: EliminarComponent},
    ])
  ],
  exports:[
    BuscadorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
