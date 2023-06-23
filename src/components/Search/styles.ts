import styled from 'styled-components';
import { FiSearch, FiX } from 'react-icons/fi';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const IconSearch = styled(FiSearch)`
  position: absolute;
  top: 12px;
  left: 12px;
  color: rgb(38, 38, 38);
`;

export const IconClear = styled(FiX)`
  position: absolute;
  top: 12px;
  right: 12px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: rgb(38, 38, 38);

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 24px 50px;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  color: rgb(38, 38, 38);
  background: #fff;
  height: 48px;
  border-radius: 8px;
  font-weight: 700;

  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }
`;
