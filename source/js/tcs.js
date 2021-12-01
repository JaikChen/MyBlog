let G=document.getElementById('G');
let span=document.getElementById('span');
let sum=0;
// 获取画布对象
let huabu=document.getElementById('huabu');
// 取出绘制工具
let tools=huabu.getContext('2d');
//moveTo（x，y）起始点坐标
//lineTo（x，y）终点坐标


//食物的默认位置：
//取1-19的随机数+向下取整
let x=Math.floor(Math.random()*20);
let y=Math.floor(Math.random()*20);
//没被吃的时候食物不动
let isflag=false;


//蛇的默认位置
let snake=[{x:3,y:0},{x:2,y:0},{x:1,y:0}];


//监听案件
let directionX=1,directionY=0;
document.addEventListener('keydown',function(even){
    if((event.keyCode===38||event.keyCode===87||event.keyCode===104)&&directionY!=1)
    {
        console.log('上');
        directionX=0;
        directionY=-1;
    }
    else if((event.keyCode===40||event.keyCode===83||event.keyCode===98)&&directionY!=-1)
    {
        console.log('下');
        directionX=0;
        directionY=1;
    }
    else if((event.keyCode===37||event.keyCode===65||event.keyCode===100)&&directionX!=1)
    {
        console.log('左');
        directionX=-1;
        directionY=0;
    }
    else if((event.keyCode===39||event.keyCode===68||event.keyCode===102)&&directionX!=-1)
    {
        console.log('右');
        directionX=1;
        directionY=0;
    }
})

let game=false;
for(let i=1;i<snake.length;i++)
{
    if(snake[0].x===snake[i].x&&snake[0].y===snake[i].y)
        game=true;
}


//定时器->擦除+重绘------------------------------------------
setInterval(function(){
    for(let i=1;i<snake.length;i++)
{
    if(snake[0].x===snake[i].x&&snake[0].y===snake[i].y)
        game=true;
}
    if(game===true)
    {
        G.textContent="Game Over";
        return;
    }
//---------------------*擦除*----------------------
tools.clearRect(0,0,600,600);

//---------------------*绘制*----------------------

//判断蛇头是否吃到了食物：
if(snake[0].x===x&&snake[0].y===y)
{
    isflag=true;
}else{
    snake.pop();
}


//随机出现的食物：
if(isflag)
{
    x=Math.floor(Math.random()*20);
    y=Math.floor(Math.random()*20);
    isflag=false;
    sum++;
}
/*绘制矩形
设置填充的颜色值*/
tools.fillStyle='red';
tools.fillRect(x*30,y*30,30,30);


//画出蛇
//1.随着重绘让蛇动起来
//2.初始方向为水平向右
//3.默认每次移动距离为一格

//只需要每次重绘的时候改变坐标即可使贪吃蛇动起来
//只需要删除最后一节，然后新建一节添加到数组中即可
//z[].pop()：删除最后一个元素  unshift()：在数组第一个元素前添加新的元素

let oldhead=snake[0];
let newhead={x:oldhead.x+directionX,y:oldhead.y+directionY}
snake.unshift(newhead);


for(let i=0;i<snake.length;i++)
{
    if(i==0)
        tools.fillStyle='pink';
    else
        tools.fillStyle='yellow';
    if(snake[i].x>19)
        snake[i].x=0;
    else if(snake[i].x<0)
        snake[i].x=19;
    else if(snake[i].y>19)
        snake[i].y=0;
    else if(snake[i].y<0)
        snake[i].y=19;
    tools.fillRect(snake[i].x*30,snake[i].y*30,30,30);
};



//画出网格线
//横线
for(var i=1;i<=19;i++)
{
    tools.moveTo(0,30*i+0.5);
    tools.lineTo(600,30*i+0.5);
}
//竖线
for(var i=1;i<=19;i++)
{
    tools.moveTo(30*i+0.5,0);
    tools.lineTo(30*i+0.5,600);
}
tools.strokeStyle='white';
tools.stroke();

span.textContent=sum;
},1000/8);//一秒重绘三次
