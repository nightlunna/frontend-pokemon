import styles from "./styles.module.css"
 

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
  identificador: number;
  onDelete: () => void;
}

function Card({ imagem, nome, tipo, nivel, hp, ataque, defesa, ataque_especial, defesa_especial, velocidade, identificador, onDelete }: Pokemon) {

  const statusmaximo: number = 255

  function Mapnumber(value: number, max: number) {
    const percentual = (value / max) * 100
    return `${percentual}px`
  }

  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} width="auto" height="250" />

      <div className={styles.info}>
        <h1>{nome}</h1>
        <div className={styles.tipoContainer}>
          <h3 className={styles.tipo}> {tipo} </h3>
        </div>
      </div>

      <div className={styles.statusContainer}>
        <h2> Status do Pokémon </h2>

        <div className={styles.habilidades}>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(nivel, 100) }}></div>
            <h3>nível</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(hp, statusmaximo) }}></div>
            <h3>hp</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(ataque, statusmaximo) }}></div>
            <h3>ataque</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(defesa, statusmaximo) }}></div>
            <h3>defesa</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(ataque_especial, statusmaximo) }}></div>
            <h3>ataque sp.</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(defesa_especial, statusmaximo) }}></div>
            <h3>defesa sp.</h3>
          </div>
          <div className={styles.habilidade}>
            <div style={{ backgroundColor: "blueviolet", width: "65%", height: Mapnumber(velocidade, statusmaximo) }}></div>
            <h3>velocidade</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card;