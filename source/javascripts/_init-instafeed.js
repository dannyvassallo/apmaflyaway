function fixMasonryLayout(){
  $container.masonry('reloadItems');
  $container.masonry('layout');
}

// grab out load more button
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  get: 'tagged',
  tagName: 'fearlessrecords',
  clientId: ' ad5b8cadaf80454698639bb22f59a0f9',
  resolution: 'standard_resolution',
  orientation: 'square',
  template: '<div class="col s12 m4"><div class="card"><div class="card-image"><img src="{{image}}"><span class="card-title">Card Title</span></div><div class="card-content"><p>{{caption}}</p><p><i class="fa fa-heart"></i> {{likes}}</p></div><div class="card-action"><a href="{{link}}">Open Post</a></div></div></div>',
  // every time we load more, run this function
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }

    $("img").one("load", function() {
      fixMasonryLayout();
    }).each(function() {
    if(this.complete) $(this).load();
    });

  },
});

// bind the load more button
loadButton.addEventListener('click', function() {
  feed.next();
});

feed.run();
