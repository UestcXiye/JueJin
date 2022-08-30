//创作者中心下拉列表
//获取下拉按钮
const rightBtn = document.querySelector('#header-creation-rightBtn');
//获取下拉列表
const creationList = document.querySelector('.header-creation-list');
//给下拉按钮绑定点击事件处理函数 点击实现list的出现和消失
rightBtn.addEventListener('click', function (e) {
    //切换list出现和消失
    creationList.style.display = creationList.style.display === 'none' ? 'block' : 'none';
    //切换字体图标
    rightBtn.className = rightBtn.className === 'iconfont icon-down_s' ? 'iconfont icon-up_s' : 'iconfont icon-down_s'
    //阻止事件冒泡
    e.stopPropagation();
})


//首页下拉列表
const headerListLisArrow = document.querySelector('.header-list-lis-arrow');
const headerListLis = document.querySelector('.header-list-lis')
//给下拉按钮绑定点击事件处理函数 点击实现list的出现和消失
headerListLisArrow.addEventListener('click', function (e) {
    //切换list出现和消失
    headerListLis.style.display = headerListLis.style.display === 'none' ? 'block' : 'none';
    //切换字体图标
    headerListLisArrow.className = headerListLisArrow.className === 'iconfont icon-down_s header-list-lis-arrow' ? 'iconfont icon-up_s header-list-lis-arrow' : 'iconfont icon-down_s header-list-lis-arrow';
    //切换字体图标颜色
    headerListLisArrow.style.color = headerListLisArrow.style.color === 'rgb(30, 143, 255)' ? '#71777c' : 'rgb(30, 143, 255)';
    //阻止事件冒泡
    e.stopPropagation();
})

//list出现后 点击body任意一处list消失
const body = document.body;
body.addEventListener('click', function () {
    //隐藏list
    creationList.style.display = 'none';
    headerListLis.style.display = 'none';
    //改变字体图标
    rightBtn.className = 'iconfont icon-down_s';
    headerListLisArrow.className = 'iconfont icon-down_s header-list-lis-arrow';
    //改变字体图标颜色
    headerListLisArrow.style.color = '#71777c';
})


//给搜索框绑定焦点事件
//获取搜索框整体
const headerSearch = document.querySelector('.header-search');
//获取input框
const headerSearchInput = headerSearch.querySelector('.header-search input');
//获取搜索按钮
const headerSearchBtn = headerSearch.querySelector('#header-search-btn');
//绑定input框获取焦点时的处理函数
headerSearchInput.addEventListener('focus', function () {
    this.style.width = '450px';
    this.placeholder = '搜索文章/小册/标签/用户';
    headerSearchBtn.style.color = '#1E80FF';
    headerSearchBtn.style.backgroundColor = 'rgb(234,242,255)';
    headerSearch.style.border = '1px solid #1E80FF';
})
//绑定input框失去焦点时的处理函数
headerSearchInput.addEventListener('blur', function () {
    this.style.width = '300px';
    this.placeholder = '探索稀土掘金';
    headerSearchBtn.style.color = '#696d70';
    headerSearchBtn.style.backgroundColor = 'rgb(242,243,245)';
    headerSearch.style.border = '1px solid #c2c8d1';
})

//给搜索框绑定鼠标移入和移出事件
headerSearch.addEventListener('mouseenter', function () {
    this.style.border = '1px solid #87888a'
})
headerSearch.addEventListener('mouseleave', function () {
    this.style.border = '1px solid #c2c8d1'
})

//header区域响应式(当页面滚动到一定的距离，header区域隐藏）
//拿到header外面的大盒子
const headerAndNav = document.querySelector('.header-and-nav');
//页面滚动时，通过window.scrollY拿到滚动条到body顶部的距离
window.addEventListener('scroll', function () {
    if (this.scrollY >= 500) {
        headerAndNav.style.transition = 'top 0.3s ease';
        headerAndNav.style.top = '-69px';
        //隐藏 创作者中心 和 首页旁边 的两个 下拉列表
        creationList.style.display = 'none';
        headerListLis.style.display = 'none';
        //改变字体图标
        rightBtn.className = 'iconfont icon-down_s';
        headerListLisArrow.className = 'iconfont icon-down_s header-list-lis-arrow';
        //改变字体图标颜色
        headerListLisArrow.style.color = '#71777c';
    } else {
        headerAndNav.style.top = '0px';
    }
})