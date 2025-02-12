function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-right") {
      x.className += " responsive";
    } else {
      x.className = "nav-right";
    }
  }