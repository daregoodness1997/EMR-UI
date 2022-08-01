import styled from 'styled-components';

export const InputField = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4rem 1rem;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1.5px solid #eee;
  width: 100%;

  &:focus {
    border: 2px solid #0364ff;
  }

  &:focus + label {
    top: -0.5rem;
    left: 0.8rem;
    color: #0364ff;
    font-weight: 500;
    z-index: 10;
  }
  &:not(placeholder-shown).&:not(:focus) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }
`;

export const InputBox = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  margin: 0.75rem 0;
  text-align: left;

  & i {
    position: absolute;
    right: 0.1rem;
    top: 0.6rem;
    font-size: 22px;
    padding: 0.25rem;
    transition: 0.4s;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  transition: 0.4s;
`;
