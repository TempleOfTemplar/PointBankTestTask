export class ItemsService {
  /** @ngInject */
  constructor($http) {
    this.$http = $http;
    this.path = 'app/items.json';
  }
  get() {
    return this.$http.get(this.path);
  }
}

