var topmore = document.querySelector('.topmore');

var topTop = top.offsetTop;
var tmallshop = document.querySelector('.make');
var tmallshopTop = tmallshop.offsetTop;
document.addEventListener('scroll', function () {

  if (window.pageYOffset >= tmallshopTop) {
    topmore.style.display = 'block';
    topmore.style.transform = 'scale(1)';
  }
  else {
    topmore.style.transform = 'scale(0)';
  }
  

})
var stop = document.documentElement.scrollTop;
var tops = document.querySelectorAll('.topmore a');
tops[1].onclick = function () {
  for (let i = 0; i < tops.length; i++) {
    tops[i].style.backgroundColor = ''
  }
  window.scrollTo(0,1380);
  this.style.backgroundColor = '#ef7f7c'
}
tops[3].onclick = function () {
  for (let i = 0; i < tops.length; i++) {
    tops[i].style.backgroundColor = ''
  }
  window.scrollTo(0,2050);
  this.style.backgroundColor = '#82ef69'
}
tops[4].onclick = function () {
  for (let i = 0; i < tops.length; i++) {
    tops[i].style.backgroundColor = ''
  }
  window.scrollTo(0,2900);
  this.style.backgroundColor = '#244eeb'
}
tops[8].onclick = function () {
  for (let i = 0; i < tops.length; i++) {
    tops[i].style.backgroundColor = ''
  }
  window.scrollTo(0,3550);
  this.style.backgroundColor = '#244eeb'
}
tops[9].onclick = function () {
  for (let i = 0; i < tops.length; i++) {
    tops[i].style.backgroundColor = ''
  }
  window.scrollTo(0,0);
}


