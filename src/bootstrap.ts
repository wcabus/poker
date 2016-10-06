require('!!file?name=[name].[ext]!./index.html');
require('bootstrap/dist/css/bootstrap.css');
require('./site.less');

import * as angular from 'angular';
import appModule from './app/index';

angular.element(document).ready(() => {
    angular.bootstrap(document, [
        appModule.name
    ]);
});