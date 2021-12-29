import { useState, useEffect, useRef } from "react";

export default function useWordGame(STARTING_TIME = 20 ) {
  const [typeText, setTypeText] = useState("");
  const [countdown, setCountdown] = useState(STARTING_TIME);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState();
  const textboxRef = useRef(null);

  const handleChange = (e) => {
    setTypeText(e.target.value);
  };

  const countWords = () => {
    const wordCount = typeText.trim().split(" ");
    const filteredWords = wordCount.filter((word) => word !== "").length;
    return filteredWords;
  };

  const startGame = () => {
    setStart(true);
    setCountdown(STARTING_TIME);
    setTypeText("");
    textboxRef.current.disabled = false;
    textboxRef.current.focus();
  };

  const endGame = () => {
    setStart(false);
    setWordCount(countWords());
  };

  useEffect(() => {
    if (countdown > 0 && start) {
      setTimeout(() => {
        setCountdown((prevState) => prevState - 1);
      }, 1000);
    } else if (countdown === 0) {
      endGame();
    }
  }, [countdown, start]);

  return [
    typeText,
    textboxRef,
    handleChange,
    start,
    countdown,
    startGame,
    wordCount,
  ];
}
