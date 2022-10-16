import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario, UsuarioData } from '../../models/usuario.mode';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user: Usuario | null = null;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.isLoading = loading;
    });

    this.route.params.subscribe( ({ id }) => {
      this.store.dispatch( cargarUsuario({ id }) );
    });
  }

}
