
import Image from 'next/image'
import Link from 'next/link'

function PokedexEntry({id , pokemonName}){
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png"

    return(
            <div className="pokedexDiv">
                <Image loader= {() => imageUrl } unoptimized={true} src={imageUrl} layout="intrinsic" height={100} width={100} placeholder="blur" blurDataURL={imageUrl} alt={pokemonName}/>
                <Link href={'/pokemon/'+pokemonName}><a>{pokemonName}</a></Link>
            </div>
    )
}

export default PokedexEntry