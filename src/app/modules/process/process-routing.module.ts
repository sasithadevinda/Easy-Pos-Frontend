import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import {LandingPageComponent} from "./compoents/landing-page/landing-page.component";

const routes: Routes = [{ path: '', component: ProcessComponent,children:[
  {path:'landing',component:LandingPageComponent},
    {path:'',redirectTo:'/process/landing',pathMatch:'full'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
