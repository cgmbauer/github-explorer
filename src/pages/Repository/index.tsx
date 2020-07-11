import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/62662494?s=400&u=e877d46764c4faf49557e4cb6cf1801ebf39d0dd&v=4"
            alt="Guilherme Bauer"
          />
          <div>
            <strong>cgmbauer/charityinder</strong>
            <p>descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong> 1808 </strong>
            <span> Stars </span>
          </li>

          <li>
            <strong> 48 </strong>
            <span> Forks </span>
          </li>

          <li>
            <strong> 67 </strong>
            <span> Issues Abertas </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asda">
          <div>
            <strong>cgmbauer/charityinder</strong>
            <p>descrição do repo</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
