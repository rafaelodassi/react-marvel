import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  gap: 60px;
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
