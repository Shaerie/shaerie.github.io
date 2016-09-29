$(document).ready(function()
	{
		if($('body').is('#index'))
		var pics = ["pics/1.jpg","pics/2.jpg","pics/3.jpg"];
		
		else if($('body').is('#illustrations'))
		var pics = ["pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg","pics/5.jpg","pics/6.jpg","pics/7.jpg","pics/8.jpg","pics/9.jpg","pics/10.jpg","pics/11.jpg","pics/12.jpg","pics/13.jpg"];
		
		else if($('body').is('#storyboards'))
		var pics = [];
		
		var i=0;
	
		$('.thumb').click(
		function()
		{
			$('#slider').show();
			$('#photo').css("background-image","pics/" + $(this).css("background-image").substring(56,61));
			
			for(var j=0;j<pics.length;j++)
			if(($(this).css("background-image").substring(56,61)))
			i=j;
		})
		
		$('#right,#photo').click(
		function()
		{	
			if(i<pics.length-1)
			i++;
			else
			i=0;
		$('#photo').attr('src',pics[i]);
		})
		
		$('#left').click(
		function()
		{	
			if(i>0)
			i--;
			else
			i=pics.length-1;
		$('#photo').attr('src',pics[i]);
		})
	})
$(document).on("click","#x,#background",function(){
		$('#slider').hide();
		$('.thumb').click(
		function()
		{
				$('#slider').show();
		})
	})
