import { Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { MainGameComponent } from './components/main-game/main-game.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

export const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'main-game', component: MainGameComponent },
];
