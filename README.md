discourse-translator
====================

Provides translations of post content from Bing

Screenshot:

![translated](http://i.imgur.com/HxMjRI4.png)

Setup
=====

- Subscribe to [Microsoft Translator Service](https://datamarket.azure.com/dataset/bing/microsofttranslator), free for 2 million characters per month
- In [Your account](https://datamarket.azure.com/account) go to `Developers` and register an application.
- In `Admin -> Settings -> Translator Plugin` add your `client ID` and `client secret` and enable the plugin
- `Allow user locale` in `Admin -> Settings -> Basic Setup`

The plugin will show translations in the current interface language, if the user selects to see the Discourse forum in Japanese then the translations will be done to Japanese.

TODO
====

In order of priorities

For 1.0:

- ~~Add client_id and client_secret to settings~~
- ~~Detect user locale and use that for the translation~~ (uses `I18n.locale`)
- Handle error conditions gracefully
- Show a loading message when getting the translation
- Add specs
- Cache and expire token server side
- Cache and expire token client side

Future:
- Allow to translate the topic list titles
- Add setting to enable translation of a topic list
- Translate the topic title if requested translation of the first post
- Keep translation state on the client side
- Support Google translate
- Disable `Quote Reply` when selecting text from the translation
- Improve UI


License
=======
MIT
