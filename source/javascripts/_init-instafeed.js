function fixMasonryLayout(){
  $container.masonry('reloadItems');
  $container.masonry('layout');
}

// grab out load more button
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  get: 'tagged',
  tagName: 'fearlessrecords',
  sortBy: 'most-liked',
  clientId: 'e614fac9466647bebb6a625d1d9c26e9',
  resolution: 'standard_resolution',
  template: '<div class="col s12 m4"><div class="card"><div class="card-image"><a href="{{link}}"><img src="{{image}}"><span class="card-title">Card Title</span></a></div><div class="card-content"><p>{{caption}}</p></div><div class="card-action"><a href="{{link}}">Open Post</a><p class="likes"><i class="fa fa-heart"></i> {{likes}}</p></div></div></div>',
  filter: function(image) {
    return image.type === 'video';
  },
  // every time we load more, run this function
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }

    //Fix masonry layout on row load
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
