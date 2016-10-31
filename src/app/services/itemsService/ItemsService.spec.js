import angular from 'angular';
import 'angular-mocks';
import ItemsService from './ItemsService';

describe('ItemsService service', () => {
  beforeEach(() => {
    angular
      .module('ItemsService', [])
      .service('ItemsService', ItemsService);
    angular.mock.module('ItemsService');
  });

  it('should', angular.mock.inject(ItemsService => {
    expect(ItemsService.getData()).toEqual(3);
  }));
});
