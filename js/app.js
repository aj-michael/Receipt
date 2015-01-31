App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://receipt.firebaseio.com")
});

function addReceipt(context) {
  args = $('.modal').find('input').map(function(index) {
    return $(this).val();
  });
  if (args[0] == "" || args[1] == "" || args[2] == "") return;
  var newReceipt = context.store.createRecord('receipt', {
    user: args[0],
    cost: args[1],
    description: args[2]
  });
  newReceipt.save();
}
