window.onload = init();

function init(){
    document.querySelector('#test1-button')
        .addEventListener('click', pokeRequest)

    document.querySelector('#test2-button')
        .addEventListener('click', starRequest)

    document.querySelector('#test3-button')
        .addEventListener('click', issRequest)
}

// pokemon api
function pokeRequest(event){
    event.preventDefault();
    
    const request = new XMLHttpRequest();
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    request.open('GET', pokeUrl);
    request.onload = pokemonDisplay;
    request.send();
}

function pokemonDisplay(){
    const pokemon = JSON.parse(event.target.responseText);
        const {species, sprites} = pokemon;
        console.log(pokemon)
        document.querySelector('#test1').innerText = `Pokemon API returns this name: ${species.name}.`;
        document.querySelector('#avatar1').src = sprites.front_default;
}

// starwars api
function starRequest(event){
    event.preventDefault();
    
    const request = new XMLHttpRequest();
    const starUrl = 'https://swapi.co/api/people/1/';
    request.open('GET', starUrl);
    request.onload = starDisplay;
    request.send();
}

function starDisplay(){
    const luke = JSON.parse(event.target.responseText);
    const {name} = luke;
    console.log(luke)
    document.querySelector('#test2').innerText = `Star Wars API returns this name: ${name}.`;
}
// NASA api
function issRequest(){
    event.preventDefault();
    const request = new XMLHttpRequest();
    const nasaUrl = 'http://api.open-notify.org/iss-now.json';
    request.open('GET', nasaUrl);
    request.onload = issDisplay;
    request.send();
}

function issDisplay(){
    const iss = JSON.parse(event.target.responseText);
    const {iss_position} = iss;
    console.log(iss)
    document.querySelector('#test3').innerText = `NASA API returns the current location of the Internationa Space Station: ${iss_position.latitude} Latitude by ${iss_position.longitude} Longitude.`
}