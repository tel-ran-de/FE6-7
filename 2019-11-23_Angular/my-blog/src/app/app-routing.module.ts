import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./component/about/about.component";
import {MainComponent} from "./component/main/main.component";
import {ContactComponent} from "./component/contact/contact.component";
import {PostComponent} from "./component/post/post.component";


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent },
  {path:'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
