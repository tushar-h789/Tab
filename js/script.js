function openCity(event, cityName) {
  tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");

  let arr = Array.from(tabcontent);

  arr.map((item) => {
    item.style.display = "none";
  });

  tablinks = document.querySelectorAll(".tablinks");
  let arr2 = Array.from(tablinks);
  arr2.map((item) => {
    item.className = item.className.replace(" active", "");
  });
  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " active";
}
