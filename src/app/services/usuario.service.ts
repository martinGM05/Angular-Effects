import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Main, MainUser, Usuario, UsuarioData } from '../models/usuario.mode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Main>(`${this.url}/users?per_page=6&delay=3`)
      .pipe(
        map(resp => resp.data)
      );
  }

  getUserById(id: string): Observable<Usuario> {
    return this.http.get<MainUser>(`${this.url}/users/${id}`)
      .pipe(
        map(resp => resp.data)
      );
  }


}
