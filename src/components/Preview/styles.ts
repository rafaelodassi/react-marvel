import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  height: 540px;
  width: 100%;
  background: linear-gradient(180deg, rgba(31, 31, 31, 0) 35%, #1f1f1f),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 5%, transparent 20%),
    linear-gradient(270deg, transparent 30%, #000 80%), url('/img/bg4.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: flex-end;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  padding: 0 100px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
`;

export const Logo = styled(Image)``;

export const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const Description = styled.div`
  font-weight: 400;
`;
