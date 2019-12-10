import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MainComponent } from './component/main/main.component';
import { PostPreviewComponent } from './component/post-preview/post-preview.component';
import { NavigationItemComponent } from './component/navigation-item/navigation-item.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { Post1Component } from './component/post1/post1.component';
import { Post2Component } from './component/post2/post2.component';
import { Post3Component } from './component/post3/post3.component';
import { Post4Component } from './component/post4/post4.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainComponent,
    PostPreviewComponent,
    NavigationItemComponent,
    AboutComponent,
    ContactComponent,
    Post1Component,
    Post2Component,
    Post3Component,
    Post4Component,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
