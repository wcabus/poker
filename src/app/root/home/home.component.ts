import { AppController} from '../root.component';

export class HomeController {
  parent: AppController;

  constructor() {
  }
}

export default {
  controller: HomeController,
  template: `jos`,
  require: {
    parent: '^appRoot'
  }
}
