import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 100%;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
`;

export const Contact = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonStyled = styled.button`
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
`;