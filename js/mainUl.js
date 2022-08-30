// 回到顶部按钮
//获取回到顶部盒子
const toTop = document.querySelector('.toTop');
// 控制出现和消失
window.addEventListener('scroll', function () {
    if (this.scrollY >= 1800) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
})
//点击回到顶部
toTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})
//绑定鼠标移入移出事件控制提示盒子的出现和消失
//获取提示盒子
const toTopTips = document.querySelector('.toTopTips');
let timer3 = null;
//绑定鼠标移入移出事件
toTop.addEventListener('mouseenter', function () {
    timer3 = setTimeout(() => {
        toTopTips.style.display = 'block';
    }, 300)
})
toTop.addEventListener('mouseleave', function () {
    clearTimeout(timer3);
    toTopTips.style.display = 'none';
})