import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevBlogViewComponent } from './views/dev-blog-view/dev-blog-view.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { BlogPostViewComponent } from './views/blog-post-view/blog-post-view.component';
import { Pagina404Component } from './view/pagina404/pagina404.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { LoginComponent } from './views/login/login.component';
import { HttpdemoComponent } from './views/httpdemo/httpdemo.component';
import { HttptesteComponent } from './views/httpteste/httpteste.component';
import { SettingsComponent } from './views/settings/settings.component';
const routes: Routes = [
  
    { path: 'blog',title: "O blog do António", component: DevBlogViewComponent },
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'sobre', title: "Sobre o António", component: SobreComponent },
    { path: 'blogpost/:id/:seoTitulo', title: "Post do António", component: BlogPostViewComponent},
    { path: 'reset-password', title: "Reset Password", component: ResetPasswordComponent}, 
    { path: 'login', title: "Login", component: LoginComponent},
    { path: 'httpdemo', title: "HttpDemo", component: HttpdemoComponent},
    { path: 'httpteste', title: "HttpTeste", component: HttptesteComponent},
    { path: 'settings', title: "Settings", component: SettingsComponent},
    { path: 'settings/:id', title: "Settings", component: SettingsComponent},


    { path: '**', title: "404", component: Pagina404Component}
    
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
