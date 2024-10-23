import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';



const routes: Routes = [
  {
    path:"",
    component: LayoutsComponent
  }
];





@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }