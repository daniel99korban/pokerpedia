import { useEffect, useState } from "react";

export default function ListaPokemons({name, url}){
    let [pokeDados, setPokeDados] = useState();
       
    useEffect(()=>{
        
        let obterPokemons = async () => {
            let pokemonsResponse = await fetch(url);
            let pokemonsResponseJSON = await pokemonsResponse.json();
            
            
            const pokemons = await Promise.all( 
                pokemonsResponseJSON.pokemon.map( async (dados) => {
                    let img = obterImgPokemon(dados.pokemon.url);
                    return {
                        name : dados.pokemon.name,
                        img : img
                    }
                })
            )

            setPokeDados(pokemons);
        }

        obterPokemons();

    },[url])

    let obterImgPokemon = async (url) => {
        let imgResponse = await fetch(url);
        let imgResponseJson = await imgResponse.json();
        return imgResponseJson.sprites.back_default;
    }

    return(
        <>
            <p>Pokemons tipo <strong>{name}</strong></p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={imgPokemon} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Nome: </strong>{dados.pokemon.name}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
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