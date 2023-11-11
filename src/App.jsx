import { useReducer } from "react";
import "./App.css";
import Header from "./ui/Header";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/gamingField";
const templData = [
  { id: 1, position: 0, img: "../../public/images/003-flamingo.svg" },
  { id: 2, position: 1, img: "../../public/images/016-panda bear.svg" },
  { id: 1, position: 2, img: "../../public/images/003-flamingo.svg" },
];

const initialState = {
  gameStarted: false, //начата ли игра
  pictureLayout: templData, //будет массив с объектами картинок
  pictureLayoutOpen: [], //будет номеров открытых карточек
  pictureOpen: 0, //счетчик количества открытых картинок
  numberPictureOpen: [], //индексы открытых картинок для смены класса
  moves: 0, //счетчик ходов
};
function reducer(state, action) {
  switch (action.type) {
    case "startGame": {
      return { ...state, gameStarted: true };
    }
    case "pictureOpen": {
      if (state.pictureOpen > 2) return state;
      return {
        ...state,
        pictureOpen: state.pictureOpen++,
        numberPictureOpen: [...state.numberPictureOpen, action.payload],
      };
    }
    case "pictureClose": {
      return;
    }
    case "move": {
      return { ...state, moves: state.moves++ };
    }
    case "reset": {
      return { ...initialState, gameStarted: true };
    }

    default:
      throw new Error("Неизвестный тип");
  }
}

function App() {
  const [{ gameStarted, pictureLayout, moves, numberPictureOpen }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <>
      <Header gameStarted={gameStarted} moves={moves} dispatch={dispatch} />
      {!gameStarted && <StartGame dispatch={dispatch} />}
      {gameStarted && (
        <GamingField
          pictureLayout={pictureLayout}
          dispatch={dispatch}
          numberPictureOpen={numberPictureOpen}
        />
      )}
    </>
  );
}

export default App;
