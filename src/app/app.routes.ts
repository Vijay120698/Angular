import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
 
export const routes: Routes = [
        {path:'',redirectTo:'/dashboard',pathMatch:'full'},
       {path:'dashboard',component:DashboardComponent},
       {path:'list',component:ListComponent}
];
 
@NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule]
     })
     export class AppRoutingModule { }
     