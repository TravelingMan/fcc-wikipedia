// TODO This isn't done yet!

document.addEventListener("DOMContentLoaded", function() {});

function searchButton() {
  let searchInput = document.getElementById("searchBox").value;
  
  let request = new XMLHttpRequest();
  request.open("GET", queryString(searchInput));
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  request.responseTime = "json";
  request.send();

  request.onload = function() {
    let articles = request.response;
    let results = document.getElementById("results");
    results.innerHTML = articles;
  };
}

function queryString(text) {
  const url = "https://en.wikipedia.org/w/api.php?action=opensearch";
  const urlEnd = "&limit=10&namespace=0&origin=*&format=json";
  let searchQuery = "&search=" + text;

  return url + searchQuery + urlEnd;
}