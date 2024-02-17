import { useEffect, useState } from "react";

export default function ListaPokemons({name, url}){

    let [pokeDados, setPokeDados] = useState();
    
    useEffect(()=>{

        let obterPokemons = async () => {
            let pokemonsResponse = await fetch(url);
            let pokemonsResponseJSON = await pokemonsResponse.json();

            let pokemons = pokemonsResponseJSON.pokemon.map((dados) =>
                 <li>{dados.pokemon.name}</li>
            )
            let listaPokemons = <ul>{pokemons}</ul>
            setPokeDados(listaPokemons);
        }

        obterPokemons();
    })

    return(
        <>
            <p>Pokemons tipo <strong>{name}</strong></p>
            {pokeDados}
        </>
    )

}


// "pokemon": [
//     {
//         "pokemon": {
//             "name": "pidgey",
//             "url": "https://pokeapi.co/api/v2/pokemon/16/"
//         },
//         "slot": 1
//     },
//     {
//         "pokemon": {
//             "name": "pidgeotto",
//             "url": "https://pokeapi.co/api/v2/pokemon/17/"
//         },
//         "slot": 1
//     },
//     {
//         "pokemon": {
//             "name": "pidgeot",
//             "url": "https://pokeapi.co/api/v2/pokemon/18/"
//         },
//         "slot": 1
//     },