import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  padding: 20px 28px;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormPair = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const LabelStyled = styled.label`
  padding: 2px 5px;
`;

export const InputStyled = styled.input`
  width: 180px;
  padding: 2px 5px;
  border-radius: 5px;
`

export const ButtonStyled = styled.button`
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
`;