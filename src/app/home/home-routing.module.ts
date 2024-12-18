import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
      },
      {
        path: 'filmes',
        loadChildren: () => import('../filmes/filmes.module').then(m => m.FilmesPageModule)
      },
      {
        path: 'series',
        loadChildren: () => import('../series/series.module').then(m => m.SeriesPageModule)
      },
      {
        path: 'jogos',
        loadChildren: () => import('../jogos/jogos.module').then(m => m.JogosPageModule)
      },
      {
        path: 'animacoes',
        loadChildren: () => import('../animacoes/animacoes.module').then(m => m.AnimacoesPageModule)
      },
      {
        path: '',
        redirectTo: 'noticias',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
