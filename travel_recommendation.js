function resetSearch(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
}

function book(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.innerHTML += `<h2>THIS IS A DUMMY BUTTON AND DOESN'T DO ANYTHING!</h2>`;
}

function search() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const countries = ["country", "countries", "city", "cities", "urban"];
    const beaches = ["beaches", "beach", "nature", "water"];
    const temples = ["temple", "temples", "spiritual", "healing", "heal"]

    fetch('travel_recommendation.json')
      .then(response => response.json())
      .then(data => {
        if (countries.includes(input)){
            const locations = data.countries;
            locations.forEach(element => {
                const spots = element.cities;
                spots.forEach(e =>{
                    const name = e.name;
                    const img = e.imageUrl;
                    const desc = e.description;
                    resultDiv.innerHTML += `<div class="resultCard">`;
                    resultDiv.innerHTML += `<h2>${name}</h2>`;
                    resultDiv.innerHTML += `<img src="${img}" alt="hjh">`;

                    resultDiv.innerHTML += `<p>${desc}</p>`;
                    resultDiv.innerHTML += `</div>`;
                });
            });
        }
        else if(beaches.includes(input)){
            const locations = data.beaches;
            locations.forEach(e =>{
                const name = e.name;
                const img = e.imageUrl;
                const desc = e.description;
                resultDiv.innerHTML += `<div class="resultCard">`;
                resultDiv.innerHTML += `<h2>${name}</h2>`;
                resultDiv.innerHTML += `<img src="${img}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${desc}</p>`;
                resultDiv.innerHTML += `</div>`;
            });
        }
        else if(temples.includes(input)){
            const locations = data.temples;
            locations.forEach(e =>{
                const name = e.name;
                const img = e.imageUrl;
                const desc = e.description;
                resultDiv.innerHTML += `<div class="resultCard">`;
                resultDiv.innerHTML += `<h2>${name}</h2>`;
                resultDiv.innerHTML += `<img src="${img}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${desc}</p>`;
                resultDiv.innerHTML += `</div>`;
            });
        }
        else {
          resultDiv.innerHTML = 'Not results match :(';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}