<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name   = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $phone  = htmlspecialchars($_POST['phone']);
    $dob    = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);
    $course = htmlspecialchars($_POST['course']);
    $address = htmlspecialchars($_POST['address']);
    $skills = isset($_POST['skills']) ? $_POST['skills'] : [];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Submitted</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Registration Successful!</h2>
    <div class="result">
      <p><strong>Name:</strong> <?php echo $name; ?></p>
      <p><strong>Email:</strong> <?php echo $email; ?></p>
      <p><strong>Phone:</strong> <?php echo $phone; ?></p>
      <p><strong>Date of Birth:</strong> <?php echo $dob; ?></p>
      <p><strong>Gender:</strong> <?php echo $gender; ?></p>
      <p><strong>Course:</strong> <?php echo $course; ?></p>
      <p><strong>Skills:</strong> <?php echo implode(", ", $skills); ?></p>
      <p><strong>Address:</strong> <?php echo nl2br($address); ?></p>
    </div>
  </div>
</body>
</html>
