'use strict';

describe('myApp.inventory module', function() {

  beforeEach(module('myApp.inventory'));

  describe('inventory controller', function(){

    it('exists', inject(function($controller) {
      //load the inventory if there is one
      let inventory = $controller('inventoryCtrl');
      expect(inventory).toBeDefined();
      expect(inventory.inventory).toBeDefined();
    }));
  });
});