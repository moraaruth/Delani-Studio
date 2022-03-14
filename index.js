$(document).ready(function(){
    $("#image1").mouseover(function(){
      $("#work4").show();
    }).mouseout(function(){
      $("#work4").hide();
    });
  });
  $(document).ready(function(){
    $("#image2").mouseover(function(){
      $("#work3").show();
    }).mouseout(function(){
      $("#work3").hide();
    });
  });
  $(document).ready(function(){
    $("#image3").mouseover(function(){
      $("#work2").show();
    }).mouseout(function(){
      $("#work2").hide();
    });
  });
  $(document).ready(function(){
    $("#image4").mouseover(function(){
      $("#work1").show();
    }).mouseout(function(){
      $("#work1").hide();
    });
  });
  $(document).ready(function(){
    $("#image5").mouseover(function(){
      $("#work5").show();
    }).mouseout(function(){
      $("#work5").hide();
    });
  });
  $(document).ready(function(){
    $("#image6").mouseover(function(){
      $("#work6").show();
    }).mouseout(function(){
      $("#work6").hide();
    });
  });
  $(document).ready(function(){
    $("#image7").mouseover(function(){
      $("#work7").show();
    }).mouseout(function(){
      $("#work7").hide();
    });
  });
  $(document).ready(function(){
    $("#image8").mouseover(function(){
      $("#work8").show();
    }).mouseout(function(){
      $("#work8").hide();
    });
  });
  $(document).ready(function(){
    $(".container1 form#form1").submit(function(){
            // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val(); 
    if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    });
  });