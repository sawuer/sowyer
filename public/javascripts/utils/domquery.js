(context => context.$_ = el => {
  var all = document.querySelectorAll(el);
  return all.length > 1 ? all : document.querySelector(el);
})(this);