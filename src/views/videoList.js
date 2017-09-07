var VideoListView = Backbone.View.extend({

  initialize: function() {
    //this.render();
    this.collection.on('sync', function() {
      this.render();
    }, this);
    // this.listenTo(this.collection, 'add', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderList, this);
    return this;

  },

  renderList: function(video) {
    var videoList = new VideoListEntryView({model: video});
    this.$el.append(videoList.render());
  
  },

  template: templateURL('src/templates/videoList.html')

});
