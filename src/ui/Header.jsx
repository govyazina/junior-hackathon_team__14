import { usePicture } from "../context/PictureContext";
import Reset from "./Reset";

function Header() {
  const { gameStarted, moves, dispatch } = usePicture();
  return (
    <header className="header">
      <div>Заголовок</div>
      {gameStarted && moves}
      {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
    </header>
  );
}

export default Header;
