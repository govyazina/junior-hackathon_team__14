function Button({ children, onClick }) {
  return (
    <div>
      <button className="startBtn" onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
