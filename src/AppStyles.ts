import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  font-family:
`;

export const FormCard = styled.div`
  background-color: #cba3ff;
  border: 3px solid #636262;
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: rgb(133, 172, 231);
    box-shadow: 0 0 5px rgba(133, 172, 231, 0.5);
  }
`;

export const Button = styled.button`
  background-color: rgb(133, 172, 231);
  color: #111;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid #636262;
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: transform 0.1s, background-color 0.2s;

  &:hover {
    background-color: #6a95d6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 30px;
  background-color: #cba3ff;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid #ccc;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;