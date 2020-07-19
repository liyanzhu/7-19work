var searchTop = document.querySelector('.searchTop');
window.onscroll = function () {
  var st = document.documentElement.scrollTop;
  if (st > 800) {
    searchTop.style.top = 0;
  }else {
    searchTop.style.top = -50 + 'px';
  }

}