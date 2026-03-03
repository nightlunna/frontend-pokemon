import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import type { Pokemon } from './components/Card/Card'


function App() {
  const [listapokemon, setlistapokemon] = useState<Pokemon[]>([])

  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [hp, setHp] = useState('')
  const [nivel, setNivel] = useState('')
  const [ataque, setAtaque] = useState('')
  const [defesa, setDefesa] = useState('')
  const [ataque_especial, setAtaque_especial] = useState('')
  const [defesa_especial, setDefesa_especial] = useState('')
  const [velocidade, setVelocidade] = useState('')
  const [imagem, setImagem] = useState('')
  const [busca, setBusca] = useState('')

  const urlpokemon: string = "http://localhost:5000/pokemon"

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

  const buscaPokemon = async () => {
    const pokeBusca = encodeURIComponent(busca);
    const url = `${urlpokemon}/nome/${pokeBusca}`;

    try {
      const response = await fetch(url, {
        method: "GET"
      })
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Nenhum Pokémon encontrado`)
        }
        throw new Error(`Erro no servidor: ${response.status}`);
      }
      const results = await response.json();
      setlistapokemon(results)
      console.log(results)

    } catch (error) {
      console.error((error as Error).message)
    }

  }

  useEffect(() => {
    if(!busca) {
      fetchPokemon()
    } 
  }, [])

  const postPokemon = async () => {

    const req = JSON.stringify({
      "nome": nome,
      "tipo": tipo,
      "nivel": nivel,
      "hp": hp,
      "ataque": ataque,
      "defesa": defesa,
      "ataque_especial": ataque_especial,
      "defesa_especial": defesa_especial,
      "velocidade": velocidade,
      "imagem": imagem
    })

    try {
      const response = await fetch(urlpokemon, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: req
      })

      console.log(req)
      console.log(response)
    } catch (error) {
      console.error((error as Error).message)
    } finally {
      fetchPokemon()
    }
  }



  return (
    <>

      <div>
        <div>
          <label>Nome</label>
          <input type='text' placeholder='Piplup' value={nome} onChange={(e) => setNome(e.target.value)} />
          <label>Tipo</label>
          <input type='text' placeholder='Água' value={tipo} onChange={(e) => setTipo(e.target.value)} />
          <label>Nível</label>
          <input type='number' min={1} max={100} value={nivel} onChange={(e) => setNivel(e.target.value)} />
        </div>

        <div>
          <label>HP</label>
          <input type='number' min={1} max={255} value={hp} onChange={(e) => setHp(e.target.value)} />
          <label>Ataque</label>
          <input type='number' min={1} max={255} value={ataque} onChange={(e) => setAtaque(e.target.value)} />
          <label>Defesa</label>
          <input type='number' min={1} max={255} value={defesa} onChange={(e) => setDefesa(e.target.value)} />
        </div>

        <div>
          <label>Ataque Especial</label>
          <input type='number' min={1} max={255} value={ataque_especial} onChange={(e) => setAtaque_especial(e.target.value)} />
          <label>Defesa Especial</label>
          <input type='number' min={1} max={255} value={defesa_especial} onChange={(e) => setDefesa_especial(e.target.value)} />
          <label>Velocidade</label>
          <input type='number' min={1} max={255} value={velocidade} onChange={(e) => setVelocidade(e.target.value)} />
        </div>

        <div>
          <label>Imagem</label>
          <input type='text' value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>

        <button onClick={() => { postPokemon() }}>
          Adiciona ai
        </button>
      </div>

      <div>
        <input type="text" onChange={(e) => {
          setBusca(e.target.value);
          buscaPokemon();
        }} />
      </div>

      <div style={{gap: "20px", margin: '30px'}}>
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

