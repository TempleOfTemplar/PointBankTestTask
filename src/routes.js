export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.when('/', '/itemsList');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.itemsList', {
      url: 'itemsList',
      template: '<items-list-component items="$ctrl.items"></items-list-component>'
    })
    .state('app.tabs', {
      url: 'tabs',
      templateUrl: 'app/templates/tabs.html'
    });
}
