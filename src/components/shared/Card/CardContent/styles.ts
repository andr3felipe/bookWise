import styled from "styled-components";
import { CardContentProps } from ".";

type ContainerProps = Pick<CardContentProps, "justifyContent">;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: column;

  gap: 20px;
  height: 100%;
  max-height: 152px;
  width: 100%;
`;
