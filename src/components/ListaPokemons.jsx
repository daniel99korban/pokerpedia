import { useEffect, useState } from "react";

export default function ListaPokemons({name, url}){
    let [pokeDados, setPokeDados] = useState([]);
       
    useEffect(()=>{
        const obterPokemons = async () => {
            let pokemonsResponse = await fetch(url);
            let pokemonsResponseJSON = await pokemonsResponse.json();
            
            
            const pokemons = await Promise.all(
                pokemonsResponseJSON.pokemon.map(async (dados) => {
                    const img = await obterImgPokemon(dados.pokemon.url);
                    return {
                        nome: dados.pokemon.name,
                        img: img,
                    };
                })
            );

            setPokeDados(pokemons);
        };
        obterPokemons();
    }, [url])

    const obterImgPokemon = async (_url) => {
        let imgResponse = await fetch(_url);
        let imgResponseJson = await imgResponse.json();
        return imgResponseJson.sprites.front_default;
    };

    return(
        <>
            <p>Pokemons tipo <strong>{name}</strong></p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {pokeDados.map((pokemon, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <img src={pokemon.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Nome: </strong>{pokemon.name}</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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