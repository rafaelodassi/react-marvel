import styled from 'styled-components';
import Image from 'next/image';

import { MEDIAS_QUERY } from '../constants';

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

  ${MEDIAS_QUERY.maxMdMin} {
    padding: 30px 30px 0px 30px;
  }
`;

export const ContainerError = styled.div`
  width: 100%;
  padding: 0 100px;
  font-weight: 700;

  ${MEDIAS_QUERY.maxMdMin} {
    padding: 0 30px;
  }
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

  ${MEDIAS_QUERY.maxMdMin} {
    margin-top: 0;
    height: 60px;
    gap: 5px;
    padding: 0 30px;
    flex-direction: column;
    justify-content: center;
  }
`;
