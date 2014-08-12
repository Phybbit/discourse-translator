# name: translator
# about: adds automatic post content translation to Discourse
# version: 0.1
# authors: Hugo Almeida, Phybbit

load File.expand_path('../translator.rb', __FILE__)

TranslatorPlugin = TranslatorPlugin

after_initialize do
  module TranslatorPlugin
    class Engine < ::Rails::Engine
      engine_name "translator_plugin"
      isolate_namespace TranslatorPlugin
    end

    class TranslatorController < ActionController::Base
      def token
        return render status: 403, json: {} unless SiteSetting.translator_enabled?

        client_id = SiteSetting.translator_app_client_id
        client_secret = SiteSetting.translator_app_client_secret

        post_body = "grant_type=client_credentials&client_id=#{URI.encode client_id}&client_secret=#{URI.encode client_secret}&scope=http://api.microsofttranslator.com"

        json = Excon.post('https://datamarket.accesscontrol.windows.net/v2/OAuth2-13',
                           body: post_body,
                           headers: { 'Content-Type' => 'application/x-www-form-urlencoded' }
                          ).body rescue nil
        render json: json
      end
    end
  end

  TranslatorPlugin::Engine.routes.draw do
    post '/token', to: 'translator#token'
  end
  
  Discourse::Application.routes.append do
    mount ::TranslatorPlugin::Engine, at: '/translator'
  end
end

register_asset 'javascripts/discourse/templates/post.js.handlebars'
register_asset 'javascripts/discourse/lib/translator.js'
register_asset 'javascripts/translator.js'

register_css <<CSS

.translate {
  float: right;
  font-size: 12px;
}

CSS
