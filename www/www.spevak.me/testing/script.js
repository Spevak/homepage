//Main page (update when page loads)
var indexBody = {};

//Layouts
layoutA = el('div', 'outer', '', [
  el('div', '', 'inner', ['inner'])]);

layoutB = el('div', 'outer', '', [
  el('div', '', 'L2', [
    el('div', '', 'inner', ['1']),
    el('div', '', 'inner', ['2'])
  ]),
  el('div', '', 'L2', [
    el('div', '', 'inner', ['3']),
    el('div', '', 'inner', ['4'])
  ])
]);

IndexBtn = el('button', 'indexBtn', '', ['Back to layouts'])

//Load layout
function layout(layoutObj) {
  $('body').remove();
  $('html').append($('<body></body'));
  $('body').append(layoutObj);
  IndexBtn.click(index);
  $('body').append(IndexBtn);
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
  if (children) {
    for (var i = 0; i < children.length; i++) {
      element.append(children[i]);
    }
  }
  return element;
}
