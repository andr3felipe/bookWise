import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 555px;
  max-width: 308px;
  background-color: ${(props) => props.theme["gray-800"]};

  padding: 0px 56px 20px;
`;

export const CloseButtonContainer = styled.div`
  max-width: 308px;
  width: 100%;
  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-top-left-radius: 4px;
`;

export const ProfileHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Figure = styled.figure`
  padding-bottom: 20px;
`;

export const Image = styled.img`
  position: relative;
  border: double 2px transparent;
  border-radius: 999px;
  background-image: linear-gradient(#7fd1cc, #9694f5),
    radial-gradient(circle at top left, #7fd1cc, #9694f5);
  background-origin: border-box;
  background-clip: content-box, border-box;
  max-width: 72px;
  max-height: 72px;
`;

export const Name = styled.h3`
  color: ${(props) => props.theme["gray-100"]};
  font-size: 2rem;
`;

export const MemberSince = styled.span`
  color: ${(props) => props.theme["gray-400"]};
  font-size: 1.4rem;
`;

export const Divisor = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(#7fd1cc, #9694f5),
    radial-gradient(circle at top left, #7fd1cc, #9694f5);

  margin: 40px 0px 32px;
`;

export const BooksStatusContainer = styled.div`
  max-width: 308px;
  width: 100%;
  max-height: 337px;
  height: 100%;
`;
