import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 14vw;

  @media (width <= 950px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Image = styled.figure`
  max-width: 598px;
  max-height: 912px;
  width: 100%;

  > img {
    max-width: 598px;
    max-height: 912px;
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

export const Login = styled.div`
  h1 {
    font-size: 2.4rem;
  }

  p {
    color: ${(props) => props.theme["gray-200"]};
    font-size: 1.6rem;
  }
`;
