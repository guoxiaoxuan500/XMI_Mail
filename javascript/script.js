



// 明星单品
var prev_mx = document.getElementById('xm_control_prev');
var next_mx = document.getElementById('xm_control_next');
var mx_sheet = document.getElementById('xm_mx_sheet');
var show_mx = 1;


function animate_mx(offset)
{
	var newleft_mx = parseInt(mx_sheet.style.left) + offset;
	var time = 300;
	var interval = 10;
	var speed = offset/(time/interval);
	function go_mx()
	{
		if( (speed>0 && parseInt(mx_sheet.style.left)< newleft_mx) || (speed <0 && parseInt(mx_sheet.style.left) > newleft_mx) )
		{
			mx_sheet.style.left = parseInt(mx_sheet.style.left) + speed +'px';
			setTimeout(go_mx,interval);
		}
		else
		{
			mx_sheet.style.left = newleft_mx +'px';
		}
	}
	go_mx();
}


prev_mx.onclick = function()
{
	if(show_mx>1)
	{
		animate_mx(+1226);
		show_mx -=1;
		next_mx.className = 'xm_control_on';
	}
}

next_mx.onclick = function()
{
	if(show_mx<2)
	{
		animate_mx(-1226);
		show_mx +=1;
		prev_mx.className = 'xm_control_on';
	}
}

// 为你推荐

var prev_foryou = document.getElementById('xm_foryou_prev');
var next_foryou = document.getElementById('xm_foryou_next');
var foryou_sheet = document.getElementById('xm_foryou_sheet');
var show_foryou = 1;

function animate_foryou(offset)
{
	var newleft_foryou = parseInt(foryou_sheet.style.left) + offset;
	var time = 300;
	var interval = 10;
	var speed = offset/(time/interval);
	function go_foryou()
	{
		if( (speed >0 && parseInt(foryou_sheet.style.left) < newleft_foryou) || (speed <0 && parseInt(foryou_sheet.style.left)> newleft_foryou) )
		{
			foryou_sheet.style.left = parseInt(foryou_sheet.style.left) + speed + 'px';
			setTimeout(go_foryou, interval);
		}
		else
		{
			foryou_sheet.style.left = newleft_foryou +'px';
		}
	}
	go_foryou();
}


prev_foryou.onclick = function()
{
	if(show_foryou>1 )
	{
		animate_foryou(+1226);
		show_foryou-=1;

	}
}

next_foryou.onclick = function()
{
	if(show_foryou<2)
	{
		animate_foryou(-1226);
		show_foryou+=1;
	}
}


// 内容
var container_1 = document.getElementById('container_1');
var list_1 = document.getElementById('list_1');
var buttons_1 = document.getElementById('buttons_1').getElementsByTagName('span');
var buttons_2 = document.getElementById('buttons_2').getElementsByTagName('span');
var buttons_3 = document.getElementById('buttons_3').getElementsByTagName('span');
var buttons_4 = document.getElementById('buttons_4').getElementsByTagName('span');
var prev_1 = document.getElementById('prev_1');
var next_1 = document.getElementById('next_1');
var prev_2 = document.getElementById('prev_2');
var next_2 = document.getElementById('next_2');
var prev_3 = document.getElementById('prev_3');
var next_3 = document.getElementById('next_3');
var prev_4 = document.getElementById('prev_4');
var next_4 = document.getElementById('next_4');
var index_1 = 1;
var index_2 = 1;
var index_3 = 1;
var index_4 = 1;
// var animated = false;
// var timer;

// 选项卡
var dp_1 = document.getElementById('xm_dp_li1');
var dp_2 = document.getElementById('xm_dp_li2');
var dp_3 = document.getElementById('xm_dp_li3');
var dp_4 = document.getElementById('xm_dp_li4');
var dp_1_ul = document.getElementById('xm_dp_secul_1');
var dp_2_ul = document.getElementById('xm_dp_secul_2');
var dp_3_ul = document.getElementById('xm_dp_secul_3');
var dp_4_ul = document.getElementById('xm_dp_secul_4');

var pj_1 = document.getElementById('xm_pj_li1');
var pj_2 = document.getElementById('xm_pj_li2');
var pj_3 = document.getElementById('xm_pj_li3');
var pj_4 = document.getElementById('xm_pj_li4');
var pj_1_ul = document.getElementById('xm_pj_secul_1');
var pj_2_ul = document.getElementById('xm_pj_secul_2');
var pj_3_ul = document.getElementById('xm_pj_secul_3');
var pj_4_ul = document.getElementById('xm_pj_secul_4');

var zb_1 = document.getElementById('xm_zb_li1');
var zb_2 = document.getElementById('xm_zb_li2');
var zb_3 = document.getElementById('xm_zb_li3');
var zb_4 = document.getElementById('xm_zb_li4');
var zb_5 = document.getElementById('xm_zb_li5');
var zb_1_ul = document.getElementById('xm_zb_secul_1');
var zb_2_ul = document.getElementById('xm_zb_secul_2');
var zb_3_ul = document.getElementById('xm_zb_secul_3');
var zb_4_ul = document.getElementById('xm_zb_secul_4');
var zb_5_ul = document.getElementById('xm_zb_secul_5');

 // 轮播图

 // 轮播图
var container = document.getElementById('container');
var list = document.getElementById('list');
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 1;
var animated = false;
var timer;


function showButton()
{
	for(var i = 0;i<buttons.length;i++)
	{
		if(buttons[i].className == 'on')
		{
			buttons[i].className = '';
			break;
		}
	}
	buttons[index -1].className = 'on';
}

function animate(offset)
{

	var newleft = parseInt(list.style.left) + offset;
	var time = 300;
	var interval = 300;
	var speed = offset/(time/interval);
	function go()
	{
		if( (speed <0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) <newleft) )
		{
			list.style.left = parseInt(list.style.left) + speed +'px';
			setTimeout(go, interval);
		}
		else
		{
			list.style.left = newleft +'px';
			if(newleft > -1226)
			{
				list.style.left = -6130 +'px';
			}
			if(newleft < -6130)
			{
				list.style.left = -1226 +'px';
			}
		}
	}
	go();
}

function play()
{
	
	timer = setInterval(function () {
		next.onclick();
	},3000);
}

function stop()
{   
	clearInterval(timer);
	
}

next.onclick = function()
{
	if(index == 5)
	{
		index = 1;
	}
	else{index += 1;}
	showButton();
	animate(-1226);
}
prev.onclick = function()
{
	if(index == 1)
	{
		index =5;
	}
	else{index -= 1;}
	showButton();
	animate(+1226);
}
for(var i=0;i < buttons.length;i++)
{
	buttons[i].onclick = function()
	{
		if(this.className == 'on')
		{ return;}
		var myindex = parseInt(this.getAttribute('index')) ;
		var offset = -1226 * (myindex - index);
		animate(offset);
		index = myindex;
		showButton();
	} 
}

container.onmouseover = stop;
container.onmouseout = play;
play();
 // 内容 
// 1.图书
 function showButton_nr1()
{
	for(var i = 0;i<buttons_1.length;i++)
	{
		if(buttons_1[i].className == 'on_nr')
		{
			buttons_1[i].className = '';
			break;
		}
	}
	buttons_1[index_1 -1].className = 'on_nr';
}

 function animate_nr1(offset)
 {
 		var newleft_nr = parseInt(list_1.style.left) + offset;
 		var time = 300;
 		var interval = 10;
 		var speed = offset/(time/interval);
 		function go_nr1()
 		{
 			if( (speed < 0 && parseInt(list_1.style.left) >newleft_nr) || (speed >0&& parseInt(list_1.style.left) <newleft_nr) )
 			{
 				list_1.style.left = parseInt(list_1.style.left) + speed +'px';
 				setTimeout(go_nr1, interval);
 			}
 			else
 			{
 				 list_1.style.left = newleft_nr +'px';
 			}
 		}
 		go_nr1();

 }


next_1.onclick = function()
{
	if(index_1 < 3)
	{
		index_1 += 1;
		animate_nr1(-296);
		showButton_nr1();
	}
}
prev_1.onclick = function()
{
	if (index_1 > 1) 
	{
		index_1 -= 1;
		animate_nr1(+296);
		showButton_nr1();
	}
}

for(var i=0;i < buttons_1.length;i++)
{
	buttons_1[i].onclick = function()
	{
		if(this.className == 'on_nr')
			{ return;}

		var myindex_1 = parseInt(this.getAttribute('index')) ;
		var offset = -296 * (myindex_1 - index_1);
		animate_nr1(offset);
		index_1 = myindex_1;
		showButton_nr1();
	} 
}


// 2.MIUI主题

function showButton_nr2()
{
	for(var i = 0;i<buttons_2.length;i++)
	{
		if(buttons_2[i].className == 'on_nr')
		{
			buttons_2[i].className = '';
			break;
		}
	}
	buttons_2[index_2 -1].className = 'on_nr';
}

 function animate_nr2(offset)
 {
 		var newleft_nr = parseInt(list_2.style.left) + offset;
 		var time = 300;
 		var interval = 10
 		var speed = offset/(time/interval);
 		function go_nr2()
 		{
 			if( (speed <0 && parseInt(list_2.style.left) > newleft_nr) || (speed >0 && parseInt(list_2.style.left) < newleft_nr) )
 			{
 				list_2.style.left = parseInt(list_2.style.left) + speed + 'px';
 				setTimeout(go_nr2, interval);
 			}
 			else
 			{
 				 list_2.style.left = newleft_nr +'px';
 			}
 		}
 		go_nr2();
 }



next_2.onclick = function()
{
	if(index_2 < 4)
	{
		index_2 += 1;
		animate_nr2(-296);
	}
	showButton_nr2();
}
prev_2.onclick = function()
{
	if (index_2 > 1) 
	{
		index_2 -= 1;
		animate_nr2(+296);
	}
	showButton_nr2();
}
for(var i=0;i < buttons_2.length;i++)
{
	buttons_2[i].onclick = function()
	{
		if(this.className == 'on_nr')
			{ return;}

		var myindex_2 = parseInt(this.getAttribute('index')) ;
		var offset = -296 * (myindex_2 - index_2);
		animate_nr2(offset);
		index_2 = myindex_2;
		showButton_nr2();
	} 
}

// 3.游戏
function showButton_nr3()
{
	for(var i = 0;i<buttons_3.length;i++)
	{
		if(buttons_3[i].className == 'on_nr')
		{
			buttons_3[i].className = '';
			break;
		}
	}
	buttons_3[index_3 -1].className = 'on_nr';
}

 function animate_nr3(offset)
 {
 		var newleft_nr = parseInt(list_3.style.left) + offset;
 		var time = 300;
 		var interval = 10;
 		var speed = offset/(time/interval);
 		function go_nr3()
 		{
 			if( (speed>0 && parseInt(list_3.style.left) < newleft_nr)||(speed < 0&& parseInt(list_3.style.left) > newleft_nr) )
 			{
 				list_3.style.left = parseInt(list_3.style.left) + speed + 'px';
 				setTimeout(go_nr3, interval);
 			}
 			else
 			{
 				 list_3.style.left = newleft_nr +'px';
 			}
 		}
 		go_nr3();
 }


next_3.onclick = function()
{
	if(index_3 < 4)
	{
		index_3 += 1;
		animate_nr3(-296);
		showButton_nr3();
	}
}
prev_3.onclick = function()
{
	if (index_3 > 1) 
	{
		index_3 -= 1;
		animate_nr3(+296);
		showButton_nr3();
	}
}
for(var i=0;i < buttons_3.length;i++)
{
	buttons_3[i].onclick = function()
	{
		if(this.className == 'on_nr')
			{ return;}

		var myindex_3 = parseInt(this.getAttribute('index')) ;
		var offset = -296 * (myindex_3 - index_3);
		animate_nr3(offset);
		index_3 = myindex_3;
		showButton_nr3();
	} 
}

// 4.应用

function showButton_nr4()
{
	for(var i = 0;i<buttons_4.length;i++)
	{
		if(buttons_4[i].className == 'on_nr')
		{
			buttons_4[i].className = '';
			break;
		}
	}
	buttons_4[index_4 -1].className = 'on_nr';
}

 function animate_nr4(offset)
 {
 		var newleft_nr = parseInt(list_4.style.left) + offset;
 		var time = 300;
 		var interval = 10;
 		var speed = offset/(time/interval);
 		function go_nr4()
 		{
 			if( (speed >0 && parseInt(list_4.style.left) <newleft_nr) ||(speed <0 && parseInt(list_4.style.left) >newleft_nr) )
 			{
 				list_4.style.left = parseInt(list_4.style.left) + speed + 'px';
 				setTimeout(go_nr4, interval);
 			}
 			else
 			{
 				list_4.style.left = newleft_nr +'px';
 			}
 		}
 		go_nr4();
 }


next_4.onclick = function()
{
	if(index_4 < 4)
	{
		index_4 += 1;
		animate_nr4(-296);
		showButton_nr4();
	}
}
prev_4.onclick = function()
{
	if (index_4 > 1) 
	{
		index_4 -= 1;
		animate_nr4(+296);
		showButton_nr4();
	}
}
for(var i=0;i < buttons_4.length;i++)
{
	buttons_4[i].onclick = function()
	{
		if(this.className == 'on_nr')
			{ return;}

		var myindex_4 = parseInt(this.getAttribute('index')) ;
		var offset = -296 * (myindex_4 - index_4);
		animate_nr4(offset);
		index_4 = myindex_4;
		showButton_nr4();
	} 
}

// 选项卡

dp_1.onmouseover = function()
{
	dp_1_ul.style.display = "block";
	dp_2_ul.style.display = "none";
	dp_3_ul.style.display = "none";
	dp_4_ul.style.display = "none";
}

dp_2.onmouseover = function()
{
	dp_1_ul.style.display = "none";
	dp_2_ul.style.display = "block";
	dp_3_ul.style.display = "none";
	dp_4_ul.style.display = "none";
}

dp_3.onmouseover = function()
{
	dp_1_ul.style.display = "none";
	dp_2_ul.style.display = "none";
	dp_3_ul.style.display = "block";
	dp_4_ul.style.display = "none";
}
dp_4.onmouseover = function()
{
	dp_1_ul.style.display = "none";
	dp_2_ul.style.display = "none";
	dp_3_ul.style.display = "none";
	dp_4_ul.style.display = "block";
}

pj_1.onmouseover = function()
{
	pj_1_ul.style.display = "block";
	pj_2_ul.style.display = "none";
	pj_3_ul.style.display = "none";
	pj_4_ul.style.display = "none";
}

pj_2.onmouseover = function()
{
	pj_1_ul.style.display = "none";
	pj_2_ul.style.display = "block";
	pj_3_ul.style.display = "none";
	pj_4_ul.style.display = "none";
}

pj_3.onmouseover = function()
{
	pj_1_ul.style.display = "none";
	pj_2_ul.style.display = "none";
	pj_3_ul.style.display = "block";
	pj_4_ul.style.display = "none";
}
pj_4.onmouseover = function()
{
	pj_1_ul.style.display = "none";
	pj_2_ul.style.display = "none";
	pj_3_ul.style.display = "none";
	pj_4_ul.style.display = "block";
}

zb_1.onmouseover = function()
{
	zb_1_ul.style.display = "block";
	zb_2_ul.style.display = "none";
	zb_3_ul.style.display = "none";
	zb_4_ul.style.display = "none";
	zb_5_ul.style.display = "none";
}

zb_2.onmouseover = function()
{
	zb_1_ul.style.display = "none";
	zb_2_ul.style.display = "block";
	zb_3_ul.style.display = "none";
	zb_4_ul.style.display = "none";
	zb_5_ul.style.display = "none";
}

zb_3.onmouseover = function()
{
	zb_1_ul.style.display = "none";
	zb_2_ul.style.display = "none";
	zb_3_ul.style.display = "block";
	zb_4_ul.style.display = "none";
	zb_5_ul.style.display = "none";
}

zb_4.onmouseover = function()
{
	zb_1_ul.style.display = "none";
	zb_2_ul.style.display = "none";
	zb_3_ul.style.display = "none";
	zb_4_ul.style.display = "block";
	zb_5_ul.style.display = "none";
}

zb_5.onmouseover = function()
{
	zb_1_ul.style.display = "none";
	zb_2_ul.style.display = "none";
	zb_3_ul.style.display = "none";
	zb_4_ul.style.display = "none";
	zb_5_ul.style.display = "block";
}


