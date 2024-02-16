

function TipoPokemon(){
    let url = "https://pokeapi.co/api/v2/type/";
    
    let resultados = fetch(url)
    .then((resp) => resp.json())
    .then(
        function (resp) { 
            resp.results.map( categoria =>
                <li>
                    {categoria.name}
                </li>)
        }
    ).catch(function(error) {
        console.log(error);
    });

    console.log(resultados);


    {/* React Fragments*/}
    
    {/*let categorias = resultados.map( categoria =>
        <li>
            {categoria.name}
        </li>
    );*/}

    return <ul>{resultados}</ul>;

}

export default TipoPokemon;