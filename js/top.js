var topmore = document.querySelector('.topmore');

var topTop = top.offsetTop;
var tmallshop = document.querySelector('.make');
var tmallshopTop = tmallshop.offsetTop;
console.log(tmallshopTop);

document.addEventListener('scroll', function () {

  if (window.pageYOffset >= tmallshopTop) {
    topmore.style.display = 'block';
    topmore.style.width = 0;
    topmore.style.height= 0;

  }
  else {
    topmore.style.display = 'none';
  }

  // if (window.pageYOffset >= main.offsetTop) {
  //   goback.style.display = 'block';
  // } else {
  //   goback.style.display = 'none';
  // }
})