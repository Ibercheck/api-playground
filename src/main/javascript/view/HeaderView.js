'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'click #explore'                : 'showCustom',
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup',
    'change #input_apiKey'          : 'showCustom'
  },

  initialize: function(){},

  showCustomOnKeyup: function(e){
    if (e.keyCode === 13) {
      this.showCustom();
    }
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }

    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val()
    });
    addApiKeyAuthorization();
  },

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    $('#input_baseUrl').val(url);

    //$('#input_apiKey').val(apiKey);
    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});
