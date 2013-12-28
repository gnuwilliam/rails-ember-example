// For more information see: http://emberjs.com/guides/routing/

RailsEmberExample.Router.map(function() {
  this.resource('stories');
  this.resource('story', { path: '/stories/:story_id' });
});
