export class AppController {
  private title = 'Realdolmen Poker';
  private states = [
    {
      title: 'NAV_HOME',
      state: 'app.home'
    }
  ];

  static $inject = ['$state'];
  constructor(private $state:ng.ui.IStateService) {}
}

export default {
  controller: AppController,
  template: <string> require('./root.html')
};
