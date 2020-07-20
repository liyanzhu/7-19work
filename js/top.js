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

  //改变侧边栏的颜色
  for (let i = 0; i < tops.length; i++) {
    if (tops[i].top < window.pageYOffset && tops[i].top + tops[i].height -100 > window.pageYOffset  ) {
      for (let j = 0; j < tops.length; j++) {
        tops[j].style.backgroundColor = ''
      }
      tops[i].style.backgroundColor = tops[i].getAttribute('color');
    }
  }
})
//对侧边栏处理
var conList = [
    document.querySelector('.main>div:nth-child(3)'),
    document.querySelector('.main>div:nth-child(5)'),
    document.querySelector('.main>div:nth-child(6)'),
    document.querySelector('.main>div:nth-child(8)'),
]
var tops = [
  document.querySelector('.topmore a:nth-child(2)'),
  document.querySelector('.topmore a:nth-child(3)'),
  document.querySelector('.topmore a:nth-child(4)'),
  document.querySelector('.topmore a:nth-child(5)'),
]
var he = document.querySelector('.topmore a:nth-child(6)');


for (let i = 0; i < tops.length; i++) {
  tops[i].top = conList[i].offsetTop;
  tops[i].height = conList[i].offsetHeight;
  // console.log(tops[i].top);
  let that = this
  tops[i].onclick = function () {
    animate2(document.documentElement, {
      scrollTop: this.top + 100
    }, 500);
    for (let j = 0; j < tops.length; j++) {
      tops[j].style.backgroundColor = ''
    }
    tops[i].style.backgroundColor = tops[i].getAttribute('color')
  }

}
//回顶部
he.onclick = function () {
  //窗口document.documentElement
  animate2(document.documentElement, {
    scrollTop: 0
  }, 500)
};


