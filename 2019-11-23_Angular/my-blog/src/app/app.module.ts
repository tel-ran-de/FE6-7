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
import { PostComponent } from './component/post/post.component';
import { PostPlaceholderComponent } from './component/post-placeholder/post-placeholder.component';

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
    PostComponent,
    PostPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
