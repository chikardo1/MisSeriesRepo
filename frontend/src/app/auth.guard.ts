import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; //Importo AuthServices.

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) { //Si el usuario esta registrado devuelve true.
      return true;
    }

    this.router.navigate(['/signin']); //Si el usuario NO esta registrado , lo lleva al Inicio de Sesion.
    return false;
  }

}
