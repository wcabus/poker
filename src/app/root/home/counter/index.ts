import * as angular from 'angular';
import counterComponent from './counter.component';

export default angular.module('app.root.home.counter', [])
  .component('appCounter', counterComponent)
  ;
