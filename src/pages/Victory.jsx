import { usePicture } from "../context/PictureContext";
import Button from "../ui/Button";

function Victory() {
  const { dispatch, time, moves } = usePicture();
  return (
    <body>
      <main>
        <div class="wrapper">
          <div class="finish__wrapper">
            <h2>Ура! Ты открыл все карточки!</h2>
            <p>время игры — {time}</p>
            <p>количество ходов — {moves}</p>
            <Button
              onClick={() => dispatch({ type: "reset" })}
              className="startBtn"
            >
              Попробовать ещё
            </Button>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Victory;
