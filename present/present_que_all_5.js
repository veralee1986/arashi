window.onload=function () 
{

// main page skip	
	var oBtn_mo=document.getElementById('mo');
	var oBtn_ki=document.getElementById('ki');
	var oBtn_goods=document.getElementById('goods');
	var oBtn_player=document.getElementById('player');
		oBtn_ki.onclick=function()
		{
			url='present_re_a.html';
			window.location.href = url;
		};
		oBtn_mo.onclick=function()
		{
			url='present_re_b.html';
			window.location.href = url;
		};
		oBtn_goods.onclick=function()
		{
			url='present_re_b.html';
			window.location.href = url;
		};
		oBtn_player.onclick=function()
		{
			url='present_re_b.html';
			window.location.href = url;
		};


}