import styled from "styled-components";
import { CardImageProps } from ".";

type ContainerProps = Pick<CardImageProps, "size">;

const ENUM = {
  width: {
    small: "64px",
    medium: "98px",
    large: "108px",
  },
  height: {
    small: "94px",
    medium: "134px",
    large: "152px",
  },
};

export const Container = styled.figure<ContainerProps>`
  max-width: ${({ size }) => ENUM.width[size]};
  max-height: ${({ size }) => ENUM.height[size]};
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  > img {
    object-fit: fill;
    max-width: ${({ size }) => ENUM.width[size]};
    max-height: ${({ size }) => ENUM.height[size]};
    border-radius: 4px;
  }
`;
