import { usePicture } from "../context/PictureContext";
import Button from "./Button";
import Reset from "./Reset";

function Navigate() {
  const { gameStarted, moves, dispatch } = usePicture();
  return (
    <header className="header">
      <div>Заголовок</div>
      {gameStarted && moves}
      {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
      {gameStarted && (
        <Button onClick={() => dispatch({ type: "showHistory" })}>
          Показать историю партии
        </Button>
      )}
    </header>
  );
}

export default Navigate;
