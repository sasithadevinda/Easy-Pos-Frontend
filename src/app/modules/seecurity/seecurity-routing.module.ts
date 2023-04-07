import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeecurityComponent } from './seecurity.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [{ path: '', component: SeecurityComponent,
  children:[
    {path:'',redirectTo:'security/login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeecurityRoutingModule { }
