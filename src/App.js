import CustomSvgScrollbar from './CustomSvgScrollbar';
import Content from './Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <CustomSvgScrollbar>
        <Content />
      </CustomSvgScrollbar>
    </div>
  );
}

export default App;
