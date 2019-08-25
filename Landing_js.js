document.getElementById('name_p').addEventListener('mouseover',function(){
  $('.catalog').slideDown('slow');
});

document.getElementById('p').addEventListener('click',function(){
  $('.catalog').slideDown('slow');
});

document.getElementById('name_d').addEventListener('mouseover',function(){
  $('.delivery_info').slideDown('slow');
});

document.getElementById('d').addEventListener('click',function(){
  $('.delivery_info').slideDown('slow');
});

document.getElementById('name_c').addEventListener('mouseover',function(){
  $('.contact_info').slideDown('slow');
});

document.getElementById('c').addEventListener('click',function(){
  $('.contact_info').slideDown('slow');
});




  document.getElementById("o").addEventListener("click",function(a){
    $("iframe#order").css({display : 'block'});
         

  });

  document.getElementById("cb").addEventListener("click",function(a){
    $("iframe#order").css({display : 'block'});
         

  });


  
document.addEventListener("mouseup",function (e){ 
  var div = $('#order'); 
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      div.hide();  } })