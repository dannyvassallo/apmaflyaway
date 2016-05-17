// ADD YOUR JS HERE
// console.log('loaded');

$(document).on('click', '.card-image a, .card-action a', function(e){
  e.preventDefault();
  var link = $(this).attr('href');
  window.open(link, "Instagram", "width=500,height=800");
});
