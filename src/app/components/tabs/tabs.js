class TabsController {
  /** @ngInject */
  constructor() {
    this.tabs = [];
  }

  select(tab) {
    angular.forEach(this.tabs, function (tab) {
      tab.selected = false;
    });
    tab.selected = true;
  }

  addTab(tab) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }
}

export const tabs = {
  templateUrl: 'app/components/tabs/tabs.html',
  controller: TabsController,
  transclude: true
};

