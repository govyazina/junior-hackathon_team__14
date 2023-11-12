import { usePicture } from "../context/PictureContext";

function StartGame() {
  const { dispatch } = usePicture();
  return (
        <button
            onClick={() => dispatch({ type: "startGame" })}
            className="startBtn">
            Начать игру
        </button>
  );
}

export default StartGame;
