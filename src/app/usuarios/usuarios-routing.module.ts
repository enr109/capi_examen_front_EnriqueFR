import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';



const rutas: Routes = [
    {
        path: '',
        component: TablaUsuarioComponent,
        children: [
            {path: 'usuarios', component: TablaUsuarioComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
