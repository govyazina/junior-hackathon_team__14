import { createContext, useContext, useReducer } from "react";
import { randomArrPicture } from "../randomizationPictures/randomizationPictures";

const initialState = {
  gameStarted: false, //начата ли игра
  pictureLayout: [], // массив с объектами картинок
  pictureOpen: 0, //счетчик количества открытых картинок
  numberPictureOpen: [], //индексы открытых картинок
  moves: 0, //счетчик ходов
  time: '',
  historyGame: [],
  isGameOver: false,
};
const PictureContext = createContext();

function checkVictory(arr) {
  const temp = arr.filter((picture) => {
    return picture.open === false;
  });
  return temp.length <= 0;
}

function changeStatusPicture(arrPicture, arrPos) {
  const newArrPicture = arrPicture.map((picture) => {
    if (picture.position === arrPos[0] || picture.position === arrPos[1])
      return { ...picture, open: !picture.open };
    else return picture;
  });
  return newArrPicture;
}

function reducer(state, action) {
  switch (action.type) {
    case "startGame": {
      return { ...state, pictureLayout: randomArrPicture(), gameStarted: true };
    }
    case "pictureOpen": {
      if (state.pictureOpen === 2 || state.isGameOver) return state;
      return {
        ...state,
        pictureOpen: ++state.pictureOpen,
        pictureLayout: changeStatusPicture(state.pictureLayout, action.payload),
        numberPictureOpen: [...state.numberPictureOpen, action.payload],
      };
    }
    case "picturesMatched": {
      return {
        ...state,
        pictureOpen: 0,
        moves: ++state.moves,
        numberPictureOpen: [],
        historyGame: [...state.historyGame, [...action.payload]],
        isGameOver: checkVictory(state.pictureLayout),
      };
    }
    case "pictureClose": {
      return {
        ...state,
        pictureLayout: changeStatusPicture(state.pictureLayout, action.payload),
        historyGame: [...state.historyGame, [...action.payload]],
        pictureOpen: 0,
        numberPictureOpen: [],
        moves: ++state.moves,
      };
    }
    case "victory": {
      return;
    }

    case "reset": {
      return {
        ...initialState,
        gameStarted: true,
        pictureLayout: randomArrPicture(),
        isGameOver: false,
      };
    }
    case "showHistory": {
      return;
    }
    case "time": {
      return {
        ...state,
        time: action.payload,
      };
    }
    default:
      throw new Error("Неизвестный тип");
  }
}

function PictureProvaider({ children }) {
  const [
    {
      gameStarted,
      pictureLayout,
      pictureOpen,
      numberPictureOpen,
      moves,
      historyGame,
      isGameOver,
      time,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <PictureContext.Provider
      value={{
        gameStarted,
        pictureLayout,
        pictureOpen,
        numberPictureOpen,
        moves,
        historyGame,
        isGameOver,
        dispatch,
        time,
      }}
    >
      {children}
    </PictureContext.Provider>
  );
}
function usePicture() {
  const contex = useContext(PictureContext);
  if (contex === undefined)
    throw new Error("PictureContext используется вне PictureProvider");

  return contex;
}

export { PictureProvaider, usePicture };

function openPictureForHistory(objPicture, arrPos) {}
