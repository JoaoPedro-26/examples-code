import React from 'react';
import { FixedSizeList } from 'react-window';
import Square from '../square/Square';
import { StyledLargeListContainer } from './styles';

interface ListProps {
  data: string[];
}

const LargeList: React.FC<ListProps> = ({ data }) => (
  <StyledLargeListContainer>
    <FixedSizeList height={400} width="100%" itemSize={70} itemCount={data.length}>
      {({ index, style }) => (
        <Square key={index} style={style}>
          {data[index]}
        </Square>
      )}
    </FixedSizeList>
  </StyledLargeListContainer>
);

export default LargeList;

//Neste exemplo utizei a virtualização, seria uma biblioteca como react-virtualized ou react-window que renderizaria apenas os itens visiveis da tela, reduzindo a carga de trabalho no dom