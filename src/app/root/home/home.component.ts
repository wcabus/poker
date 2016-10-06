import { AppController} from '../root.component';

interface IChip {
  value: number,
  color: string
}

export class HomeController {
  parent: AppController;
  chips: IChip[];
  smallBlind: number;
  bigBlind: number;

  constructor() {
    this.chips = [{
      value: 25,
      color: 'white'
    }, {
      value: 100,
      color: 'blue'
    }, {
      value: 500,
      color: 'green'
    }, {
      value: 1000,
      color: 'red'
    }, {
      value: 5000,
      color: 'black'
    }];

    this.smallBlind = 25;
    this.bigBlind = 50;
  }
}

export default {
  controller: HomeController,
  template: <string> require('./home.html'),
  require: {
    parent: '^appRoot'
  }
}
