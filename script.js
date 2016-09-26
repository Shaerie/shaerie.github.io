var pics = ["pics/a.jpg","pics/b.jpg","pics/c.jpg","pics/d.jpg","pics/e.jpg","pics/f.jpg","pics/g.jpg","pics/h.jpg","pics/i.jpg","pics/j.jpg","pics/k.jpg","pics/l.jpg","pics/m.jpg"]

var i=0;

$(document).ready(function(){
		$('.picture').click(
		function()
		{
			$('#slider').show();
			$('#picplace').html("<img id='newpic' src='" + $(this).css('background-image').substring(30,40) + "'/>");
		
			for(var j=0;j<pics.length;j++)
			if( ($(this).css('background-image').substring(30,40)) == pics[j] )
			i=j;
		})
		
		$('#right,#picplace').click(
		function()
		{	
			if(i<pics.length-1)
			i++;
			else
			i=0;
		$('#picplace').html("<img id='newpic' src='" + pics[i] + "'/>");
		})
		
		$('#left').click(
		function()
		{	
			if(i>1)
			i--;
			else
			i=pics.length-1;
		$('#picplace').html("<img id='newpic' src='" + pics[i] + "'/>");
		})
})

$(document).on("click","#x",function(){
		$('#slider').hide();
		$('.picture').click(
		function()
		{
				$('#slider').show();
		})
})

