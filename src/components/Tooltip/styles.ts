import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background-color: #ff9000;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: opacity 0.4s;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    opacity: 0;
    visibility: hidden;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
