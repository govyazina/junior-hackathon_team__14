function StartGame({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "startGame" })}>
        Начало игры
      </button>
    </div>
  );
}

export default StartGame;
