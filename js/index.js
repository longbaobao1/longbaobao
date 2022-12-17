//监听页面尺寸变化，动态设置html下font-size的大小
const doc = document;

window.onresize = () => {
    setHtmlFontSize();
}

function setHtmlFontSize(){
    const clientwidth = doc.body.clientwidth; //获取网页body的宽度
    doc.querySelector('html').style.fontSize = 
    clientwidth / 100 + 'px'
}

// 页面初始化执行一次
setHtmlFontSize();


//const 获取元素 = 定义   id
const bread = doc.querySelector('#bread');//定义面包按钮
const drop = doc.querySelector('#drop');//定义下拉菜单

//监听事件
doc.addEventListener('click', e =>{
    drop.classList.remove('drop-show');
});
//点击事件，显示/隐藏下拉菜单
bread.addEventListener('click', e => {
    e.stopPropagation();//阻止冒泡
    drop.classList.toggle('drop-show');
});

const emailicon = doc.querySelector('#emailicon');

emailicon.addEventListener('click',e => {
    alert ("联系我请发送E.mail至845521972@qq.com");
});





function showTime(clock){

    var now = new Date();
    
    var year = now.getFullYear();
    
    var month= now.getMonth();
    
    var day = now.getDate();
    
    var hour = now.getHours();
    
    var minu = now.getMinutes();
    
    var second = now.getSeconds();
    
    month = month+1;
    
    var arr_work = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    
    var week = arr_work[ now.getDay()];
    
    var time = year+"年"+month+"月"+day+"日 "+ week+" "+hour+":"+minu+":"+second;
    
    clock.innerHTML="现在是: " + time;
}
    
    window.onload = function(){
    
    var clock = document.getElementById("clock");
    
    window.setInterval("showTime(clock)",1000);
    }

