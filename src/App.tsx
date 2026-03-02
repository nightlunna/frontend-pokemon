import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import type { Pokemon } from './components/Card/Card'


function App() {
  const [listapokemon, setlistapokemon] = useState<Pokemon[]>([
    {
      imagem: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/393.png',
      nome: 'Piplup',
      tipo: 'Água',
      nivel: 80,
      hp: 20,
      ataque: 32,
      defesa: 30,
      ataque_especial: 11,
      defesa_especial: 40,
      velocidade: 3,
      identificador: 767676776767,
      onDelete: () => { }
    }
  ])

  const urlpokemon: string = "http://localhost:5000/pokemon"

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(urlpokemon, {
          method: 'GET',

        });
        if (!response.ok) {
          throw new Error(`erro: ${response.status}`)
        }

        const result = await response.json();
        setlistapokemon(result)
      } catch (error) {
        console.error((error as Error).message)
      }
    }
    fetchPokemon()
  }, [])

  return (
    <>
      <div>
        {listapokemon.map(pokemon => (
          <Card
            key={pokemon.identificador}
            imagem={pokemon.imagem}
            nome={pokemon.nome}
            tipo={pokemon.tipo}
            nivel={pokemon.nivel}
            hp={pokemon.hp}
            ataque={pokemon.ataque}
            defesa={pokemon.defesa}
            ataque_especial={pokemon.ataque_especial}
            defesa_especial={pokemon.defesa_especial}
            velocidade={pokemon.velocidade}
            identificador={pokemon.identificador}
            onDelete={() => { }}
          />
        ))}
      </div>
    </>
  )
}

export default App

