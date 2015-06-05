function removeBody() {
  $('body').remove();
}

function index() {
  $('body').remove();
  $('html').append(indexBody);
}

$(document).ready(function() {
  var indexBody = $('body');
});
