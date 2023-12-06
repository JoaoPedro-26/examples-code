import React from 'react';
import Square from '../square/Square';

interface PaginatedListProps {
  data: string[];
  currentPage: number;
}

const PaginatedList: React.FC<PaginatedListProps> = ({ data, currentPage }) => {
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {visibleData.map((item, index) => (
        <Square key={index}>{item}</Square>
      ))}
    </div>
  );
};

export default PaginatedList;

//já nesse segundo exemplo seria paginação, que renderizaria apenas uma parte dos dados de cada vez, reduzindo a carga inicial e melhorando a responsividade