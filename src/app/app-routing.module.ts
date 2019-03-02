import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexHomeComponent } from "./component/index/index-home/index-home.component";
import { HomeComponent } from "./component/view/home/home.component";
import { DetalleComponent } from "./component/view/detalle/detalle.component";

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'home', component: HomeComponent}
    ], component: IndexHomeComponent
  },
  {
    path:'home',
    children:[
      {path:'home', redirectTo:'/home/detalle', pathMatch:'full'},
      {path:'detalle', component:DetalleComponent}
    ], component: IndexHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
