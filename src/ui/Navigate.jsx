import { usePicture } from "../context/PictureContext";
import Button from "./Button";
import Reset from "./Reset";

function Navigate() {
  const { gameStarted, moves, dispatch } = usePicture();
  return (
    <>
      <div className="main__header">
        {gameStarted && (<div className="turns">Ход {moves}</div>)}

        {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
      </div>


      {/*{gameStarted && (*/}
      {/*  <Button onClick={() => dispatch({ type: "showHistory" })}>*/}
      {/*    Показать историю партии*/}
      {/*  </Button>*/}
      {/*)}*/}
    </>
  );
}

export default Navigate;
