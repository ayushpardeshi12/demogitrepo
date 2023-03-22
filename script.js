function calculateBMR() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
  
    var bmr;
    if (gender === "male") {
      bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else {
      bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
  
    document.getElementById("bmr").innerHTML = "Your BMR is " + bmr + " calories per days.";
  }
  
