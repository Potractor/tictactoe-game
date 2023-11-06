const Square = ({ value, onclick }) => {
  return (
    <button type="button" onClick={onclick} className="square">
      {value}
    </button>
  );
};

export default Square;
