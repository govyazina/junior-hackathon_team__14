function Button({ children, onClick, className }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
