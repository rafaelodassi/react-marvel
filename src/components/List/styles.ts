import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 100px;

  .masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .masonry-grid-column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    margin-bottom: 30px;
  }
`;

export const Card = styled.div<{ type: 'characters' | 'comics' }>`
  position: relative;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  ${({ type }) =>
    type === 'characters' &&
    css`
      cursor: pointer;

      &:after {
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 4px solid #fff;
        border-radius: 12px;
        opacity: 0;
        box-sizing: border-box;
      }

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    `}
`;

export const Thumbnail = styled.div<{ thumbnail: string }>`
  width: 100%;
  background: url(${({ thumbnail }) => thumbnail});
  background-size: cover;
  height: 260px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const Name = styled.span`
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: #262626;
  color: #fff;
  padding: 12px 20px;
  width: 100%;
`;
