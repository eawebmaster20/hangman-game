import { Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { MainGameComponent } from './components/main-game/main-game.component';

export const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'main-game', component: MainGameComponent },
];
