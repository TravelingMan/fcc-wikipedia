// TODO This isn't done yet!

// TODO Remove the test case
let jsonTest = `["pest",["Pest","Pesticide","Pest control","Pesticide regulation in the United States","Pest (organism)","Pesticide poisoning","Pesto","Pesticide toxicity to bees","Pesticide residue","Peste Noire"],["Pest or The Pest may refer to:","Pesticides are substances that are meant to control pests, including weeds. The term pesticide includes all of the following: herbicide, insecticides (which may include insect growth regulators, termiticides, etc.) nematicide, molluscicide, piscicide, avicide, rodenticide, bactericide, insect repellent, animal repellent, antimicrobial, fungicide, disinfectant (antimicrobial), and sanitizer.","Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities.","Pesticide regulation in the United States is primarily a responsibility of the Environmental Protection Agency.","A pest is a plant or animal detrimental to humans or human concerns including crops, livestock, and forestry.","A pesticide poisoning occurs when chemicals intended to control a pest affect non-target organisms such as humans, wildlife, or bees.","Pesto (Italian: [\u02c8pesto]; Ligurian: [\u02c8pestu]) or to refer to the original dish pesto alla genovese (Italian pronunciation: [\u02c8pesto alla d\u0292eno\u02c8ve\u02d0ze; -e\u02d0se]), is a sauce originating in Genoa, the capital city of Liguria, Italy.","Pesticides vary in their effects on bees. Contact pesticides are usually sprayed on plants and can kill bees when they crawl over sprayed surfaces of plants or other areas around it.","Pesticide residue refers to the pesticides that may remain on or in food after they are applied to food crops.","Peste Noire, taking their name from the Black Plague, is a black metal band from La Chaise-Dieu, France."],["https://en.wikipedia.org/wiki/Pest","https://en.wikipedia.org/wiki/Pesticide","https://en.wikipedia.org/wiki/Pest_control","https://en.wikipedia.org/wiki/Pesticide_regulation_in_the_United_States","https://en.wikipedia.org/wiki/Pest_(organism)","https://en.wikipedia.org/wiki/Pesticide_poisoning","https://en.wikipedia.org/wiki/Pesto","https://en.wikipedia.org/wiki/Pesticide_toxicity_to_bees","https://en.wikipedia.org/wiki/Pesticide_residue","https://en.wikipedia.org/wiki/Peste_Noire"]]`;

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
  // Tags
  let section = document.getElementById("results");
  let divEl = document.createElement("div");
  let titleEl = document.createElement("h3");
  let contentEl = document.createElement("p");

  // Text
  let 
  
  // Add to the DOM
  divEl.appendChild(titleEl).appendChild(title);
  divEl.appendChild(contentEl).appendChild(content);

  results.appendChild(divEl);
}