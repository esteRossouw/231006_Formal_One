// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    
    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();
    $("#descriptionText2").hide();
    $("#descriptionText3").hide();
    $("#descriptionText4").hide();
    $("#descriptionText5").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });
    // When the card 2 is clicked
    $(".card2").click(function(){

      // Toggle the price & description text
      $("#priceText2").toggle();
      $("#descriptionText2").toggle();
  
      // Resize the image to fit the additional content
      $(".card-img-middle").toggleClass("small");
  
    });
    // When the card 3 is clicked
    $(".card3").click(function(){

      // Toggle the price & description text
      $("#priceText3").toggle();
      $("#descriptionText3").toggle();
  
      // Resize the image to fit the additional content
      $(".card-img-right").toggleClass("small");
  
    });
     // When the card 4 is clicked
     $(".card4").click(function(){

      // Toggle the price & description text
      $("#priceText4").toggle();
      $("#descriptionText4").toggle();
  
      // Resize the image to fit the additional content
      $(".card-img-left").toggleClass("small");
  
    });
    // When the card 4 is clicked
    $(".card5").click(function(){

      // Toggle the price & description text
      $("#priceText5").toggle();
      $("#descriptionText5").toggle();
  
      // Resize the image to fit the additional content
      $(".card-img-last").toggleClass("small");
  
    });

    $(document).ready(function() {
      $(".remove-item").click(function() {
        $(this).closest("tr").remove();
      });
    });

 