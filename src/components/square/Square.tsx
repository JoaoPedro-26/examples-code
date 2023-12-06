import React from 'react';
import { StyledSquare } from './styles';

interface SquareProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Square: React.FC<SquareProps> = ({ children, style }) => (
  <StyledSquare style={style}>{children}</StyledSquare>
);

export default Square;
