import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import { ContactComponent} from './component/contact/contact.component';
import {SamplePostComponent} from './component/sample-post/sample-post.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'samplePost', component: SamplePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
