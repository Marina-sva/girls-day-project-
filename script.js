async function loadPokemon() {

    const randomId = Math.floor(Math.random() * 1025) + 1; // Pokémon IDs (1–1025)

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

    const data = await response.json();

    document.getElementById("pokemon-img").src =
        data.sprites.front_default;

    document.getElementById("pokemon-name").innerText =
        data.name;

    document.getElementById("pokemon-type").innerText =
        "Type: " + data.types[0].type.name;
}