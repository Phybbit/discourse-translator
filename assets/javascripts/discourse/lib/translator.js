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
    return translator.getToken()
    .then(function() {
      return translator.requestTranslation(content);
    }).then(function(translated) {
      return translated;
    }, function(err) {
      console.log('failed', err);
    });
  },

  requestTranslation: function(content) {
    var translator = this;
    return Discourse.ajax('//api.microsofttranslator.com/V2/Ajax.svc/Translate', { 
      type: 'POST',
      dataType: 'jsonp',
      jsonp: 'oncomplete',
      data: {
        appid: "Bearer " + translator.token,
        to: I18n.locale,
        text: content,
        contentType: 'text/html'
      }
    }).then(function(res) {
      return res;
    }, function(err) {
      console.error('failed', err);
      return err;
    });
  }
};
