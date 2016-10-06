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
  template: `
  <div class="container">
    <div class="row">
      <h1>Realdolmen Poker</h1>
      <div ui-view></div>
    </div>
  </div>
  `
};
