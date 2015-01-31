(function() {

  Ember.Handlebars.helper('money', function(value, options) {
    if (value == null) {
      return new Ember.Handlebars.SafeString('$0');
    }
    formatted = parseFloat(value, 10).toFixed(2);
    return new Ember.Handlebars.SafeString('$'+formatted);
  });

})();
