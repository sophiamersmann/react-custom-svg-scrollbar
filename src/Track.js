
function Track(props) {
  const r = 5;
  const nColumns = props.width / (r * 2);
  const nRows = props.height / (r * 2);

  const grid = [];
  for (let col = 0; col < nColumns; col++) {
    for (let row = 0; row < nRows; row++) {
      grid.push({ col, row });
    }
  }

  return (
    <g className="track">
      <rect width={props.width} height={props.height} fill="aliceblue" />
      {grid.map(({ row, col }) =>
        <circle
          key={`${col}-${row}`}
          cx={r + col * r * 2}
          cy={r + row * r * 2}
          r={r}
          fill="lightblue" />
      )}
    </g>
  );
}

export default Track;
