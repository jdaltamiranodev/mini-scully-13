import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,

  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'articles', loadChildren: () => import('./views/articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
