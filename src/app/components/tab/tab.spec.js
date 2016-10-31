import angular from 'angular';
import 'angular-mocks';
import {tab} from './tab';

describe('tab component', () => {
  beforeEach(() => {
    angular
      .module('tab', ['app/components/tab/tab.html'])
      .component('tab', tab);
    angular.mock.module('tab');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tab></tab>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
