import {usePicture} from "../context/PictureContext";
import Button from "../ui/Button";

function StartGame() {
    const {dispatch} = usePicture();
    return (
        <>
            <Button
                className="startBtn"
                onClick={() => dispatch({type: "startGame"})}
                children={"Начать игру"}
            />
            <h2>Открывай по очереди карточки,
                запоминай какие зверюшки там появляются
                и найди всех повторяющихся
            </h2>
        </>
    );
}

export default StartGame;
