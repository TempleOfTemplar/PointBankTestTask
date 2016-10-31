class ItemsListController {
  $onInit() {
    this.items = this.items.map(function (item) {
      item.checked = item.hasOwnProperty('checked') ? item.checked : false;
      return item;
    });
  }
}

export const itemsList = {
  templateUrl: 'app/components/items-list/items-list.html',
  controller: ItemsListController,
  bindings: {
    items: '='
  }
};

