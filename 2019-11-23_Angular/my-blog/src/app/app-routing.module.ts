import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import {ContactComponent} from './component/contact/contact.component';
import {PostComponent} from './component/post/post.component';
import {Post1Component} from './component/post1/post1.component';
import {Post2Component} from './component/post2/post2.component';
import {Post3Component} from './component/post3/post3.component';
import {Post4Component} from './component/post4/post4.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'post', component: PostComponent},
  { path: 'post1', component: Post1Component},
  { path: 'post2', component: Post2Component},
  { path: 'post3', component: Post3Component},
  { path: 'post4', component: Post4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
