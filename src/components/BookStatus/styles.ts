import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 40px;

  svg {
    color: ${(props) => props.theme["green-100"]};
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const Data = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${(props) => props.theme["gray-200"]};
`;

export const Description = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme["gray-300"]};
`;
