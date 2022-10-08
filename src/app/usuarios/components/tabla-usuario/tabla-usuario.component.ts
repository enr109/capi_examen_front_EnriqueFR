import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';




@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  public dataSource:any;
  public displayedColumns: string[] = ['name', 'fecha_nacimiento', 'edad', 'domicilio', ];

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  public async getUser() {
    const user:any = await this.usuariosService.getUser();
    this.dataSource = new MatTableDataSource(user);
  }

}
