import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import {PostComponent} from './component/post/post.component';
import {PostPlaceholderComponent} from './component/post-placeholder/post-placeholder.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post-placeholder', component: PostPlaceholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
