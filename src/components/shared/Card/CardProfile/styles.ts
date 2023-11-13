import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 16px;
`;
export const Image = styled.img``;
export const Name = styled.p`
  font-size: 1.6rem;
`;
export const Date = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme["gray-400"]};
`;
export const Align = styled.div``;
