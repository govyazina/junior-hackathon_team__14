import { usePicture } from "../context/PictureContext";
import Reset from "../ui/Reset";

function Victory() {
  const { dispatch } = usePicture();
  return (
    <div>
      <p>Начать сначала</p>
      <Reset onClick={() => dispatch({ type: "reset" })} />
    </div>
  );
}

export default Victory;
