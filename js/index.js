// TODO This isn't done yet!

document.addEventListener("DOMContentLoaded", function() {});

// TODO Add an event handler instead of the onclick method
function searchButton() {
  let searchInput = document.getElementById("searchBox").value;
  
  let request = new XMLHttpRequest();
  request.open("GET", queryString(searchInput));
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  request.responseTime = "json";
  request.send();

  request.onload = function() {
    let articles = request.response;    
    getArticlesFromJson(articles);
  };
}

function queryString(text) {
  let queryLiteral = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${text}&limit=10&namespace=0&origin=*&format=json`;

  return queryLiteral;
}

function getArticlesFromJson(rawJson) {
  let data = JSON.parse(rawJson);  
  
  for (let i = 0; i < data[1].length; i++) {
    let title = data[1][i];
    let content = data[2][i];
    let link = data[3][i];    

    createArticles(title, content, link);
  }
}

function createArticles(title, content, link) {
  const section = document.getElementById("results");

  // Tags
  let divEl = document.createElement("div");
  let titleEl = document.createElement("strong");
  let contentEl = document.createElement("p");
  let linkEl = document.createElement("a");

  // Text  
  let contentText = document.createTextNode(content);

  // Set link
  linkEl.href = link;
  linkEl.innerHTML = title;  

  // Node layout
  titleEl.appendChild(linkEl);
  divEl.appendChild(titleEl).appendChild(linkEl);
  divEl.appendChild(contentEl).appendChild(contentText);

  // Push to DOM
  section.appendChild(divEl);
}