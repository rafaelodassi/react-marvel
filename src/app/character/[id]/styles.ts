import styled from 'styled-components';
import Image from 'next/image';
import { FiArrowLeft, FiBook } from 'react-icons/fi';

import { MEDIAS_QUERY } from '../../../constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  gap: 40px;
`;

export const ContainerInfo = styled.div<{ thumbnail: string }>`
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
    linear-gradient(270deg, transparent 30%, #000 80%),
    url(${({ thumbnail }) => thumbnail});
  background-size: cover;
  background-position: center center;

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

export const ContainerButton = styled.div`
  margin-top: 10px;
`;

export const ButtonBack = styled.button`
  border: 0;
  padding: 0px 50px;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  color: rgb(38, 38, 38);
  background: #fff;
  height: 48px;
  border-radius: 8px;
  font-weight: 700;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  ${MEDIAS_QUERY.maxMdMin} {
    width: 100%;
  }
`;

export const IconBack = styled(FiArrowLeft)`
  color: rgb(38, 38, 38);
`;

export const TitleComics = styled.div`
  width: 100%;
  padding: 0 100px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;

  ${MEDIAS_QUERY.maxMdMin} {
    padding: 0 30px;
  }
`;

export const IconComics = styled(FiBook)`
  color: #fff;
  flex-shrink: 0;
`;

export const ContainerError = styled.div`
  width: 100%;
  padding: 0 100px;
  font-weight: 700;
`;
