import CustomSvgScrollbar from './CustomSvgScrollbar';
import Content from './Content';
import Track from './Track';

import './App.css';

function App() {
  const height = 600;
  const width = 50;

  return (
    <div className="app">
      <CustomSvgScrollbar height={height}>
        <Content />
      </CustomSvgScrollbar>

      <CustomSvgScrollbar
        height={height}
        width={width}
        track={<rect width={width} height={height} fill="khaki" rx="10" ry="10" />}
        handleStyles={{ fill: 'orangered', rx: '10px', ry: '10px' }}
      >
        <Content />
      </CustomSvgScrollbar>

      <CustomSvgScrollbar
        height={height}
        width={width}
        track={<Track height={height} width={width} />}
        handleStyles={{
          fill: 'transparent',
          stroke: 'orangered',
          'stroke-width': 5,
          'stroke-opacity': 0.8,
        }}
      >
        <Content />
      </CustomSvgScrollbar>
    </div>
  );
}

export default App;
