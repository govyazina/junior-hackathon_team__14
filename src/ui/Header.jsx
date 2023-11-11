import Reset from "./Reset";

function Header({ gameStarted, moves, dispatch }) {
  return (
    <header className="header">
      <div>Заголовок</div>
      {gameStarted && moves}
      {gameStarted && <Reset onClick={() => dispatch({ type: "reset" })} />}
    </header>
  );
}

export default Header;
