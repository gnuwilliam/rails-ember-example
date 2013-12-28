# Rails + Ember - App Example

This is a simple application to show how Rails and Ember works well together.

If you're creating an app from scratch, using Rails 4+, here's the guide to integrate with Ember.js:

Create your app using Ember.js template
```
rails new your_app -m http://emberjs.com/edge_tempplate.rb
```

Then bootstrap your Ember.js app
```
rails g ember:bootstrap
```

Aaaand
```
rails g ember:install
```

There you go! Now you run the Rails server, and you should see a beautiful Ember.js screen.
```
rails s
```