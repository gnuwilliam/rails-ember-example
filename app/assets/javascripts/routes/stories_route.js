// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.StoriesRoute = Ember.Route.extend({
  model: function() {
    this.store.find('story');

    return this.store.filter('story', function (story) {
      return !story.get('isNew');
    });
  }
});
