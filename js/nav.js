//控制下拉列表的消失和出现
//获取nav中的每一个li
const navMainUl = document.querySelectorAll('.nav-mainUl li');
//获取每一个下拉列表
const navChildUl = document.querySelectorAll('.nav-ChildUl');
let timer1 = null;
let timer2 = null;
//循环绑定事件处理函数
//此处i从1开始，因为第一个 navMainUl 没有下拉列表
for (let i = 1; i < navMainUl.length; i++) {
    //绑定鼠标移入事件
    navMainUl[i].addEventListener('mouseenter', function (e) {
        //根据鼠标相对body的位置 动态确定下拉列表的位置
        navChildUl[i - 1].style.left = e.clientX - 20 + 'px';
        //设置一个定时器，0.3秒后才会弹出下拉列表
        timer1 = setTimeout(() => {
            //下拉列表出现
            navChildUl[i - 1].style.display = 'block';
        }, 300)
    })
    //绑定鼠标移出事件
    navMainUl[i].addEventListener('mouseleave', function () {
        //鼠标移除的同时清除定时器，如果鼠标停留时间没到0.3秒，则不会弹出下拉列表
        clearTimeout(timer1);
        //设置一个定时器，鼠标移出之后0.3s 下拉菜单才会消失
        timer2 = setTimeout(() => {
            //隐藏下拉列表
            navChildUl[i - 1].style.display = 'none';
        }, 300)
    })
}

//给每个下拉列表添加鼠标移入移出事件，如果鼠标移入，则不消失，移出，则消失
//通过循环给每一个ul都绑定事件处理函数
for (let i = 0; i < navChildUl.length; i++) {
    navChildUl[i].addEventListener('mouseenter', function () {
        //鼠标移入之后清除定时器 下拉菜单不会消失
        clearTimeout(timer2);
        this.style.display = 'block';
    })
    navChildUl[i].addEventListener('mouseleave', function () {
        this.style.display = 'none';
    })
}


//给每个下拉列表添加元素
const childUlObj = {
    backend: ['后端', 'Java', 'Go', '算法', 'Python', 'Spring Boot', '数据库', '面试', 'MySQL', 'Spring', '架构', 'Leetcode', 'Redis', '前端', '大数据'],
    frontend: ['前端', 'JavaScript', 'Vue.js', 'React.js', 'CSS', '面试', 'TypeScript', '后端', '架构', '前端框架', 'Webpack', '微信小程序', 'Android'],
    Android: ['Android', 'Flutter', '前端', 'Kotlin', 'Android Jetpack', 'Java', 'APP', '架构', '游戏', '性能优化', '面试', '源码', 'iOS', 'Android Studio', '开源'],
    iOS: ['iOS', 'Swift', 'SwiftUI', 'Flutter', '前端', 'Objective-C', 'LeetCode', 'WWDC', 'Xcode', '算法', '设计模式', '面试', 'Mac', '计算机视觉', 'Apple'],
    ai: ['人工智能', '深度学习', '算法', '机器学习', 'Python', '计算机视觉', '后端', 'NLP', 'PyTorch', 'TensorFlow', '神经网络', '数据分析', '面试', '强化学习', '数据挖掘'],
    freebie: ['后端', '前端', '开源', 'GitHub', 'Git', '大数据', 'Unity3D', 'Linux', '网络协议', '设计', 'Python', '程序员', 'JavaScript', '数据库', 'Rust'],
    career: ['程序员', '前端', '后端', '算法', 'Python', '年终总结', 'JavaScript', 'Java', '开源', '面试', '架构', '大数据', '数据结构', '数据库', 'Linux'],
    article: ['云原生', '程序员', '笔记', '前端', '后端', '容器', 'Serverless', 'Java', '开源', '微服务', '测试', '产品', 'Kubernetes', '深度学习', '架构'],
}
//遍历对象
for (key in childUlObj) {
    //通过模板字符串拼接出需要拿到的 ul 的类名
    let childUl = document.querySelector(`.ChildUl-${key}`);
    //通过 for of 遍历数组
    for (data of childUlObj[key]) {
        //每遍历一次都会向 ul 中添加一个 li
        childUl.innerHTML += `<li><a ref="">${data}</a></li>`;
    }
}