import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service' //Importo la Clase AuthService.
import { Router } from '@angular/router' 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {}
  constructor(
    private authService: AuthService, //Utilizo el metodo signup para autenticar.
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUpUser(this.user)  
      .subscribe( //respuesta que devuelve el servidor
        res => {
          console.log(res); //si me devuelve la respuesta la veo por consola.
          localStorage.setItem('token', res.token); //Token Guardado en el localstorage.
          this.router.navigate(['/private']); //Cuando el usuario se logea se redirecciona a la ruta /private.
        },
        err => console.log(err) //si me devuelve error la veo por consola
      )
  }

}
