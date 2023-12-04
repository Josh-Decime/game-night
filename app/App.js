import { PlayerController } from './controllers/PlayerController.js';
import { router } from './router-config.js';


class App {

  router = router

  PlayerController = new PlayerController()
  // console.log('Plyer controller', PlayerController)

}



const app = new App()
// @ts-ignore
window.app = app
