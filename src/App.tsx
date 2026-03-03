import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import type { Pokemon } from './components/Card/Card'
import * as S from './AppStyles';


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

  const urlpokemon: string = "https://qpz7gdhf-5173.brs.devtunnels.ms/pokemon"

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
    <S.Container>
      <S.FormCard>
        <h2 style={{ marginTop: 0, color: '#333' }}>Cadastrar Novo Pokémon</h2>
        
        {/* Linha 1: Nome, Tipo e Nível */}
        <S.Row>
          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <S.Input type='text' placeholder='Ex: Piplup' value={nome} onChange={(e) => setNome(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Tipo</S.Label>
            <S.Input type='text' placeholder='Ex: Água' value={tipo} onChange={(e) => setTipo(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Nível</S.Label>
            <S.Input type='number' min={1} max={100} placeholder='1-100' value={nivel} onChange={(e) => setNivel(e.target.value)} />
          </S.InputGroup>
        </S.Row>

        {/* Linha 2: Status Básicos */}
        <S.Row>
          <S.InputGroup>
            <S.Label>HP</S.Label>
            <S.Input type='number' min={1} max={255} value={hp} onChange={(e) => setHp(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Ataque</S.Label>
            <S.Input type='number' min={1} max={255} value={ataque} onChange={(e) => setAtaque(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Defesa</S.Label>
            <S.Input type='number' min={1} max={255} value={defesa} onChange={(e) => setDefesa(e.target.value)} />
          </S.InputGroup>
        </S.Row>

        {/* Linha 3: Status Especiais */}
        <S.Row>
          <S.InputGroup>
            <S.Label>Ataque Especial</S.Label>
            <S.Input type='number' min={1} max={255} value={ataque_especial} onChange={(e) => setAtaque_especial(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Defesa Especial</S.Label>
            <S.Input type='number' min={1} max={255} value={defesa_especial} onChange={(e) => setDefesa_especial(e.target.value)} />
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Velocidade</S.Label>
            <S.Input type='number' min={1} max={255} value={velocidade} onChange={(e) => setVelocidade(e.target.value)} />
          </S.InputGroup>
        </S.Row>

        {/* Linha 4: Imagem */}
        <S.Row>
          <S.InputGroup>
            <S.Label>URL da Imagem</S.Label>
            <S.Input type='text' placeholder='https://...' value={imagem} onChange={(e) => setImagem(e.target.value)} />
          </S.InputGroup>
        </S.Row>

        <S.Button onClick={() => { postPokemon() }}>
          Adicionar Pokémon
        </S.Button>
      </S.FormCard>

      {/* Barra de Busca */}
      <S.SearchContainer>
        <S.Label style={{ fontSize: '1.1rem' }}>Pesquisar na Pokédex</S.Label>
        <S.Input 
          type="text" 
          placeholder="Digite o nome do Pokémon..." 
          style={{ width: '100%', boxSizing: 'border-box', marginTop: '10px' }}
          onChange={(e) => {
            setBusca(e.target.value);
          }} 
        />
      </S.SearchContainer>

      {/* Lista de Cards */}
      <S.CardList>
        {listapokemon.map(pokemon => (
          <Card
            key={pokemon.identificador}
            {...pokemon} 
            onDelete={() => { }}
          />
        ))}
      </S.CardList>
    </S.Container>
  );
}

export default App
