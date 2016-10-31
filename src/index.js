import angular from 'angular';

import {App} from './app/containers/App';
import 'angular-ui-router';
import routesConfig from './routes';

import {ItemsService} from './app/services/itemsService/ItemsService';

import {itemsList} from './app/components/items-list/items-list';
import {tabs} from './app/components/tabs/tabs';
import {tab} from './app/components/tab/tab';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('itemsService', ItemsService)
  .component('app', App)
  .component('tabsComponent', tabs)
  .component('tabComponent', tab)
  .component('itemsListComponent', itemsList);
