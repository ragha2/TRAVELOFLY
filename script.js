 <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script> 


    <script>

  $( function() {
    $( "#datepicker" ).datepicker();
    $( "#datepicker1" ).datepicker();
  } );

$(document).ready(function(){
  $("#radio1").click(function(){
    $(".pickdate").hide();
      $(".datepick").show();
  });
 

// round trip
   $("#radio2").click(function(){
    $(".datepick").hide();
      $(".pickdate").show();
  });
  
// multicity
   $("#radio3").click(function(){
    $(".datepick").hide();
     $(".pickdate").hide();
   }); 
   
  });

  </script>
