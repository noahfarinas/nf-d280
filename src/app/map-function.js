document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".allPath").forEach(worldMap => {
    worldMap.addEventListener("mouseover", () => {
      worldMap.style.fill = "pink";
    });
    worldMap.addEventListener("mouseleave", () => {
      worldMap.style.fill = "black";
    });
    

    worldMap.addEventListener("click", () => {
      async function getData() {
        let url = 'https://api.worldbank.org/V2/country/' + worldMap.id + '?format=json';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let dataPath = data[1];
        let countryName = dataPath[0].name;
        document.getElementById("name-inner").innerText = countryName;
        let countryCapitol = dataPath[0].capitalCity;
        document.getElementById("capital").innerText = countryCapitol;
        let countryRegion = dataPath[0].region.value;
        document.getElementById("region").innerText = countryRegion;
        let countryIncome = dataPath[0].incomeLevel.value;
        document.getElementById("income").innerText = countryIncome;
        let countryLong = dataPath[0].longitude;
        document.getElementById("longitude").innerText = countryLong;
        let countryLat = dataPath[0].latitude;
        document.getElementById("latitude").innerText = countryLat;
      }
      getData();
    });
  });
});
