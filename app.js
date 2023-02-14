const d = document,
  w = window,
  stars = d.getElementById("stars"),
  moon = d.getElementById("moon"),
  mountainsBehind = d.getElementById("mountains_behind"),
  mountainsFront = d.getElementById("mountains_front"),
  text = d.getElementById("text"),
  btn = d.getElementById("btn");

w.addEventListener("scroll", function () {
  const value = w.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 0.8 + "px";
  mountainsBehind.style.top = value * 0.5 + "px";
  mountainsFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  btn.style.marginBottom = value * -.5 + "px";
});
