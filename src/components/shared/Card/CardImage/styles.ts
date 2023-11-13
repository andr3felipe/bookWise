import styled from "styled-components";

export const Container = styled.figure`
  max-width: 108px;
  max-height: 152px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  > img {
    object-fit: contain;
    border-radius: 4px;
  }
`;
