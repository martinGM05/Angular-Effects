import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.mode';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
    `
      .card {
        width: 200px;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #454545;
        marginbottom: 10px;
        box-shadow: 0 0 10px #454545;
      }
    `
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[]  = [];
  isLoading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.isLoading = loading;
      this.error = error;
    });

    this.store.dispatch( cargarUsuarios() );
  }

}
