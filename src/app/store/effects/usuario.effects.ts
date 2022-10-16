import { Injectable } from '@angular/core'
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap(
                ( action ) => this.usuariosService.getUserById(action.id)
                    .pipe(
                        map( users => usuariosActions.cargarUsuarioSuccess({ usuario: users })),
                        catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err })))
                    )
            ),
        ),
    );

}