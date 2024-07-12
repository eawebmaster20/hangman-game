import { Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { ProtectGameGuard } from './guards/protect-game.guard';
import { protectCategoryPageGuard } from './guards/potect-category-page.guard';
import { SwitchComponent } from './components/main-game/main-game.component';

export const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'temp',component:SwitchComponent},
  {
    path: 'main-game',
    loadComponent: () =>
      import('./components/main-game/main-game.component').then(
        (m) => m.MainGameComponent
      ),
      canActivate:[ProtectGameGuard]
  },
  {
    path: 'how-to-play',
    loadComponent: () =>
      import('./components/how-to-play/how-to-play.component').then(
        (m) => m.HowToPlayComponent
      )
  },
  {
    path: 'category-pick',
    loadComponent: () =>
      import('./components/category/category.component').then(
        (m) => m.CategoryComponent
      ),
      canActivate:[protectCategoryPageGuard]
  },
];
