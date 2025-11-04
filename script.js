$(document).ready(function() {
  $("#regForm").on("submit", function(e) {
    e.preventDefault(); // Stop normal form submission

    let valid = true; // assume form is valid initially

    
    $("input[required], select[required], textarea[required]").each(function() {
      if ($(this).val().trim() === "") {
        $(this).css("border", "2px solid red");
        valid = false;
      } else {
        $(this).css("border", "1px solid #ccc");
      }
    });

    
    const phone = $("input[name='phone']").val().trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      $("input[name='phone']").css("border", "2px solid red");
      alert("Please enter a valid 10-digit phone number.");
      valid = false;
    }

    const email = $("input[name='email']").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email pattern
    if (!emailPattern.test(email)) {
      $("input[name='email']").css("border", "2px solid red");
      alert("Please enter a valid email address.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    //Submit form using AJAX
    $.ajax({
      url: "submit.php",       // PHP file that handles data
      method: "POST",          // Send data using POST
      data: $(this).serialize(), // Serialize form data (turns into key=value pairs)
      success: function(response) {
        // Show the result inside the page instead of reloading
        $(".container").html(response);
      },
      error: function() {
        alert("There was an error submitting your form. Please try again.");
      }
    });
  });

  //Reset button clears styles
  $(".reset-btn").click(function() {
    $("input, select, textarea").css("border", "1px solid #ccc");
  });
});
