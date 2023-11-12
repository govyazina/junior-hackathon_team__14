import { usePicture } from "../context/PictureContext";

function StartGame() {
  const { dispatch } = usePicture();
  return (
    <div>
      <button onClick={() => dispatch({ type: "startGame" })}>
        Начало игры
      </button>
    </div>
  );
}

export default StartGame;
