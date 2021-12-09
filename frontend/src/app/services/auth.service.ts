import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  //Importo el Modulo HTTPCLIENT.
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://angular-api888.herokuapp.com/api'; //Direccion donde esta deployada la base de datos y de donde voy a pedir los datos.
  constructor(private http: HttpClient, private router: Router) { }


  signUpUser(user) {
    return this.http.post<any>(this.URL + '/signup', user); //
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() { //Creo el metodo Loggedin para comprobar si el usuario esta logeado o no.
    return !!localStorage.getItem('token'); // esta logueado si tiene el token.
  }

  logout() { //Elimina el token
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token'); //Retorna desde LocalStorage los token guardados.
  }

}
