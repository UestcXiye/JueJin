//获取无限列表所在的ul
const mainUl = document.querySelector('.main-ul');
//通过数据代理（普通的dom操作获取不到）获取无限列表所有的子元素(注意mainUl的第四个子元素开始才是无限列表的li)
const templateBoxS = mainUl.children;
//设置起始索引值为0
let templateBoxIndex = 0;

//解析数据
const userNameS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const releaseDateS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const labelS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const titleS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const articleS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//先加载4个li
for (let i = 0; i < 4; i++) {
    let data = {
        userName: userNameS[templateBoxIndex],
        releaseDate: releaseDateS[templateBoxIndex],
        label: labelS[templateBoxIndex],
        title: titleS[templateBoxIndex],
        article: articleS[templateBoxIndex],
    }
    let htmlStr = template('tpl-main-li', data);
    //把内容渲染到页面
    mainUl.innerHTML += htmlStr;
    templateBoxIndex++;
}

//绑定鼠标滚动事件
window.addEventListener('scroll', function () {
    //document.documentElement.clientHeight表示屏幕可视区的高度
    //templateBoxS[templateBoxS.length-1].getBoundingClientRect().top表示无限列表最后一个li距离屏幕可视区顶部的距离
    //原理：当最后一个li出现在屏幕中时，就加载下一个li
    if (document.documentElement.clientHeight - templateBoxS[templateBoxS.length - 1].getBoundingClientRect().top > 0) {
        let data = {
            userName: userNameS[templateBoxIndex],
            releaseDate: releaseDateS[templateBoxIndex],
            label: labelS[templateBoxIndex],
            title: titleS[templateBoxIndex],
            article: articleS[templateBoxIndex],
        }
        let htmlStr = template('tpl-main-li', data);
        //把内容渲染到页面
        mainUl.innerHTML += htmlStr;
        templateBoxIndex++;
        //当数据使用完后，继续从0开始循环
        if (templateBoxIndex >= userNameS.length) {
            templateBoxIndex = 0
        }

        //给关闭按钮(每个li右上角的×)绑定事件
        const mainUlClose = document.querySelectorAll('.main-ul-li-footer-close');
        for (let i = 0; i < mainUlClose.length; i++) {
            mainUlClose[i].addEventListener('click', function () {
                templateBoxS[i + 3].style.display = 'none';
            })
        }
    }
})