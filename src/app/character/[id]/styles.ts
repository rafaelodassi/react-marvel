import styled from 'styled-components';

export const Container = styled.div``;

export const Info = styled.div``;

export const Banner = styled.div`
  width: 100%;
  height: 620px;
`;

export const Img = styled.div`
  background-image: url('http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;

  &:before {
    background: linear-gradient(
        77.88deg,
        rgba(0, 0, 0, 0.8) 10.68%,
        transparent 50.01%
      ),
      linear-gradient(180deg, transparent 25.78%, #1f1f1f);
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: backdrop-filter 0.5s ease-in-out;
  }
`;

export const Tab = styled.div`
  height: 76px;
`;

export const Details = styled.div``;
