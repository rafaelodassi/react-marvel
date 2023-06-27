import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

interface SkeletonProps {
  width?: string;
  heigth?: string;
}

export const Container = styled.div<SkeletonProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ heigth }) => heigth || 'auto'};
`;

export const Skeleton = styled(ContentLoader)``;
