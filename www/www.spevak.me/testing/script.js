var indexBody = {};

function removeBody() {
  $('body').remove();
}

function index() {
  $('body').remove();
  $('html').append(indexBody);
}

$(document).ready(function() {
  indexBody = $('body');
});
