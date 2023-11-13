import styled from "styled-components";
import { Star as star, StarHalf as starHalf } from "@phosphor-icons/react";

export const Container = styled.div``;
export const Star = styled(star)`
  color: ${(props) => props.theme["purple-100"]};
`;
export const StarHalf = styled(starHalf)`
  color: ${(props) => props.theme["purple-100"]};
`;
