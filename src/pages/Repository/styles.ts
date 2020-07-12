import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    color: #a8a8b3;
    transition: color 0.3s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        margin-top: 25px;
        margin-left: 0;
        text-align: center;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;

        font-size: 36px;
        color: #3d3d4d;
        text-align: center;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        text-align: center;
      }

      @media (max-width: 450px) {
        & + li {
          margin-left: 50px;
        }

        strong {
          font-size: 25px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  @media (max-width: 450px) {
    margin-top: 50px;
  }

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
`;
