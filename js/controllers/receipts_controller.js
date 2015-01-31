(function() {

  App.ReceiptsController = Ember.ArrayController.extend({
    actions: {
      createReceipt: function() {
        console.log("Here I am");
      }
    }
  });

})();
