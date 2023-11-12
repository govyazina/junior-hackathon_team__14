import { usePicture } from "../context/PictureContext";
import Reset from "../ui/Reset";
import Button from "../ui/Button.jsx";

function Victory() {
  const { dispatch } = usePicture();
  return (
        <div className="finish__wrapper">
            <h2>Ура! Ты открыл все карточки!</h2>
            <Button
                onClick={() => dispatch({ type: "reset" })}
                children={'Попробовать ещё'}
            />
        </div>

  );
}

export default Victory;
