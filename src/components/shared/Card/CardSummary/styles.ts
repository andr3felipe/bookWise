import styled from "styled-components";
import { CardSummaryProps } from ".";

type ContainerProps = Pick<CardSummaryProps, "padding">;
type TextProps = Pick<CardSummaryProps, "size">;

export const Container = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding};
  width: 100%;
`;

export const Text = styled.p<TextProps>`
  font-size: 1.4rem;
  color: ${(props) => props.theme["gray-300"]};
  width: 100%;
  height: 100%;
`;
