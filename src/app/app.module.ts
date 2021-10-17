import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostModule } from './post/post.module';
import { CustomerModule } from './customer/customer.module';


const appRoutes: Routes = [
 {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'customer',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, PostModule, CustomerModule,RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
