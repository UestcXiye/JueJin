//实现广告关闭按钮功能 以及鼠标经过广告右下角字样时，内容的变化
//获取广告大盒子
const imgBox = document.querySelectorAll('.imgBox');
//获取按钮
const imgBoxEliminate = document.querySelectorAll('.imgBox-eliminate');
//获取广告右下角字样盒子
const advertisement = document.querySelectorAll('.imgBox-advertisement');

for (let i = 0; i < imgBoxEliminate.length; i++) {
    //鼠标经过广告，关闭按钮出现
    imgBox[i].addEventListener('mouseenter', function () {
        imgBoxEliminate[i].style.display = 'block';
    })
    //鼠标离开广告，关闭按钮消失
    imgBox[i].addEventListener('mouseleave', function () {
        imgBoxEliminate[i].style.display = 'none';
    })
    //点击按钮关闭广告
    imgBoxEliminate[i].addEventListener('click', function () {
        imgBox[i].style.display = 'none';
    })
    //实现鼠标经过广告右下角字样时，内容的变化
    advertisement[i].addEventListener('mouseenter', function () {
        this.innerHTML = '投放广告';
        this.style.backgroundColor = 'rgba(46, 46, 46, 0.5)'
    })
    advertisement[i].addEventListener('mouseleave', function () {
        this.innerHTML = '广告';
        this.style.backgroundColor = 'rgba(161, 163, 165, 0.3)'
    })
}

//实现第一个li中 早中晚随时间的变化而变化
//获取时间盒子
const good = document.querySelector('#good');
//获取当前的小时数
let hour = new Date().getHours();

if (5 <= hour && hour < 8) {
    good.innerHTML = '&nbsp早上好！';
} else if (8 <= hour && hour < 11) {
    good.innerHTML = '&nbsp上午好！';
} else if (11 <= hour && hour < 13) {
    good.innerHTML = '&nbsp中午好！';
} else if (13 <= hour && hour < 19) {
    good.innerHTML = '&nbsp下午好！';
} else if (19 <= hour && hour < 24) {
    good.innerHTML = '&nbsp晚上好！';
} else {
    good.innerHTML = '&nbsp凌晨了！';
}


//侧边栏响应式（当页面滚动到一定的距离，侧边栏固定定位）
//拿到 广告盒子 和 二维码盒子 共同的大盒子
const asideLiFixedChange = document.querySelector('.asideLi-fixed');
//广告盒子已经在第三行拿到  imgBox
window.addEventListener('scroll', function () {
    if (this.scrollY >= 1500) {
        asideLiFixedChange.classList.add('asideLi-fixed-change');
    } else {
        asideLiFixedChange.classList.remove('asideLi-fixed-change');
    }
})