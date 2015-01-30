(function (window) {



App = Ember.Application.create({
  ready: function() {
    ['component'].forEach(function(type) {
      this.inject(type,'store','store:main');
    },this);
  }
});

App.Router.map(function() { } );

var dbRoot = "https://receipt.firebaseio.com"
var receiptPath = dbRoot + "/receipts"
var usersPath = dbRoot + "/users"

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase(dbRoot)
});

App.Receipt = DS.Model.extend({
  cost: DS.attr('number'),
  description: DS.attr('string'),
  user: DS.attr('string')
});

App.User = DS.Model.extend({
  name: DS.attr('string')
});

App.Router.map(function() {
  this.resource('receipts');
  this.resource('users', { path: '/users' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('receipts');
  }
});

App.ReceiptsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('receipt');
  }
})

App.ReceiptsIndexController = Ember.ArrayController.extend({
  sortProperties: ['user'],
  sortAscending: false
});

App.ReceiptController = Ember.ObjectController.extend({
  actions: {
  }
});

App.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});

App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});


})(window);