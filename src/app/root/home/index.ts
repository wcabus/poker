import * as angular from 'angular';
import homeComponent from './home.component';
import appCounter from './counter';

export default angular.module('app.root.home', [
  appCounter.name
])
  .component('appHome', homeComponent)
  ;
