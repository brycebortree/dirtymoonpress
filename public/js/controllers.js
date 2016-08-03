var app = angular.module('dirtyctrls', ['dirtyservices'])

app.controller('HomeCtrl', function($scope){
})

app.controller('storeCtrl', function($scope){
  var myStore = new store();
  var myCart = new shoppingCart();
  myCart.addCheckoutParameters("Paypal", "your Paypal merchant id")
})