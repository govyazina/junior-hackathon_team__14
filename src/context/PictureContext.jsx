import { createContext, useContext, useReducer } from "react";
import { randomArrPicture } from "../randomizationPictures/randomizationPictures";

const initialState = {
  game: {
    gameStarted: false, //начата ли игра
    afterIsShowHistory: false, //была ли показана история
    pictureLayout: [], // массив с объектами картинок
    pictureOpen: 0, //счетчик количества открытых картинок
    numberPictureOpen: [], //индексы открытых картинок
    moves: 0, //счетчик ходов
    isGameOver: false,
    time: "",
  },
  history: {
    isShowHistory: false,
    historyGame: [],
    currentStepHistory: 0,
  },
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
      return {
        ...state,
        game: {
          ...state.game,
          pictureLayout: randomArrPicture(),
          gameStarted: true,
          afterIsShowHistory: false,
        },
      };
    }
    case "pictureOpen": {
      if (state.game.pictureOpen === 2 || state.game.isGameOver) return state;
      else if (
        (state.game.numberPictureOpen.length === 1 &&
          action.payload[0] === state.game.numberPictureOpen[0][0]) ||
        state.game.isGameOver
      ) {
        return state;
      } else
        return {
          ...state,
          game: {
            ...state.game,
            pictureOpen: ++state.game.pictureOpen,
            pictureLayout: changeStatusPicture(
              state.game.pictureLayout,
              action.payload
            ),
            numberPictureOpen: [
              ...state.game.numberPictureOpen,
              action.payload,
            ],
          },
        };
    }
    case "picturesMatched": {
      return {
        ...state,
        game: {
          ...state.game,
          pictureOpen: 0,
          moves: ++state.game.moves,
          numberPictureOpen: [],
          isGameOver: checkVictory(state.game.pictureLayout),
        },
        history: {
          ...state.history,
          historyGame: [...state.history.historyGame, state.game],
        },
      };
    }
    case "pictureClose": {
      return {
        ...state,
        game: {
          ...state.game,
          pictureLayout: changeStatusPicture(
            state.game.pictureLayout,
            action.payload
          ),
          pictureOpen: 0,
          numberPictureOpen: [],
          moves: ++state.game.moves,
        },

        history: {
          ...state.history,
          historyGame: [...state.history.historyGame, state.game],
        },
      };
    }
    case "victory": {
      return {
        ...state,
        history: {
          ...state.history,
          historyGame: [...state.history.historyGame, state.game],
        },
      };
    }

    case "reset": {
      return {
        ...initialState,
        game: {
          ...initialState.game,
          gameStarted: true,
          pictureLayout: randomArrPicture(),
        },
      };
    }
    case "showHistory": {
      if (!state.history.isShowHistory)
        return {
          ...state,
          game: state.history.historyGame[state.history.currentStepHistory],
          history: {
            ...state.history,
            isShowHistory: true,
            currentStepHistory: ++state.history.currentStepHistory,
          },
        };
      else {
        if (
          state.history.currentStepHistory - 1 ===
          state.history.historyGame.length
        ) {
          return {
            ...state,
            game: { ...state.game, afterIsShowHistory: true, isGameOver: true },
            history: {
              ...state.history,
              isShowHistory: false,
              currentStepHistory: 0,
            },
          };
        } else {
          return {
            ...state,
            game: state.history.historyGame[state.history.currentStepHistory],
            history: {
              ...state.history,
              currentStepHistory: ++state.history.currentStepHistory,
            },
          };
        }
      }
    }
    case "time": {
      return {
        ...state,
        game: { ...state.game, time: action.payload },
      };
    }
    default:
      throw new Error("Неизвестный тип");
  }
}

function PictureProvaider({ children }) {
  const [{ game, history }, dispatch] = useReducer(reducer, initialState);
  const { gameStarted } = game;
  const { pictureLayout } = game;
  const { pictureOpen } = game;
  const { numberPictureOpen } = game;
  const { moves } = game;
  const { isGameOver } = game;
  const { historyGame } = history;
  const { isShowHistory } = history;
  const { time } = game;
  const { afterIsShowHistory } = game;
  const movesAll = history.historyGame.length;
  return (
    <PictureContext.Provider
      value={{
        gameStarted,
        pictureLayout,
        pictureOpen,
        numberPictureOpen,
        moves,
        historyGame,
        isShowHistory,
        isGameOver,
        dispatch,
        time,
        movesAll,
        afterIsShowHistory,
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
