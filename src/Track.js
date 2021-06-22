function Track({ width, height }) {
  const r = 5;
  const nColumns = width / (r * 2);
  const nRows = height / (r * 2);

  const grid = [];
  for (let col = 0; col < nColumns; col += 1) {
    for (let row = 0; row < nRows; row += 1) {
      grid.push({ col, row });
    }
  }

  return (
    <g className="track">
      <rect width={width} height={height} fill="aliceblue" />
      {grid.map(({ row, col }) => (
        <circle
          key={`${col}-${row}`}
          cx={r + col * r * 2}
          cy={r + row * r * 2}
          r={r}
          fill="lightblue"
        />
      ))}
    </g>
  );
}

export default Track;
