// Global variables
let username, password, role;

// Login function
function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role (admin, teacher, or student):");

  if (!username || !password || !role) {
    alert("Input should not be empty!");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

// Function to calculate average and provide letter equivalent
function calculateAverage(a, b, c, d) {
  let average = (a + b + c + d) / 4;
  average = Math.round(average);

  console.log("Average:", average);

  if (average <= 74) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A");
  } else if (average > 96) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A+");
  }
}

// Example usage
login();
calculateAverage(80, 85, 90, 95); // Average: 88, B"

calculateAverage(70, 75, 80, 85); // Average: 77, F"

calculateAverage(90, 92, 94, 95); // Average: 93, A"

calculateAverage(97, 98, 99, 100); // Average: 99, A+"