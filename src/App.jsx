import { useReducer } from "react";
import "./App.css";
import Header from "./ui/Header";
import StartGame from "./pages/StartGame";
import GamingField from "./pages/GamingField";
import templData from "./randomizationPictures/randomizationPictures";

const initialState = {
  gameStarted: false, //начата ли игра
  pictureLayout: templData, //будет массив с объектами картинок
  pictureLayoutOpen: [], //будет массив номеров открытых карточек
  pictureOpen: 0, //счетчик количества открытых картинок
  numberPictureOpen: [], //индексы открытых картинок для смены класса
  moves: 0, //счетчик ходов
  historyGame: [],
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
    case "picturesMatched": {
      return {
        ...state,
        pictureLayoutOpen: [...state.pictureLayoutOpen, ...action.payload],
        historyGame: [...state.historyGame, ...action.payload],
      };
    }
    case "picturesDidntMatch": {
      return {
        ...state,
        pictureOpen: 0,
      };
    }
    // case "pictureClose": {
    //   return;
    // }
    case "move": {
      return {
        ...state,
        pictureOpen: 0,
        numberPictureOpen: [],
        moves: state.moves + 1,
      };
    }
    case "victory": {
      return;
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
