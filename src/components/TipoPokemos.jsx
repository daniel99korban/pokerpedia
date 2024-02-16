import { useState, useEffect } from "react";

function TipoPokemons(){
    let url = "https://pokeapi.co/api/v2/type/";
    
    let [categorias, setCategorias] = useState();

    useEffect(() => {
        let obterCategorias = async () => {
            let response = await fetch(url);
            let responseJSON = await response.json();

            let listaCategorias = responseJSON.results.map(categoria => 
                <li>{categoria.name}</li>
            )

            setCategorias(listaCategorias);
        }
        obterCategorias();
    }, [])
    
    console.log(categorias);

    return (
        <ul>{categorias}</ul>
    );

}

export default TipoPokemons;