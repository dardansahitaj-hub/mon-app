import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'calculatrice',
    loadChildren: () => import('./calculatrice/calculatrice.module').then( m => m.CalculatricePageModule)
  },
  {
    path: 'smarthome',
    loadChildren: () => import('./smarthome/smarthome.module').then( m => m.SmarthomePageModule)
  },
  {
    path: 'appareils',
    loadChildren: () => import('./appareils/appareils.module').then( m => m.AppareilsPageModule)
  },
  {
    path: 'single-appareil',
    loadChildren: () => import('./appareils/single-appareil/single-appareil.module').then(m => m.SingleAppareilPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
