import { createContext, useContext, useReducer } from "react";
import { randomArrPicture } from "../randomizationPictures/randomizationPictures";

const initialState = {
  gameStarted: false, //начата ли игра
  pictureLayout: [], // массив с объектами картинок
  pictureOpen: 0, //счетчик количества открытых картинок
  numberPictureOpen: [], //индексы открытых картинок
  moves: 0, //счетчик ходов
  historyGame: [],
  isOpen: false,
};
const PictureContext = createContext();

function checkVictory(arr) {
  arr.reduce((acc, picture) => {
    if (picture.open === false) return acc;
    else {
      picture.open === true ? (acc = false) : false;
      return acc;
    }
  }, false);
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
      console.log(state.pictureOpen);
      if (state.pictureOpen === 2 || state.isOpen) return state;
      return {
        ...state,
        pictureOpen: state.pictureOpen++,
        pictureLayout: changeStatusPicture(state.pictureLayout, action.payload),
        numberPictureOpen: [...state.numberPictureOpen, action.payload],
      };
    }
    case "picturesMatched": {
      console.log(checkVictory(state.pictureLayout));
      return {
        ...state,
        pictureOpen: 0,
        numberPictureOpen: [],
        historyGame: [...state.historyGame, [...action.payload]],
        isOpen: state.pictureLayout.reduce((acc, picture) => {
          picture.open === false ? (acc = false) : false;
          return acc;
        }, false),
      };
    }
    case "pictureClose": {
      return {
        ...state,
        pictureLayout: changeStatusPicture(state.pictureLayout, action.payload),
        historyGame: [...state.historyGame, [...action.payload]],
        pictureOpen: 0,
        numberPictureOpen: [],
        moves: state.moves + 1,
      };
    }
    case "victory": {
      return;
    }
    case "reset": {
      console.log(randomArrPicture());
      return {
        ...initialState,
        gameStarted: true,
        pictureLayout: randomArrPicture(),
        isOpen: false,
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
      isOpen,
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
        isOpen,
        dispatch,
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
