import angular from 'angular';
import 'angular-mocks';
import {itemsList} from './items-list';

describe('itemsList component', () => {
  beforeEach(() => {
    angular
      .module('itemsList', ['app/components/items-list/items-list.html'])
      .component('itemsList', itemsList);
    angular.mock.module('itemsList');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<items-list></items-list>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
