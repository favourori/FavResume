// FOR THE FLOATING MENU BUTTON
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });


  // for the tool tip
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });


  // next and prev button in the Learn page
  
 var elem = document.querySelector('.carousel');
	

var instance = M.Carousel.init(elem,{
    fullWidth: true,
    indicators: true
 });
  $('#next').bind('click',function(){
  	instance.next()
  

  })  

   $('#back').bind('click',function(){
  	instance.prev()
  }) 