import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;

  max-width: 450px;

  margin-top: 80px;

  @media (max-width: 470px) {
    max-width: 300px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;

  max-width: 700px;

  display: flex;

  @media (max-width: 425px) {
      min-width: 100%;
    }

  input {
    flex: 1;

    height: 70px;

    padding: 0 24px;

    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;

    color: #3a3a3a;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background: #04d361;

    border-radius: 0px 5px 5px 0px;
    border: 0;

    color: #fff;
    font-weight: bold;

    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  }

  @media (max-width: 659px) {
    button {
      max-width: 110px;
      min-width: 85px;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  max-width: 700px;

  a {
    background: #fff;

    border-radius: 5px;

    width: 100%;
    padding: 24px;

    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  @media (max-width: 425px) {
    min-width: 380px;

    div {
      margin: 0 15px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
