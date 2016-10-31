class TabController {
  $onInit() {
    this.tabsCtrl.addTab(this);
  }
}

export const tab = {
  template: '<div class="tab-pane" ng-show="$ctrl.selected" ng-transclude></div>',
  controller: TabController,
  transclude: true,
  require: {
    tabsCtrl: '^tabsComponent'
  },
  bindings: {
    title: '@'
  }
};

