$(document).ready(function()
	{
		if($('body').is('#index'))
		var pics = ["pics/01.jpg","pics/02.jpg","pics/03.jpg"];
		
		else if($('body').is('#illustrations'))
		var pics = ["pics/01.jpg","pics/02.jpg","pics/03.jpg","pics/04.jpg","pics/05.jpg","pics/06.jpg","pics/07.jpg","pics/08.jpg","pics/09.jpg","pics/10.jpg","pics/11.jpg","pics/12.jpg","pics/13.jpg"];
		
		else if($('body').is('#storyboards'))
		var pics = [];
		
		var i=0;
		
		var images = new Array();
		
		for(;i<pics.length;i++)
		{
			images[i] = new Image();
			images[i].src = 'https://shaerie.github.io/' + pics[i];
		}
		
		i=0;
		
		$('.thumb').click(
		function()
		{
			$('#slider').show();
			$('#photo').attr('src','pics/' + $(this).css("background-image").substring(74,80));
			for(var j=0;j<pics.length;j++)
			if(($(this).css("background-image").substring(74,80)) == pics[j].substring(5))
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
