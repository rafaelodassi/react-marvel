import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  gap: 40px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 440px;
  padding: 0 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(31, 31, 31, 0) 35%, #1f1f1f),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 5%, transparent 20%),
    linear-gradient(270deg, transparent 30%, #000 80%), url('/img/bg3.jpg');
  background-size: cover;
  background-position: center center;
`;

export const ContainerError = styled.div`
  width: 100%;
  padding: 0 100px;
  font-weight: 700;
`;

export const Logo = styled(Image)``;

export const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const Description = styled.div`
  font-weight: 400;
`;

export const Footer = styled.footer`
  background: #000;
  height: 40px;
  margin-top: 20px;
  color: rgb(170, 170, 170);
  font-size: 12px;
  font-weight: 400;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: rgb(170, 170, 170);

    &:hover {
      text-decoration: underline;
    }
  }
`;
