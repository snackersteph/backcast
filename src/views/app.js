var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.videoPlayer = new VideoPlayerView({
      model: this.videos.at(0)
    }).render();
    this.searchBar = new SearchView();
    this.list = new VideoListView({collection: this.videos});
    this.videos.on('select', function(video) {
      //alert("hello");
      new VideoPlayerView({el: '.player', model: video});
    });
    this.render();
    console.log(this.videos);
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.list').append(this.list.render().el);
    this.$el.find('.player').append(this.videoPlayer.render().el);
    this.$el.find('.search').append(this.searchBar.render().el);

    return this;
  },

  template: templateURL('src/templates/app.html')
  
  
});


