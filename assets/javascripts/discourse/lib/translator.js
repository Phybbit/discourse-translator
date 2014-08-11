Discourse.Translator = {
  token: null,

  getToken: function() {
    var translator = this;
    return Discourse.ajax('/translator/token', { type: 'POST' }).then(function(res){
      translator.token = res.access_token;
    });
  },

  translate: function(content) {
    var translator = this;
    return this.getToken().then(function() {
      return Discourse.ajax('http://api.microsofttranslator.com/V2/Ajax.svc/Translate', { 
        type: 'POST',
        dataType: 'jsonp',
        data: {
          appid: "Bearer " + translator.token,
          to: "fr",
          text: content,
          contentType: 'text/html'
        }
      }).then(function(res) {
        return res;
      });
    });
  }
};
