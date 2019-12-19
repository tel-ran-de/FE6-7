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
import {HttpClientModule} from '@angular/common/http';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ValidationErrorsComponent } from './component/validation-errors/validation-errors.component';
import {EditAuthorComponent} from './component/edit-author/edit-author.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    EditPostComponent,
    EditAuthorComponent,
    ValidationErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
