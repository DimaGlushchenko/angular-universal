import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { PageIdComponent } from './page-id/page-id.component';
import { SeoPageIdGuard } from './services/seo-page-id-guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: ['Home page'],
      desc: 'My First Static Website built with Angular Universal'
    }
  },
  
  {
    path: 'page.html', component: PageComponent,
    data: {
      title: ['Elements List'],
      desc: 'My List of elements in my Static Website'
    }
  },

  {
    path: 'page/:id', component: PageIdComponent, canActivate: [SeoPageIdGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
