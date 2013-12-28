// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.StoriesNewRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('story');
  },

  actions: {
    create: function (story) {
      console.log(story);
      var route = this;

      story.save().then(function () {
        route.transitionTo('stories');
      });
    }
  }
});
