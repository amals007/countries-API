
fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).
then(data=>populateDetails(data))

function populateDetails(data){ 
    let dropDown = document.querySelector("#selectBox")
 data.forEach(country=>{ 
  let option = document.createElement("option")
  option.text=country.name
  option.value=country.name
dropDown.appendChild(option)

})

}




function displayCountryDetails() {
    let countryName = selectBox.value
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
    then(res => res.json()).
    then(data => populateValue(data))

}


function populateValue(data) {
    // country name
    // capital
    // population
    //currency name
    //language name
    //flag
    let countryName = data[0].name
    let capital = data[0].capital
    let population = data[0].population
    let curName = data[0].currencies[0].name
    let language = data[0].languages[0].name
    let flag = data[0].flag

let htmlData = `
<div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Country Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Country : ${countryName}</li>
    <li class="list-group-item">Capital : ${capital}</li>
    <li class="list-group-item">Population : ${population}</li>
    <li class="list-group-item">Currency Name : ${curName}</li>
    <li class="list-group-item">Language : ${language}</li>
  </ul>

</div>

`
result.innerHTML = htmlData

}