import { usePicture } from "../context/PictureContext";
import Button from "./Button";
import Reset from "./Reset";

function Navigate() {
  const { gameStarted, dispatch, moves, isShowHistory } = usePicture();
  return (
    <>
      <div className="main__header">
        {gameStarted && <div className="turns">Ход {moves}</div>}
        {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
      </div>
      {isShowHistory && (
        <Button
          onClick={() => dispatch({ type: "showHistory" })}
          className="startBtn"
        >
          Следующий ход
        </Button>
      )}
    </>
  );
}

export default Navigate;
