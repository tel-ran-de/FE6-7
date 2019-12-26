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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EditAuthorComponent } from './component/edit-author/edit-author.component';
import { ValidationErrorsComponent } from './component/validation-errors/validation-errors.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageSwitcherComponent } from './component/language-switcher/language-switcher.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ValidationErrorsComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
