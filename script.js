fetch("https://swapi.co/api/people/1/") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => {
    // display data in the browser
    document.getElementById("textToChange").innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
  });
document
  .getElementById("DarthVaderButton")
  .addEventListener("click", function() {
      fetch("https://swapi.co/api/people/4/") // make the request
        .then(response => response.json()) // convert response to json
        .then(myJson => {
          // display data in the browser
          document.getElementById("textToChange").innerHTML =
            "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
        });
    });
    