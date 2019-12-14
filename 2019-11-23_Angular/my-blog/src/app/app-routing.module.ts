import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import {PostComponent} from './component/post/post.component';
import {EditPostComponent} from './component/edit-post/edit-post.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'new-post', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
