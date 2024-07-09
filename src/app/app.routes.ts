import { Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';

export const routes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'main-game',loadComponent: () => 
    import('./components/main-game/main-game.component')
        .then(m => m.MainGameComponent)
      },
  { path: 'how-to-play',loadComponent: () => 
    import('./components/how-to-play/how-to-play.component')
        .then(m => m.HowToPlayComponent)
    },
    // { path: 'main-game',loadComponent: () => 
    //   import('./components/main-game/main-game.component')
    //       .then(m => m.MainGameComponent)
    //   }
    
];
