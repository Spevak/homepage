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

//Create an elmement
function el(type, id, classes, children) {
  var element = $('<' + type + '>' + '</' + type + '>')
  if (id) {
    element.attr('id', id);
  }
  if (classes) {
    element.attr('class', classes);
  }
  for (var i = 0; i < children.length; i++) {
    element.append(children[i]);
  }
  return element;
}
