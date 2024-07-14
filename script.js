document.addEventListener('DOMContentLoaded', function() {
    fetchPokemons();

    function fetchPokemons() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                const pokemons = data.results;
                pokemons.forEach(pokemon => fetchPokemonData(pokemon.url));
            })
            .catch(error => console.error('Error fetching Pokémon list:', error));
    }

    function fetchPokemonData(url) {
        fetch(url)
            .then(response => response.json())
            .then(pokemon => {
                displayPokemon(pokemon);
            })
            .catch(error => console.error('Error fetching Pokémon data:', error));
    }

    function displayPokemon(pokemon) {
        const container = document.getElementById('container');
        const card = document.createElement('div');
        card.classList.add('card');

        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemon.sprites.front_default;

        const pokemonName = document.createElement('h3');
        pokemonName.textContent = pokemon.name;

        card.appendChild(pokemonImg);
        card.appendChild(pokemonName);
        container.appendChild(card);
    }
});
