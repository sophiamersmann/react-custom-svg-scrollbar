import CustomSvgScrollbar from './CustomSvgScrollbar';
import Content from './Content';

import './App.css';

function App() {
  const height = 600;
  const width = 50;

  return (
    <div className="app">
      <CustomSvgScrollbar
        height={height}
        width={width}
        track={<rect width={width} height={height} fill="khaki" />}
      >
        <Content />
      </CustomSvgScrollbar>
    </div>
  );
}

export default App;
