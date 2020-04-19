let y = document.getElementById("expand");
y.onclick = function () {
  var x = document.getElementById("hidden");
  if (x.classList.contains("hide")) {
    x.classList.remove("hide");
    x.classList.add("show");
    y.textContent = "Menos información";
  } else {
    x.classList.remove("show");
    x.classList.add("hide");
    y.textContent = "Más información";
  }
};
