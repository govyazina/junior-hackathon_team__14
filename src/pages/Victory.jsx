import { usePicture } from "../context/PictureContext";
import Button from "../ui/Button";

function Victory() {
  const { dispatch, isShowHistory, time, moves } = usePicture();
  return (
    <main>
      <div className="wrapper">
        <div className="finish__wrapper">
          <h2>Ура! У тебя получилось открыть все карточки</h2>
          <p>время игры — {time}</p>
          <p>количество ходов — {moves}</p>
          <Button
            onClick={() => dispatch({ type: "reset" })}
            className="startBtn"
          >
            Попробовать ещё
          </Button>
          <Button
            onClick={() => dispatch({ type: "showHistory" })}
            className="startBtn"
          >
            {!isShowHistory ? "Показать историю партии" : "Следующий ход"}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Victory;
