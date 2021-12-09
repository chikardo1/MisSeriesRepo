import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componenentes , importo los componentes 
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './auth.guard';
// Creo url o rutas en donde cada vez que visite una ruta, cada uno de los anteriores componentes van a ser renderizados.
const routes: Routes = [
  {
    path: '', 
    redirectTo: '/tasks',
    pathMatch: 'full' //Para establecer a /tasks como pagina principal "".
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'private', //Ruta privada del usuario.
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin', //Ruta de Inicio de Sesion.
    component: SigninComponent
  },
  {
    path: 'about', //Ruta de Rockola.
    component: AboutComponent
    
    
  },
  
  {
    path: 'signup', //Ruta de Login.
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
