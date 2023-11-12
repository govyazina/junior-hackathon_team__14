import { usePicture } from "../context/PictureContext";
import Button from "./Button";
import Reset from "./Reset";
import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

function Navigate() {
  const { gameStarted, dispatch, moves, isGameOver, isShowHistory } =
    usePicture();
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  useEffect(() => {
    dispatch({ type: "time", payload: t() });
  }, [totalSeconds]);

  useEffect(() => {
    if (gameStarted) {
      start();
    } else {
      pause();
    }
  }, [gameStarted]);

  const t = () => {
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    return `${h}:${m}:${s}`;
  };

  return (
    <>
      <div className="main__header">
        {gameStarted && <div className="turns">Ход {moves}</div>}
        {gameStarted && !isShowHistory && <div className="turns">{t()}</div>}
        {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
      </div>
      {isShowHistory && (
        <Button
          onClick={() => dispatch({ type: "showHistory" })}
          className="nextBtn"
        >
          {/* Следующий ход */}
        </Button>
      )}
    </>
  );
}

export default Navigate;
