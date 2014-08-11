Discourse.PostView.reopen({
  actions: {
    translate: function(post) {
      Discourse.Translator.translate(post.cooked).then(function(translation) {
        alert(translation);
      });
    }
  }
});
