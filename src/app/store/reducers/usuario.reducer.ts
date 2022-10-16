import { Action, createReducer, on } from '@ngrx/store';
import { Usuario, UsuarioData } from 'src/app/models/usuario.mode';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';

export interface UsuarioState {
    id      : string,
    user    : Usuario | null,
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const UsuarioinitialState: UsuarioState = {
    id      : '',
    user    : null,
    loaded  : false,
    loading : false,
    error   : null
}

const _UsuarioReducer = createReducer(UsuarioinitialState,

    on(cargarUsuario, (state, { id }) => ({
        ...state, loading: true,
        id: id
    })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...usuario },
    })),

    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    }))

);

export function UsuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _UsuarioReducer(state, action);
}