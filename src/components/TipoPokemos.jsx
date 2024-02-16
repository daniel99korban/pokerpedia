import { useState, useEffect } from "react";

function TipoPokemons(){

    let url = "https://pokeapi.co/api/v2/type/";
    
    let [categorias, setCategorias] = useState();
    let [descricao, setDescricao] = useState();

    useEffect(() => {
        let obterCategorias = async () => {
            let response = await fetch(url);
            let responseJSON = await response.json();
            let index = 0;

            let listaCategorias = responseJSON.results.map(categoria => {
                index += 1;
                return(
                    <a class="btn btn-primary" data-bs-toggle="collapse" href={`#collapse-${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                        {categoria.name}
                    </a>
                )
            });

            index = 0;

            let listaDescricao =  responseJSON.results.map(descricao =>{
                index += 1;
                return(
                    <div class="collapse" id={`collapse-${index}`}>
                        <div class="card card-body">{descricao.url}</div>
                    </div>
                )
            });


            setCategorias(listaCategorias);
            setDescricao(listaDescricao);
        }
        obterCategorias();
    }, [])
    
    console.log(categorias);

    return (
        <>
            <p class="d-inline-flex gap-1">
                {categorias}
            </p>
            {descricao}
        </>
    );

}

export default TipoPokemons;