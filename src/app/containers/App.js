class AppController {
  /** @ngInject */
  constructor(itemsService, $state) {
    const $ctrl = this;
    this.$state = $state;
    this.menuItems = [
      {
        title: 'Список',
        route: 'app.itemsList'
      },
      {
        title: 'Табы',
        route: 'app.tabs'
      }];
    itemsService.get().then(function (items) {
      $ctrl.items = items.data;
    });
  }

  getCurrentStateTitle() {
    return this.menuItems.find(element => element.route === this.$state.current.name).title;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
