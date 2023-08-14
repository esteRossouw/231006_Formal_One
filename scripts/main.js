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

    var plants = [
      {
        name: "Fikus Tree",
        price: 320,
        description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior décor.",
        onSale: true
      },
      {
        name: "White Sprite Succulent",
        price: 200,
        description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        onSale: true
      },
      {
        name: "Snake Plant",
        price: 400,
        description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        onSale: false
      },
      {
        name: "Parlour Palm",
        price: 350,
        description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        onSale: true
      },
      {
        name: "Japanese Maple",
        price: 1200,
        description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        onSale: false
      },
    ];
  
        
