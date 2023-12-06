import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/list/List';
import PaginatedList from './components/paginated/PaginatedList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const App: React.FC = () => {
  const [data] = useState([...Array(100).keys()].map(i => `Item ${i + 1}`));
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <AppContainer>

      <List data={data} />

      <hr />

      <PaginatedList data={data} currentPage={currentPage} />

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / 10)}
        >
          Next Page
        </button>
      </div>
    </AppContainer>
  );
};

export default App;

//já aqui e nos styles.ts, optei pelo uso do styledComponents, pois ele possui 3 pontos muito fortes na minha opinião, que seria encapsulação de estilos, facilidade de manutenção e estilos dinâmicos e temas