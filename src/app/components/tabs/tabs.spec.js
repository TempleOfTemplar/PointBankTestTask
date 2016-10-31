import angular from 'angular';
import 'angular-mocks';
import {tabs} from './tabs';

describe('tabs component', () => {
  beforeEach(() => {
    angular
      .module('tabs', ['app/components/tabs/tabs.html'])
      .component('tabs', tabs);
    angular.mock.module('tabs');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tabs></tabs>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
