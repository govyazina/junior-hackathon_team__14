import { usePicture } from "../context/PictureContext";
import Button from "../ui/Button.jsx";

function StartGame() {
  const { dispatch } = usePicture();
  return (
      <Button
          onClick={() => dispatch({ type: "startGame" })}
          children={'Начать игру'}
          />
  );
}

export default StartGame;
