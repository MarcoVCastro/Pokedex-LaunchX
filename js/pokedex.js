const fetchpokemon =()=> 
{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>
    {
        if(res.status !="200"){
            console.log(res);
            pokeImage("./img/pikachu-cry.gif")
            notFound.textContent = "Pokemon no encontrado!!!"
            button.classList.replace("yellow__button","red__button")
            button.classList.replace("green__button","red__button")
            pokeHP.textContent = "No Disponible";
            pokeType.textContent = "No Disponible";
            pokeMove.textContent = "No Disponible";
            pokeAbilities.textContent = "No Disponible";
        }
        else{
            notFound.textContent = "Pokemon encontrado!!!"
            button.classList.replace("yellow__button","green__button")
            button.classList.replace("red__button","green__button")
            return res.json();
        }
            

        
    }).then((data) => 
    {
        console.log(data)
        let pokeImg= data.sprites.front_default;
        
        console.log(pokeImg);
        pokeImage(pokeImg)
       
        let pokeHP = data.stats[0].base_stat ;
        pokeStats(pokeHP)

        let pokeType = data.types[0].type.name;
        PokeTipo(pokeType)

        let pokeMove = data.moves[0].move.name + ", "  +  data.moves[1].move.name + ", " + data.moves[2].move.name  ;
        pokeMovimiento(pokeMove)

        let pokeAbilities = data.abilities[0].ability.name + ", " + data.abilities[1].ability.name;
        pokeHabilidades(pokeAbilities)

    })
}

// fetchpokemon();

const pokeImage = (url)=>{
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}
const pokeStats = (url)=>{
    const pokeHP = document.getElementById("pokeHP")
    pokeHP.textContent = url;
}

const PokeTipo = (url)=>{
    const pokeType = document.getElementById("pokeType")
    pokeType.textContent = url;
}

const pokeMovimiento = (url)=>{
    const pokeMove = document.getElementById("pokeMove")
    pokeMove.textContent = url;
}
const pokeHabilidades =(url)=>{
    const pokeAbilities = document.getElementById("pokeAbilities")
    pokeAbilities.textContent = url;

}
