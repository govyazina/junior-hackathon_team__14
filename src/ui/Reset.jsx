import reset from '../assets/icons/refresh.svg'
function Reset({ onClick }) {
  return <button className="resetBtn" onClick={onClick}>
    <img src={reset} alt={reset}/>
  </button>;
}

export default Reset;
