import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 16px;
`;
export const Image = styled.img`
  position: relative;
  border: double 2px transparent;
  border-radius: 999px;
  background-image: linear-gradient(#7fd1cc, #9694f5),
    radial-gradient(circle at top left, #7fd1cc, #9694f5);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
export const Name = styled.p`
  font-size: 1.6rem;
`;
export const Date = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme["gray-400"]};
`;
export const Align = styled.div``;
