(function() {

  App.Receipt = DS.Model.extend({
    cost: DS.attr('number'),
    description: DS.attr('string'),
    user: DS.attr('string')
  });

})();
