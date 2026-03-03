import styled from 'styled-components';

export const card = styled.div`
  border: 3px solid #636262;
  border-radius: 40px;
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  align-items: center;
`;

export const info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  min-width: 150px;
`;

export const tipoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(133, 172, 231);
  border-radius: 30px;
  height: 40px;
`;

export const statusContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const habilidades = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  height: 255px;
`;

export const habilidade = styled.div`
  height: 100%;
  width: 100px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const barrinha = styled.div<{ altura: string }>`
  background-color: blueviolet;
  width: 65%;
  height: ${props => props.altura};
  transition: height 0.3s ease;
`;