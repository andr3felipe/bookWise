import styled from "styled-components";
import { CardImageProps } from ".";

type ContainerProps = Pick<CardImageProps, "size">;

export const Container = styled.figure<ContainerProps>`
  max-width: ${({ size }) => (size === "large" ? "108px" : "64px")};
  max-height: ${({ size }) => (size === "large" ? "152px" : "94px")};
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  > img {
    object-fit: fill;
    max-width: ${({ size }) => (size === "large" ? "108px" : "64px")};
    max-height: ${({ size }) => (size === "large" ? "152px" : "94px")};
    border-radius: 4px;
  }
`;
