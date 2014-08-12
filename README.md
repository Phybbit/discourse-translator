discourse-translator
====================

Provides translations of post content from Bing

Setup
=====

- Subscribe to (Microsoft Translator Service)[https://datamarket.azure.com/dataset/bing/microsofttranslator], free for 2 million characters per month
- In https://datamarket.azure.com/account go to `Developers` and register an application.
- In `Admin -> Settings -> Translator Pluing` add your `client ID` and `client secret` and enable the plugin

TODO
====

In order of priorities

For 1.0:

- ~~Add client_id and client_secret to settings~~
- Detect user locale and use that for the translation
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
