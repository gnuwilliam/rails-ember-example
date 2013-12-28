// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.StoryEditRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('story');
  },

  actions: {
    update: function (story) {
      story.save();
    }
  }
});
