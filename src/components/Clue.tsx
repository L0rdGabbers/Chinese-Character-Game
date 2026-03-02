type ClueProps = {
  clueType: string;
};

function Clue({ clueType }: ClueProps) {
  return (
    <div className="border">
      <div className="input-group mb-3">
        <span className="input-group-text">线索</span>
        <div className="form-floating">
          <label htmlFor={clueType}>{clueType}</label>
          <input type="text" className="form-control" id={clueType} maxLength={1} />
        </div>
      </div>
    </div>
  );
}

export default Clue;