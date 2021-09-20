var clicks = 123;
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

var count = 1;
var next = 1;
var last = 1;
document.getElementById("right").addEventListener("click", function () {
  //console.log("start with "+count);
  if (count >= 5) {
    document.getElementById("quote" + count).classList.remove("active");
    document.getElementById("pic").classList.remove("img" + count);
    count = 1;
    document.getElementById("quote" + count).classList.add("active");
    document.getElementById("pic").classList.add("img" + count);
  } else {
    next = count + 1;
    document.getElementById("quote" + count).classList.remove("active");
    document.getElementById("pic").classList.remove("img" + count);
    document.getElementById("quote" + next).classList.add("active");
    document.getElementById("pic").classList.add("img" + next);
    count++;
  }
  //console.log("ends with "+count);
});

document.getElementById("left").addEventListener("click", function () {
  //console.log("start with "+count);
  if (count == 1) {
    document.getElementById("quote" + count).classList.remove("active");
    document.getElementById("pic").classList.remove("img" + count);
    count = 5;
    document.getElementById("quote" + count).classList.add("active");
    document.getElementById("pic").classList.add("img" + count);
  } else {
    last = count - 1;
    document.getElementById("quote" + count).classList.remove("active");
    document.getElementById("pic").classList.remove("img" + count);
    document.getElementById("quote" + last).classList.add("active");
    document.getElementById("pic").classList.add("img" + last);
    count--;
  }
  //console.log("ends with "+count);
});
