// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('story');
  }
});
