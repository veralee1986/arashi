// -------手机端icon控制


	var oDiv=document.getElementById('all-btn');
	var oBtn=document.getElementById('all-icon');
	var aDiv=oDiv.getElementsByTagName('ul');
	var aBtn=oBtn.getElementsByTagName('a');

	
    for (var i=0; i<aBtn.length; i++) 
    {
    	aBtn[i].index=i;  
    	aBtn[i].onclick=function()
    	 {
    	 	for (var i=0; i<aBtn.length; i++) 
    	 	{
    	 		
    	 		aBtn[i].className='';
    	 		aDiv[i].style.display='none';
    	 	}
    		this.className='a-cha-icon';
    		aDiv[this.index].style.display='block';
    		// alert(this.index);
    	};
    }
