window.onload=function () 
{

// main page skip	
	var oBtn_l=document.getElementById('l');
	var oBtn_nol=document.getElementById('nol');
	var oBtn_menlove=document.getElementById('menlove');
		oBtn_l.onclick=function()
		{
			url='present_re_a.html';
			window.location.href = url;
		};
		
		oBtn_menlove.onclick=function()
		{
			url='present_re_b.html';
			window.location.href = url;
		};

		oBtn_nol.onclick=function()
		{
			url='present_re_c.html';
			window.location.href = url;
		};



}