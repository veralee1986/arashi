window.onload=function () 
{

// main page skip	
	var oTex_p=document.getElementById('tex_p');
	var oBtn_p=document.getElementById('btn_p');
		oBtn_p.onclick=function()
		{
			if (oTex_p.value=="xE26BnoBuX")
			{
				url='present_que.html';
			}
			else
			{
				url='www.baidu.com';
			}
			window.location.href = url;
		};




}