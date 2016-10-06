import * as angular from 'angular';
import appRoot from './root.component';
import appHome from './home';

export default angular.module('app.root', [
  appHome.name
])
  .component('appRoot', appRoot)
  ;
