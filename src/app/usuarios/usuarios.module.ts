import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'; 
import { MaterialModule } from '../material/material.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TablaUsuarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
})
export class UsuariosModule { }
