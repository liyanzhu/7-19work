var as = document.querySelectorAll('.content-box a');
var imgs = document.querySelectorAll('.content-box img')
var num = 0;
for (let i = 0; i < as.length; i++) {
  as[i].onclick = function () {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      as[i].className = 'content-title';
    }
    imgs[i].style.opacity = 1;
    as[i].className = 'content-title today'
  }
}

setInterval(() => {
  num++;
  if (num > as.length -1) {
    num = 0;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    as[i].className = 'content-title';
  }
  imgs[num].style.opacity = 1;
  as[num].className = 'content-title today';

}, 2000);