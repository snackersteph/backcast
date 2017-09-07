var VideoListEntryView = Backbone.View.extend({

  // el = '.video-list';
  initialize: function() {
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

    // $('.video-list-entry-title').on('click', function(){
    //     Video.prototype.select();
    // });
  

  template: templateURL('src/templates/videoListEntry.html')

});
