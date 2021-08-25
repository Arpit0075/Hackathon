//build html elements
document.body.innerHTML = `<div class="heading-container">
<h1>Brewerys List</h1>
<img class="icon" src="./Icon/beer-svgrepo-com.svg" alt="icon" />
</div>
<div id="mainContainer" class="main-container"> </div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const brewerys = await data.json();
    mainContainer.innerHTML = "";
    brewerys.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (err) {
    console.log(err);
  }
};
getData();

const displayData = (obj) => {
  mainContainer.innerHTML += ` <div class="container">
    <h3 class="blue">Brewerie's Name: <span>${obj.name}</span></h3>
    <p class="para blue">Brewerie's Type:<span> ${obj.brewery_type}</span></p>
    <p class="para blue">Brewery’s Address: <span> ${obj.city}, ${obj.state} ,${
    obj.postal_code
  }, ${obj.country} </span></p>
    <p class="para blue">Brewery’s Phone number: <span> ${
      obj.phone !== null ? obj.phone : "not available"
    } </span></p>
    <p class="para blue">Brewery’s website: <a href=${obj.website_url}
    } target="_blank">${
      obj.website_url !== null ? obj.website_url : "not available"
    }</a></p>
  </div>`;
};
