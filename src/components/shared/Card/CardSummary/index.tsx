import { useEffect, useState } from "react";
import * as S from "./styles";

type CardSummaryProps = {
  text: string;
};

export const CardSummary = ({ text }: CardSummaryProps) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const textLength =
    windowSize.width <= 600
      ? text.slice(0, windowSize.width / 5).length
      : text.slice(0, windowSize.width / 8).length;

  const calc =
    windowSize.width <= 600 ? windowSize.width / 5 : windowSize.width / 8;

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Container>
      <S.Text>{text.slice(0, calc).padEnd(textLength + 3, "...")}</S.Text>
    </S.Container>
  );
};
