// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.StoriesNewRoute = Ember.Route.extend({
  model: function () {
    this.store.createRecord('story');
  }
});
