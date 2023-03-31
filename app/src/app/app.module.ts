import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPostComponent } from './blog-list/blog-post/blog-post.component';
import { AppRoutingModule } from './app-routing.module';
import { DevBlogViewComponent } from './views/dev-blog-view/dev-blog-view.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { PostComponent } from './blog/post/post.component';
import { BlogPostViewComponent } from './views/blog-post-view/blog-post-view.component';
import { Pagina404Component } from './view/pagina404/pagina404.component';
import { AlertaComponent } from './alerta/alerta.component';
import { IndexPostPipe } from './index-post.pipe';
import { IndexPostPipePipe } from './pipe/index-post-pipe.pipe';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { LoginComponent } from './views/login/login.component';
import { HttpdemoComponent } from './views/httpdemo/httpdemo.component';
import { HttptesteComponent } from './views/httpteste/httpteste.component';
import { SettingsComponent } from './views/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainWrapperComponent,
    CtaSectionComponent,
    BlogListComponent,
    FooterComponent,
    BlogPostComponent,
    DevBlogViewComponent,
    SobreComponent,
    PostComponent,
    BlogPostViewComponent,
    Pagina404Component,
    AlertaComponent,
    IndexPostPipe,
    IndexPostPipePipe,
    ResetPasswordComponent,
    LoginComponent,
    HttpdemoComponent,
    HttptesteComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
