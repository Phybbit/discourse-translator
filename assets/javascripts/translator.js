Discourse.PostView.reopen({
  translated: false,
  translation: null,

  actions: {
    translate: function(post) {
      Discourse.Translator.translate(post.cooked).then(function(translation) {
        this.set('translation', translation);
        this.set('translated', true);
      }.bind(this));
    }
  }
});
