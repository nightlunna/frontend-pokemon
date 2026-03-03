import * as S from "./CardStyles";

export interface Pokemon { 
  imagem: string;
  nome: string;
  tipo: string;
  nivel: number;
  hp: number;
  ataque: number;
  defesa: number;
  ataque_especial: number;
  defesa_especial: number;
  velocidade: number;
  identificador: string;
  onDelete?: (id: string) => void;
}

function Card(props: Pokemon) {
  const statusmaximo: number = 255;

  function Mapnumber(value: number, max: number) {
    const percentual = (value / max) * 100;
    return `${percentual}%`;
  }

  return (
    <S.card>
      <img src={props.imagem} alt={props.nome} width="auto" height="250" />

      <S.info>
        <h1>{props.nome}</h1>
        <S.tipoContainer>
          <h3 style={{ margin: 0 }}> {props.tipo} </h3>
        </S.tipoContainer>
      </S.info>

      <S.statusContainer>
        <h2> Status do Pokémon </h2>

        <S.habilidades>
          <S.habilidade>
            <h1>{props.nivel}</h1>
            <h3>nível</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.hp, statusmaximo)} />
            <h3>hp</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.ataque, statusmaximo)} />
            <h3>ataque</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.defesa, statusmaximo)} />
            <h3>defesa</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.ataque_especial, statusmaximo)} />
            <h3>atq sp.</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.defesa_especial, statusmaximo)} />
            <h3>def sp.</h3>
          </S.habilidade>

          <S.habilidade>
            <S.barrinha altura={Mapnumber(props.velocidade, statusmaximo)} />
            <h3>velocidade</h3>
          </S.habilidade>
        </S.habilidades>
      </S.statusContainer>
    </S.card>
  );
}

export default Card;