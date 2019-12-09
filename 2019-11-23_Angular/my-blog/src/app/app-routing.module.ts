import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import {ContactComponent} from './component/contact/contact.component';
import {PostComponent} from './component/post/post.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {Post1Component} from './component/post1/post1.component';
import {Post2Component} from './component/post2/post2.component';
import {Post3Component} from './component/post3/post3.component';
import {Post4Component} from './component/post4/post4.component';


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'home/post1', component: Post1Component },
  { path: 'home/post2', component: Post2Component },
  { path: 'home/post3', component: Post3Component },
  { path: 'home/post4', component: Post4Component },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'post', component: PostComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
