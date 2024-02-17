import { useState, useEffect } from "react";
import ListaPokemons from "./ListaPokemons";

function TipoPokemons(){

    let url = "https://pokeapi.co/api/v2/type/";
    
    let [categorias, setCategorias] = useState();
    let [pokemons, setPokemons] = useState();
    let [tipoPokemon, setTipoSelecionado] = useState('normal');


    useEffect(() => {
        let obterCategorias = async () => {
            let tipoPokemonResponse = await fetch(url);
            let responseJSON = await tipoPokemonResponse.json();


            let index = 0;

            let listaCategorias = responseJSON.results.map(categoria => {
                index += 1;
                return(
                    <>
                        {
                            categoria.name==tipoPokemon?
                            <button class="btn btn-primary" data-bs-toggle="collapse" href={`#collapse-${index}`} role="button" aria-expanded="false" aria-controls={`collapse-${index}`}>
                                {categoria.name}
                            </button>
                            :
                            <button onClick={()=>{setTipoSelecionado(categoria.name)}} class="btn btn-secondary" data-bs-toggle="collapse" href={`#collapse-${index}`} role="button" aria-expanded="false" aria-controls={`collapse-${index}`}>
                                {categoria.name}
                            </button>
                        }
                    </>
                )
            });

            index = 0;

            let listaPokemons =  responseJSON.results.map(tipoPokemon => {
                index += 1;
                return(
                    <div class="collapse" id={`collapse-${index}`}>
                        <div class="card card-body">
                            <ListaPokemons url={tipoPokemon.url} name={tipoPokemon.name}/>
                        </div>
                    </div>
                )
            });

            setCategorias(listaCategorias);
            setPokemons(listaPokemons);
        }
        obterCategorias();
    }, [tipoPokemon])

    return (
        <>
            <p class="d-inline-flex gap-1">
                {categorias}
            </p>
            {pokemons}
        </>
    );

}

export default TipoPokemons;