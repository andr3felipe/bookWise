import { useEffect, useState } from "react";
import * as S from "./styles";

export type CardSummaryProps = {
  text: string;
  size?: "small" | "medium" | "large";
  padding?: string;
};

export const CardSummary = ({
  text,
  size = "large",
  padding,
}: CardSummaryProps) => {
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
      ? text.slice(0, windowSize.width / (7 + (size !== "large" ? 6 : 0)))
          .length
      : text.slice(0, windowSize.width / (9 + (size !== "large" ? 5 : 0)))
          .length;

  const calc =
    windowSize.width <= 600
      ? windowSize.width / (7 + (size !== "large" ? 6 : 0))
      : windowSize.width / (9 + (size !== "large" ? 5 : 0));

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Container padding={padding}>
      <S.Text size={size}>
        {text.slice(0, calc).padEnd(textLength + 3, "...")}
      </S.Text>
    </S.Container>
  );
};
