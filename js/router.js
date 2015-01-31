(function () {

  App.Router.map(function() {
    this.resource('receipts');
    this.resource('users', { path: '/users' });
  });

  App.IndexRoute = Ember.Route.extend({
    templateName: 'receipts',
    controllerName: 'receipts',
    model: function() {
      return this.store.find('receipt');
    }
  });

  App.UsersRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('user');
    }
  });

  App.ApplicationRoute = Ember.Route.extend({
    actions: {
      openModal: function(modalName, model) {
        this.controllerFor(modalName).set('model', model);
        return this.render(modalName, {
          into: 'application',
          outlet: 'modal'
        });
      },
      closeModal: function() {
        addReceipt(this);
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });

})();
