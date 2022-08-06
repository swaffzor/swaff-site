import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const TetrisApp = React.lazy(() => import('tetris/App'))

const App = () => (
  <div className="max-w-6xl mx-auto mt-10">
    <div>Name: swaff-site-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <React.Suspense fallback='Loading Tetris...'>
      <TetrisApp />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
