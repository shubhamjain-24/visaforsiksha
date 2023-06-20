var j = 0;
function expand() {
  if (j == 0) {
    document.getElementById("add").style.transform = "rotate(45deg)";
    j = 1;
  } else {
    document.getElementById("add").style.transform = "rotate(0deg)";
    j = 1;
  }
}
