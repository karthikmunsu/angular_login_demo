import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the login component here first
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
{
	path: 'login',
	component: LoginComponent,
	data: {
		title: 'Login'
	}
}, 
{
	path: '**',
	component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
