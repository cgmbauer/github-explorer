import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;

  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;

  max-width: 700px;

  display: flex;

  input {
  flex: 1;

  height: 70px;

  padding: 0 24px;

  border: 0;
  border-radius: 5px 0 0 5px;
  }

  button {
    width: 210px;
    height: 70px;

    background: #04D361;

    border-radius: 0px 5px 5px 0px;
    border:0;

    color: #FFF;
    font-weight: bold;
    /* o &:hovver, que está dentro do "button" significa que o próprio button sofrerá o hover */
    &:hover{
      /* yarn add polished: permite trabalhar com cores */
      background: ${shade(0.2, '#04d361')}
    }
  }

}

`;
