$(document).ready(function(){

    $.getJSON('testfinal.json', function(data){
            imgSrc1 = '<img src= "' + data.photo + '">';
            imgSrc2 = '<img src= "' + data.photo2 + '">';
            imgSrc3 = '<img src= "' + data.photo3 + '">';
           
       $("#one").html(imgSrc1); 
       $("#two").html(imgSrc2);      
       $("#three").html(imgSrc3);   
       $("#five").html( data.text );   
     
    })

   
});


