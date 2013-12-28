// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.Router.map(function() {
  this.resource('stories', function () {
    this.resource('story', { path: ':story_id' });
  });
});
