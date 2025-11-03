$(document).ready(function() {
  $("#regForm").on("submit", function(e) {
    let valid = true;

    // Check if required fields are filled
    $("input[required], select[required], textarea[required]").each(function() {
      if ($(this).val().trim() === "") {
        $(this).css("border", "2px solid red");
        valid = false;
      } else {
        $(this).css("border", "1px solid #ccc");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });

  // Reset border color on reset
  $(".reset-btn").click(function() {
    $("input, select, textarea").css("border", "1px solid #ccc");
  });
});
