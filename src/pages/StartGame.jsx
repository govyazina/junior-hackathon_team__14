import { usePicture } from "../context/PictureContext";
import Button from "../ui/Button";

function StartGame() {
  const { dispatch } = usePicture();
  return (
    <Button
      className="startBtn"
      onClick={() => dispatch({ type: "startGame" })}
      children={"Начать игру"}
    />
  );
}

export default StartGame;
