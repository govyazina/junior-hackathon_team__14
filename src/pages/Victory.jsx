import { usePicture } from "../context/PictureContext";
import Reset from "../ui/Reset";

function Victory() {
  const { dispatch } = usePicture();
  return (
        <div className="finish__wrapper">
            <h2>Ура! Ты открыл все карточки!</h2>
            <Reset onClick={() => dispatch({ type: "reset" })} />
            <button className="startBtn">Попробовать ещё</button>
        </div>

  );
}

export default Victory;
